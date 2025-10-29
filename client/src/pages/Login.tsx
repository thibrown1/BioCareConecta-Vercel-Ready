import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BioCareLogoSVG } from "@/components/BioCareLogoSVG";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { authService } from "@/services/api";

type UserType = "patient" | "professional";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login: authLogin } = useAuth();
  const [userType, setUserType] = useState<UserType>("patient");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!login.trim() || !password.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      // Validação básica
      if (login.length < 3) {
        toast.error("Login inválido");
        setIsLoading(false);
        return;
      }

      if (password.length < 6) {
        toast.error("Senha deve ter pelo menos 6 caracteres");
        setIsLoading(false);
        return;
      }

      // Chamar serviço de autenticação
      const { user } = await authService.login(login, password, userType);

      // Armazenar usuário no contexto
      authLogin(user);

      // Sucesso
      toast.success(`Bem-vindo, ${user.name}!`);

      // Redirecionar para dashboard apropriado (com pequeno delay para garantir estado)
      setTimeout(() => {
        if (userType === "patient") {
          setLocation("/patient-dashboard");
        } else {
          setLocation("/professional-dashboard");
        }
      }, 100);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login. Tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardContent className="pt-8 pb-8">
          {/* Logo e Título */}
          <div className="flex flex-col items-center mb-8">
            <BioCareLogoSVG />
            <h1 className="text-2xl font-bold text-teal-700 text-center mt-4">
              BioCare
            </h1>
            <p className="text-xs text-gray-500 text-center mt-1">
              CONECTANDO RESULTADOS A CONDUTAS TERAPÊUTICAS
            </p>
          </div>

          {/* Seleção de Tipo de Usuário */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setUserType("patient")}
              className={`flex-1 py-3 px-4 rounded-full font-semibold text-white transition-all ${
                userType === "patient"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              PACIENTE
            </button>
            <button
              onClick={() => setUserType("professional")}
              className={`flex-1 py-3 px-4 rounded-full font-semibold text-white transition-all ${
                userType === "professional"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              PROFISSIONAL
            </button>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Campo de Login */}
            <div>
              <Input
                type="text"
                placeholder="LOGIN"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Campo de Senha */}
            <div>
              <Input
                type="password"
                placeholder="SENHA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Botão Entrar */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "ENTRANDO..." : "ENTRAR"}
            </Button>
          </form>

          {/* Links Adicionais */}
          <div className="mt-6 space-y-3 text-center">
            <button
              onClick={() => setLocation("/forgot-password")}
              className="block w-full text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              ESQUECI MINHA SENHA
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OU</span>
              </div>
            </div>

            <button
              onClick={() => setLocation("/signup")}
              className="w-full py-3 px-4 border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              CRIAR CONTA
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
