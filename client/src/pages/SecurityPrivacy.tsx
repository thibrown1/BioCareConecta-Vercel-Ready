import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, CheckCircle } from "lucide-react";

export default function SecurityPrivacy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Segurança e Privacidade</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Segurança e Privacidade
          </h2>
          <p className="text-gray-600">Sua Privacidade é Nossa Prioridade.</p>
        </div>

        {/* Security Features */}
        <div className="space-y-6">
          {/* Advanced Encryption */}
          <Card className="shadow-md border-0">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Lock className="w-6 h-6 text-teal-600" />
                CRIPTOGRAFIA AVANÇADA
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Utilizamos criptografia de ponta <span className="font-bold">(AES-256)</span> em
                todas as suas informações e comunicações, garantindo que seus dados estejam sempre
                seguros inacessíveis a terceiros não autorizados.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <p className="text-sm text-teal-900 font-semibold">
                  ✓ Padrão de Criptografia: AES-256 (Padrão Militar)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Two-Factor Authentication */}
          <Card className="shadow-md border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50">
              <CardTitle className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Autenticação em Duas Etapas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Sua conta está protegida por autenticação em duas etapas, garantindo que apenas
                você possa acessar suas informações médicas e dados sensíveis.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-2">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">✓</span> Código de Verificação por SMS
                </p>
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">✓</span> Autenticador de Aplicativo
                </p>
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">✓</span> Biometria (Impressão Digital / Face ID)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SSL/TLS Certificate */}
          <Card className="shadow-md border-0">
            <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Shield className="w-6 h-6 text-green-600" />
                Certificado SSL/TLS para Conexões Seguras
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Todas as conexões com nossos servidores são criptografadas usando certificados
                SSL/TLS de última geração, garantindo que seus dados não sejam interceptados
                durante a transmissão.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-900 font-semibold">
                  ✓ Protocolo: TLS 1.3 (Mais Recente e Seguro)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bank-Level Security */}
          <Card className="shadow-md border-0 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Proteção em Nível Bancário
                  </h4>
                  <p className="text-gray-700">
                    Seus dados estão protegidos da segurança de nível bancário, com conformidade
                    com HIPAA, LGPD e outras regulamentações internacionais de privacidade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Commitment */}
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle>Nosso Compromisso com Sua Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Dados Nunca Compartilhados</h5>
                  <p className="text-sm text-gray-600">
                    Seus dados médicos nunca serão compartilhados com terceiros sem seu
                    consentimento explícito.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Controle Total</h5>
                  <p className="text-sm text-gray-600">
                    Você tem controle total sobre quem pode acessar suas informações médicas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-1">Transparência</h5>
                  <p className="text-sm text-gray-600">
                    Somos transparentes sobre como usamos seus dados e como os protegemos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button
            onClick={() => setLocation("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-full"
          >
            Voltar ao Login
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold rounded-full"
          >
            Ler Política de Privacidade
          </Button>
        </div>
      </div>
    </div>
  );
}
