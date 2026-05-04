import { jsPDF } from 'jspdf';

interface ReportData {
  name: string;
  craftName: string;
  level: string;
  lessonsCompleted: number;
  totalLessons: number;
  averageScore: string;
  startDate: string;
}

export const generateReportPDF = (data: ReportData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Since jsPDF font support for Arabic is tricky without complex setup, 
  // we'll use English labels for standard generation or simple shapes.
  // Note: For a real app, I'd load a custom font like Cairo base64.
  
  doc.setDrawColor(0, 98, 51); // --green-primary
  doc.setLineWidth(1);
  doc.rect(5, 5, 200, 287);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('Vocational Training Report', 105, 30, { align: 'center' });
  doc.text('تقرير التكوين المهني', 105, 45, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`Learner Name: ${data.name}`, 20, 70);
  doc.text(`Specialization: ${data.craftName}`, 20, 80);
  doc.text(`Current Level: ${data.level}`, 20, 90);
  doc.text(`Lessons Completed: ${data.lessonsCompleted} / ${data.totalLessons}`, 20, 100);
  doc.text(`Average Score: ${data.averageScore}`, 20, 110);
  doc.text(`Start Date: ${data.startDate}`, 20, 120);

  // Progress Bar
  const progress = data.lessonsCompleted / data.totalLessons;
  doc.setDrawColor(200, 200, 200);
  doc.rect(20, 140, 170, 10);
  doc.setFillColor(0, 168, 107); // --green-light
  doc.rect(20, 140, 170 * progress, 10, 'F');

  doc.setFontSize(10);
  doc.text(`Report Generated on: ${new Date().toLocaleDateString()}`, 20, 275);
  doc.text('Algerian Vocational Training Platform 🇩🇿', 105, 285, { align: 'center' });

  doc.save(`Progress_Report_${data.name}.pdf`);
};
