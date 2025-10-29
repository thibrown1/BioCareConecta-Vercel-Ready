/**
 * BioCare Conecta - API Service
 * Serviço de API com dados mockados para simular chamadas de backend
 */

import type {
  User,
  Patient,
  Professional,
  Exam,
  Document,
  Alert,
  Appointment,
} from "@/types";

// Simular delay de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Serviço de Autenticação
 */
export const authService = {
  async login(
    email: string,
    password: string,
    userType: "patient" | "professional"
  ): Promise<{ user: User; token: string }> {
    await delay(1000);

    // Extrair nome do email (parte antes do @)
    const nameFromEmail = email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1);

    if (userType === "patient") {
      const patient: Patient = {
        id: "patient-" + Date.now(),
        name: nameFromEmail,
        email: email,
        cpf: "123.456.789-00",
        type: "patient",
        medicalHistory: "Hipertensão, Diabetes",
        allergies: ["Penicilina"],
        createdAt: new Date(),
      };

      return {
        user: patient,
        token: "mock-patient-token-" + Date.now(),
      };
    } else {
      const professional: Professional = {
        id: "prof-" + Date.now(),
        name: nameFromEmail,
        email: email,
        cpf: "987.654.321-00",
        type: "professional",
        specialty: "Clínico Geral",
        crm: "123456/SP",
        patients: ["patient-1", "patient-2", "patient-3"],
        createdAt: new Date(),
      };

      return {
        user: professional,
        token: "mock-professional-token-" + Date.now(),
      };
    }
  },

  async signup(data: {
    fullName: string;
    email: string;
    cpf: string;
    password: string;
    userType: "patient" | "professional";
  }): Promise<{ user: User; token: string }> {
    await delay(1500);

    const user: User = {
      id: `user-${Date.now()}`,
      name: data.fullName,
      email: data.email,
      cpf: data.cpf,
      type: data.userType,
      createdAt: new Date(),
    };

    return {
      user,
      token: "mock-token-" + Date.now(),
    };
  },

  async resetPassword(email: string): Promise<{ success: boolean }> {
    await delay(1000);
    return { success: true };
  },
};

/**
 * Serviço de Exames
 */
export const examService = {
  async getPatientExams(patientId: string): Promise<Exam[]> {
    await delay(800);

    return [
      {
        id: "exam-1",
        name: "Hemograma Completo",
        date: "01/10/2023",
        type: "PDF",
        quality: "verificado",
        patientId,
      },
      {
        id: "exam-2",
        name: "Sumograr slostar",
        date: "01/09/2023",
        type: "PDF",
        quality: "verificado",
        patientId,
      },
      {
        id: "exam-3",
        name: "Glicemia de Jejum",
        date: "01/09/2023",
        type: "PDF",
        quality: "verificado",
        patientId,
      },
      {
        id: "exam-4",
        name: "Glicemia de Jejum",
        date: "01/09/2023",
        type: "PDF",
        quality: "verificado",
        patientId,
      },
      {
        id: "exam-5",
        name: "Cunteclosse",
        date: "01/09/2023",
        type: "PDF",
        quality: "verificado",
        patientId,
      },
    ];
  },

  async uploadExam(
    patientId: string,
    file: File,
    examName: string
  ): Promise<Exam> {
    await delay(2000);

    return {
      id: `exam-${Date.now()}`,
      name: examName,
      date: new Date().toLocaleDateString("pt-BR"),
      type: file.type,
      quality: "pendente",
      patientId,
    };
  },

  async downloadExam(examId: string): Promise<{ url: string }> {
    await delay(500);
    return { url: `https://example.com/exams/${examId}.pdf` };
  },
};

/**
 * Serviço de Documentos
 */
