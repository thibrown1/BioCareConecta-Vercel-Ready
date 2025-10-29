/**
 * BioCare Conecta - Type Definitions
 * Definições de tipos para o aplicativo
 */

export type UserType = "patient" | "professional";

export type AlertLevel = "green" | "yellow" | "red";

export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  type: UserType;
  createdAt: Date;
}

export interface Patient extends User {
  type: "patient";
  medicalHistory?: string;
  allergies?: string[];
}

export interface Professional extends User {
  type: "professional";
  specialty: string;
  crm: string;
  patients: string[];
}

export interface Exam {
  id: string;
  name: string;
  date: string;
  type: string;
  result?: string;
  quality: "verificado" | "pendente";
  patientId: string;
}

export interface Document {
  id: string;
  name: string;
  date: string;
  type: string;
  url?: string;
  ownerId: string;
}

export interface Alert {
  id: string;
  patientId: string;
  level: AlertLevel;
  title: string;
  message: string;
  conducts?: string[];
  createdAt: Date;
}

export interface ChartData {
  month: string;
  glicemia: number;
  colesterol: number;
  pressao: number;
}

export interface Appointment {
  id: string;
  patientId: string;
  professionalId: string;
  date: string;
  time: string;
  status: "confirmado" | "pendente" | "cancelado";
}

export interface AIRecommendation {
  id: string;
  patientId: string;
  type: "alert" | "suggestion" | "warning";
  content: string;
  confidence: number;
  createdAt: Date;
}
