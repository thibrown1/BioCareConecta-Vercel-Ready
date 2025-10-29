import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  LogOut,
  Menu,
  X,
  AlertCircle,
  Upload,
  Download,
  Lock,
  Users,
  BarChart3,
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

export default function ProfessionalDashboard() {
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"patients" | "documents" | "chart">("patients");

  if (!user || user.type !== "professional") {
    setLocation("/");
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const handleDownload = (docName: string, docDate: string) => {
    try {
      generateExamPDF({
        name: docName,
        date: docDate,
        patientName: "Maria Torres",
        doctorName: user.name
      });
      toast.success(`PDF de ${docName} gerado com sucesso!`);
    } catch (error) {
      toast.error(`Erro ao gerar PDF: ${docName}`);
    }
  };

  const patients = [
    {
      id: 1,
      name: "Maria Torres",
      status: "crítico",
      lastVisit: "2025-10-25",
    },
    {
      id: 2,
      name: "Pedro Silva",
      status: "normal",
      lastVisit: "2025-10-20",
    },
    {
      id: 3,
      name: "Ana Oliveira",
      status: "atenção",
      lastVisit: "2025-10-18",
    },
    {
      id: 4,
      name: "Carlos Santos",
      status: "normal",
      lastVisit: "2025-10-15",
    },
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "crítico":
        return "bg-red-50 border-l-4 border-l-red-600";
      case "atenção":
        return "bg-yellow-50 border-l-4 border-l-yellow-600";
      default:
        return "bg-green-50 border-l-4 border-l-green-600";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "crítico":
        return "bg-red-100 text-red-800";
      case "atenção":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl sticky top-0 z-40 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-400">BioCare</h1>
              <p className="text-xs text-amber-300 font-semibold">Profissional de Saúde</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Security Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-900 border border-green-500 rounded-full">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-xs font-semibold text-green-400">SEGURO</span>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded-lg text-white"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Dr. {user.name}</h2>
          <p className="text-amber-100">{user.email}</p>
          <p className="text-sm text-amber-100 mt-2">Clínico Geral - Painel de Gestão de Pacientes</p>
        </div>

        {/* Critical Alert */}
        <Card className="shadow-xl border-0 bg-red-50 border-l-4 border-l-red-600 mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-white bg-red-600 rounded-full p-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-red-700 text-lg mb-3">🚨 ALERTA CRÍTICO</h3>
                <p className="text-red-700 font-semibold mb-3">Paciente: Maria Torres</p>
                <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                  <h4 className="font-bold text-gray-800 mb-2">CONDUTAS SUGERIDAS (IA)</h4>
                  <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal">
                    <li>Contactar paciente imediatamente.</li>
                    <li>Revisar últimos scores (Hemograma)</li>
                    <li>Agendar consulta de urgência.</li>
                  </ol>
                  <p className="text-xs text-gray-500 mt-3">⚡ Baseado em análise de IA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b-2 border-amber-500">
          <button
            onClick={() => setActiveTab("patients")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "patients"
                ? "text-amber-400 border-b-4 border-amber-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            👥 PACIENTES
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "documents"
                ? "text-amber-400 border-b-4 border-amber-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            📁 DOCUMENTOS
          </button>
          <button
            onClick={() => setActiveTab("chart")}
            className={`pb-3 font-semibold transition-colors text-lg ${
              activeTab === "chart"
                ? "text-amber-400 border-b-4 border-amber-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            📈 GRÁFICO
          </button>
        </div>

        {/* PATIENTS TAB */}
        {activeTab === "patients" && (
          <div className="space-y-6">
            <Card className="shadow-xl border-0 border-t-4 border-t-amber-500 bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600">
                <CardTitle className="flex items-center gap-2 text-amber-400">
                  <Users className="w-5 h-5" />
                  Meus Pacientes
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {patients.map((patient) => (
                    <div
                      key={patient.id}
                      className={`p-4 border-2 rounded-lg flex justify-between items-center transition-colors ${getStatusColor(patient.status)}`}
                    >
                      <div>
                        <p className="font-medium text-gray-800">{patient.name}</p>
                        <p className="text-xs text-gray-600">Última visita: {patient.lastVisit}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(patient.status)}`}>
                        {patient.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === "documents" && (
          <Card className="shadow-xl border-0 border-t-4 border-t-amber-500 bg-slate-800">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600">
              <CardTitle className="text-amber-400">Meus Documentos e Exames</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Upload Section */}
              <div className="mb-6 p-4 bg-slate-700 border-2 border-dashed border-amber-500 rounded-lg text-center">
                <Upload className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="font-semibold text-amber-400">Fazer Upload de Exame</p>
                <p className="text-xs text-amber-300">Arraste arquivos ou clique para selecionar</p>
              </div>

              {/* Documents List */}
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border-2 border-slate-600 rounded-lg flex justify-between items-center hover:bg-slate-700 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-200">{doc.name}</p>
                      <p className="text-xs text-gray-400">{doc.date}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(doc.name, doc.date)}
                      className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2"
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

        {/* CHART TAB */}
        {activeTab === "chart" && (
          <div className="space-y-6">
            <Card className="shadow-xl border-0 border-t-4 border-t-amber-500 bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600">
                <CardTitle className="flex items-center gap-2 text-amber-400">
                  <BarChart3 className="w-5 h-5" />
                  Evolução de Marcadores - Maria Torres
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6 p-4 bg-slate-700 rounded-lg border-2 border-amber-500">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="month" stroke="#cbd5e1" />
                      <YAxis stroke="#cbd5e1" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1e293b",
                          border: "2px solid #f59e0b",
                          borderRadius: "8px",
                          color: "#fef3c7",
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
                <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-2 border-purple-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        IA
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-200 mb-2">Análise Baseada em IA</h4>
                        <p className="text-sm text-purple-100">
                          Tendência crescente nos marcadores. Recomenda-se intensificar o acompanhamento e considerar ajustes na medicação.
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
