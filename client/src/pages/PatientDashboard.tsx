import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Download,
  LogOut,
  Menu,
  X,
  AlertCircle,
  Shield,
  Lock,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";
import { generateExamPDF } from "@/services/pdfGenerator";

export default function PatientDashboard() {
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"exams" | "documents" | "charts">("exams");

  if (!user || user.type !== "patient") {
    setLocation("/");
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const handleDownload = (examName: string, examDate: string) => {
    try {
      generateExamPDF({
        name: examName,
        date: examDate,
        patientName: user.name,
        doctorName: "Dr. José"
      });
      toast.success(`PDF de ${examName} gerado com sucesso!`);
    } catch (error) {
      toast.error(`Erro ao gerar PDF: ${examName}`);
    }
  };

  const exams = [
    { id: 1, name: "Hemograma Completo", date: "01/10/2023", quality: "verificado" },
    { id: 2, name: "Sumograr slostar", date: "01/09/2023", quality: "verificado" },
    { id: 3, name: "Glicemia de Jejum", date: "01/09/2023", quality: "verificado" },
    { id: 4, name: "Glicemia de Jejum", date: "01/09/2023", quality: "verificado" },
    { id: 5, name: "Cunteclosse", date: "01/09/2023", quality: "verificado" },
  ];

  const documents = [
    { id: 1, name: "Hemograma Completo", date: "2021.10.2018", type: "PDF" },
    { id: 2, name: "Receita Médica", date: "2021.10.2018", type: "PDF" },
    { id: 3, name: "Relatório de Consulta", date: "2021.10.2018", type: "PDF" },
  ];

  const chartData = [
    { month: "MÊS 1", glicemia: 100, colesterol: 180, pressao: 120 },
    { month: "MÊS 2", glicemia: 105, colesterol: 185, pressao: 125 },
    { month: "MÊS 3", glicemia: 110, colesterol: 190, pressao: 130 },
    { month: "MÊS 4", glicemia: 115, colesterol: 195, pressao: 135 },
    { month: "MÊS 5", glicemia: 120, colesterol: 200, pressao: 140 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">BioCare</h1>
              <p className="text-xs text-blue-500 font-semibold">Meu Acompanhamento</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Security Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-300 rounded-full">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-xs font-semibold text-green-700">SEGURO</span>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Bem-vindo, {user.name}!</h2>
          <p className="text-blue-100">{user.email}</p>
          <p className="text-sm text-blue-100 mt-2">Seu acompanhamento de saúde personalizado</p>
        </div>

        {/* Critical Alert */}
        <Card className="shadow-lg border-0 bg-red-50 border-l-4 border-l-red-600 mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-white bg-red-600 rounded-full p-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-red-700 text-lg mb-3">ALERTA CRÍTICO: URGENTE</h3>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-gray-800 mb-2">NOTIFICAÇÃO IMPORTANTE</h4>
                  <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal">
                    <li>Dirija-se ao pronto-socorro imediatamente!</li>
                    <li>Leve seus últimos exames.</li>
                    <li>Contalte seu médico.</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b-2 border-blue-300">
          <button
            onClick={() => setActiveTab("exams")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "exams"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            📋 EXAMES
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "documents"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            📄 DOCUMENTOS
          </button>
          <button
            onClick={() => setActiveTab("charts")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "charts"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            📊 EVOLUÇÃO
          </button>
        </div>

        {/* EXAMS TAB */}
        {activeTab === "exams" && (
          <div className="space-y-6">
            <Card className="shadow-md border-0 border-t-4 border-t-blue-500">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Últimos Exames
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="p-4 border-2 border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{exam.name}</p>
                        <p className="text-xs text-gray-500">{exam.date}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(exam.name, exam.date)}
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Quality Control */}
                <Card className="mt-6 bg-blue-50 border-2 border-blue-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">✓ CONTROLE DE QUALIDADE</h4>
                        <p className="text-sm text-gray-700">
                          Todos os resultados verificados e validados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === "documents" && (
          <Card className="shadow-md border-0 border-t-4 border-t-blue-500">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle>Meus Documentos</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border-2 border-blue-200 rounded-lg flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.date}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(doc.name, doc.date)}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CHARTS TAB */}
        {activeTab === "charts" && (
          <div className="space-y-6">
            <Card className="shadow-md border-0 border-t-4 border-t-blue-500">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle>Evolução de Marcadores</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-300">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="month" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "2px solid #3b82f6",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="glicemia"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", r: 6 }}
                        activeDot={{ r: 8 }}
                        name="Glicemia de Jejum"
                      />
                      <Line
                        type="monotone"
                        dataKey="colesterol"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ fill: "#10b981", r: 6 }}
                        activeDot={{ r: 8 }}
                        name="Colesterol Total"
                      />
                      <Line
                        type="monotone"
                        dataKey="pressao"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        dot={{ fill: "#f59e0b", r: 6 }}
                        activeDot={{ r: 8 }}
                        name="Pressão Sistólica"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* AI Insights */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        IA
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Acompanhamento baseado em IA</h4>
                        <p className="text-sm text-gray-700">
                          Seus marcadores mostram uma tendência de aumento. Recomenda-se intensificar o acompanhamento médico e revisar a medicação.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
