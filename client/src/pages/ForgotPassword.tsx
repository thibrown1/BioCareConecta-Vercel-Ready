import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Por favor, insira seu email");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Email inválido");
      return;
    }

    setIsLoading(true);

    try {
      // Simular envio de email
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setEmailSent(true);
      toast.success("Email de recuperação enviado com sucesso!");
    } catch (error) {
      toast.error("Erro ao enviar email. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Email Enviado!
              </h2>
              <p className="text-gray-600 mb-6">
                Verifique seu email para instruções de recuperação de senha.
              </p>

              <Button
                onClick={() => setLocation("/")}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
              >
                VOLTAR AO LOGIN
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Recuperar Senha
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Insira seu email para receber instruções de recuperação de senha.
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="SEU EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "ENVIANDO..." : "ENVIAR INSTRUÇÕES"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