export const documentService = {
  async getUserDocuments(userId: string): Promise<Document[]> {
    await delay(800);

    return [
      {
        id: "doc-1",
        name: "Hemograma Completo",
        date: "2021.10.2018",
        type: "PDF",
        ownerId: userId,
      },
      {
        id: "doc-2",
        name: "Receita Médica",
        date: "2021.10.2018",
        type: "PDF",
        ownerId: userId,
      },
      {
        id: "doc-3",
        name: "Relatório de Consulta",
        date: "2021.10.2018",
        type: "PDF",
        ownerId: userId,
      },
    ];
  },

  async downloadDocument(docId: string): Promise<{ url: string }> {
    await delay(500);
    return { url: `https://example.com/documents/${docId}.pdf` };
  },
};

/**
 * Serviço de Alertas
 */
export const alertService = {
  async getPatientAlerts(patientId: string): Promise<Alert[]> {
    await delay(800);

    return [
      {
        id: "alert-1",
        patientId,
        level: "red",
        title: "ALERTA CRÍTICO: URGENTE",
        message: "Valores críticos detectados nos últimos exames",
        conducts: [
          "Dirija-se ao pronto-socorro imediatamente!",
          "Leve seus últimos exames.",
          "Contalte seu médico.",
        ],
        createdAt: new Date(),
      },
    ];
  },

  async getProfessionalAlerts(professionalId: string): Promise<Alert[]> {
    await delay(800);

    return [
      {
        id: "alert-prof-1",
        patientId: "patient-1",
        level: "red",
        title: "ALERTA CRÍTICO",
        message: "Paciente: Maria Torres",
        conducts: [
          "Contactar paciente imediatamente.",
          "Revisar últimos scores (Hemograma)",
          "Agendar consulta de urgência.",
        ],
        createdAt: new Date(),
      },
    ];
  },
};

/**
 * Serviço de Gráficos
 */
export const chartService = {
  async getPatientChartData(
    patientId: string
  ): Promise<{ month: string; glicemia: number; colesterol: number; pressao: number }[]> {
    await delay(1000);

    return [
      { month: "MÊS 1", glicemia: 100, colesterol: 180, pressao: 120 },
      { month: "MÊS 2", glicemia: 105, colesterol: 185, pressao: 125 },
      { month: "MÊS 3", glicemia: 110, colesterol: 190, pressao: 130 },
      { month: "MÊS 4", glicemia: 115, colesterol: 195, pressao: 135 },
      { month: "MÊS 5", glicemia: 120, colesterol: 200, pressao: 140 },
    ];
  },
};

/**
 * Serviço de Pacientes
 */
export const patientService = {
  async getProfessionalPatients(professionalId: string): Promise<Patient[]> {
    await delay(800);

    return [
      {
        id: "patient-1",
        name: "Maria Torres",
        email: "maria@example.com",
        cpf: "123.456.789-00",
        type: "patient",
        medicalHistory: "Hipertensão, Diabetes",
        allergies: ["Penicilina"],
        createdAt: new Date(),
      },
      {
        id: "patient-2",
        name: "João da Silva",
        email: "joao@example.com",
        cpf: "123.456.789-01",
        type: "patient",
        medicalHistory: "Asma",
        createdAt: new Date(),
      },
      {
        id: "patient-3",
        name: "Pedro Silva",
        email: "pedro@example.com",
        cpf: "123.456.789-02",
        type: "patient",
        medicalHistory: "Sem histórico",
        createdAt: new Date(),
      },
    ];
  },
};

/**
 * Serviço de Consultas
 */
export const appointmentService = {
  async getProfessionalAppointments(professionalId: string): Promise<Appointment[]> {
    await delay(800);

    return [
      {
        id: "apt-1",
        patientId: "patient-1",
        professionalId,
        date: "2025-11-05",
        time: "09:00",
        status: "confirmado",
      },
      {
        id: "apt-2",
        patientId: "patient-2",
        professionalId,
        date: "2025-11-05",
        time: "10:30",
        status: "pendente",
      },
      {
        id: "apt-3",
        patientId: "patient-3",
        professionalId,
        date: "2025-11-05",
        time: "14:00",
        status: "confirmado",
      },
    ];
  },
};
