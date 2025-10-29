import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

type UserType = "patient" | "professional";

export default function SignUp() {
  const [, setLocation] = useLocation();
  const [userType, setUserType] = useState<UserType>("patient");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Por favor, insira seu nome completo");
      return false;
    }

    if (!formData.email.includes("@")) {
      toast.error("Email inválido");
      return false;
    }

    if (formData.cpf.length < 11) {
      toast.error("CPF inválido");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Senha deve ter pelo menos 6 caracteres");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("As senhas não coincidem");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simular criação de conta
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Conta criada com sucesso!");
      setLocation("/");
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardContent className="pt-8 pb-8">
          {/* Botão Voltar */}
          <button
            onClick={() => setLocation("/")}
            className="flex items-center text-blue-500 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>

          {/* Título */}
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Criar Conta</h1>
          <p className="text-gray-600 text-sm mb-6">
            Preencha os dados abaixo para se registrar
          </p>

          {/* Seleção de Tipo de Usuário */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setUserType("patient")}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold text-white transition-all ${
                userType === "patient"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              PACIENTE
            </button>
            <button
              onClick={() => setUserType("professional")}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold text-white transition-all ${
                userType === "professional"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              PROFISSIONAL
            </button>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Input
                type="text"
                name="fullName"
                placeholder="NOME COMPLETO"
                value={formData.fullName}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <Input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <Input
                type="password"
                name="password"
                placeholder="SENHA"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="CONFIRMAR SENHA"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "CRIANDO CONTA..." : "CRIAR CONTA"}
            </Button>
          </form>

          {/* Link para Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Já tem uma conta?{" "}
              <button
                onClick={() => setLocation("/")}
                className="text-blue-500 hover:text-blue-700 font-semibold transition-colors"
              >
                Faça login
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
