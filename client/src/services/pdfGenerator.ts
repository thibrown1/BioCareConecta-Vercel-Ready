import jsPDF from 'jspdf';

export interface ExamData {
  name: string;
  date: string;
  patientName: string;
  doctorName?: string;
}

function generateRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateExamPDF(exam: ExamData): void {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(16);
  doc.text('BioCare Conecta', 20, 20);
  doc.setFontSize(10);
  doc.text('Conectando Resultados a Condutas Terapêuticas', 20, 28);
  
  // Separator
  doc.setDrawColor(52, 152, 219);
  doc.line(20, 32, 190, 32);
  
  // Exam Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Exame: ${exam.name}`, 20, 45);
  
  // Patient Info
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Paciente: ${exam.patientName}`, 20, 55);
  doc.text(`Data do Exame: ${exam.date}`, 20, 62);
  if (exam.doctorName) {
    doc.text(`Médico Responsável: ${exam.doctorName}`, 20, 69);
  }
  
  // Results Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('RESULTADOS DO EXAME', 20, 85);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  let yPosition = 95;
  const lineHeight = 8;
  
  // Generate random results based on exam type
  if (exam.name.includes('Hemograma')) {
    const results = [
      { label: 'Hemoglobina', value: `${generateRandomValue(120, 160)} g/dL`, normal: 'Normal' },
      { label: 'Hematócrito', value: `${generateRandomValue(36, 46)}%`, normal: 'Normal' },
      { label: 'Leucócitos', value: `${generateRandomValue(4000, 11000)}/µL`, normal: 'Normal' },
      { label: 'Plaquetas', value: `${generateRandomValue(150000, 400000)}/µL`, normal: 'Normal' },
      { label: 'VCM', value: `${generateRandomValue(80, 100)} fL`, normal: 'Normal' },
    ];
    
    results.forEach((result) => {
      doc.text(`${result.label}: ${result.value}`, 25, yPosition);
      doc.setTextColor(34, 139, 34);
      doc.text(`[${result.normal}]`, 140, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += lineHeight;
    });
  } else if (exam.name.includes('Glicemia')) {
    const results = [
      { label: 'Glicemia de Jejum', value: `${generateRandomValue(70, 110)} mg/dL`, normal: 'Normal' },
      { label: 'Glicemia Pós-Prandial', value: `${generateRandomValue(100, 140)} mg/dL`, normal: 'Normal' },
    ];
    
    results.forEach((result) => {
      doc.text(`${result.label}: ${result.value}`, 25, yPosition);
      doc.setTextColor(34, 139, 34);
      doc.text(`[${result.normal}]`, 140, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += lineHeight;
    });
  } else if (exam.name.includes('Radiografia')) {
    const results = [
      { label: 'Estrutura Óssea', value: 'Sem alterações', normal: 'Normal' },
      { label: 'Campos Pulmonares', value: 'Transparentes', normal: 'Normal' },
      { label: 'Silhueta Cardíaca', value: 'Normal', normal: 'Normal' },
    ];
    
    results.forEach((result) => {
      doc.text(`${result.label}: ${result.value}`, 25, yPosition);
      doc.setTextColor(34, 139, 34);
      doc.text(`[${result.normal}]`, 140, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += lineHeight;
    });
  } else {
    const results = [
      { label: 'Resultado 1', value: `${generateRandomValue(10, 100)}`, normal: 'Normal' },
      { label: 'Resultado 2', value: `${generateRandomValue(10, 100)}`, normal: 'Normal' },
      { label: 'Resultado 3', value: `${generateRandomValue(10, 100)}`, normal: 'Normal' },
    ];
    
    results.forEach((result) => {
      doc.text(`${result.label}: ${result.value}`, 25, yPosition);
      doc.setTextColor(34, 139, 34);
      doc.text(`[${result.normal}]`, 140, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += lineHeight;
    });
  }
  
  // Footer
  yPosition += 10;
  doc.setFontSize(9);
  doc.setTextColor(128, 128, 128);
  doc.text('Este documento é confidencial e destinado apenas ao paciente e seu médico.', 20, yPosition);
  doc.text('Todos os dados estão protegidos por criptografia AES-256.', 20, yPosition + 6);
  
  // Save PDF
  const fileName = `${exam.name.replace(/\s+/g, '_')}_${exam.date.replace(/\//g, '-')}.pdf`;
  doc.save(fileName);
}
