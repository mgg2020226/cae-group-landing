export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "revisoria-fiscal",
    title: "Revisoría Fiscal y Auditoría",
    category: "Auditoría",
    description:
      "Evaluamos la información financiera y fortalecemos el sistema de control interno mediante procesos desarrollados conforme a las Normas Internacionales de Auditoría.",
    icon: "fa-solid fa-shield-halved",
    items: [
      "Revisoría Fiscal",
      "Auditoría Externa",
      "Auditoría Interna",
      "Evaluación de Estados Financieros",
      "Evaluación de riesgos",
      "Evaluación del Sistema de Control Interno",
      "Controles Generales de TI (IT General Controls)",
      "Auditoría de procesos de negocio",
      "Planes de Continuidad del Negocio (BCP)",
      "Levantamiento de procesos",
      "Estandarización de procesos",
      "Evaluación de SARLAFT",
      "Evaluación de SAGRILAFT",
      "Evaluación de SARO",
      "Evaluación de SARM",
      "Evaluación de SARL",
      "Evaluación de SARC",
    ],
  },
  {
    id: "asesoria-tributaria",
    title: "Asesoría Tributaria",
    category: "Impuestos",
    description:
      "Brindamos asesoramiento tributario para el adecuado cumplimiento de las obligaciones fiscales, la planeación tributaria y la atención de requerimientos de las entidades de control.",
    icon: "fa-solid fa-file-invoice-dollar",
    items: [
      "Planeación tributaria",
      "Consultoría tributaria",
      "Conceptos tributarios",
      "Preparación de documentos legales tributarios",
      "Preparación de declaraciones tributarias",
      "Liquidación de impuestos",
      "Preparación de formularios tributarios",
      "Asesoría tributaria para personas naturales",
      "Asesoría tributaria para socios y accionistas",
      "Análisis de efectos fiscales",
      "Análisis contable bajo NIIF",
      "Cumplimiento de obligaciones fiscales",
    ],
  },
  {
    id: "informacion-exogena",
    title: "Información Exógena",
    category: "Cumplimiento Tributario",
    description:
      "Elaboramos y presentamos la información requerida por las entidades de control conforme a la normativa vigente.",
    icon: "fa-solid fa-file-export",
    items: [
      "Elaboración de Información Exógena",
      "Presentación ante la DIAN",
      "Presentación ante entidades territoriales",
      "Validación de información",
      "Cumplimiento normativo",
      "Mitigación de riesgos tributarios",
    ],
  },
  {
    id: "outsourcing-contable",
    title: "Outsourcing y Asesoría Contable",
    category: "Contabilidad",
    description:
      "Acompañamos la gestión contable de las organizaciones mediante soluciones orientadas al cumplimiento de las obligaciones financieras, fiscales, laborales y legales.",
    icon: "fa-solid fa-network-wired",
    items: [
      "Outsourcing Contable",
      "Asesoría Contable",
      "Contabilidad bajo NIIF",
      "Registro de operaciones",
      "Estados Financieros",
      "Cumplimiento contable",
      "Cumplimiento fiscal",
      "Cumplimiento legal",
      "Cumplimiento laboral",
      "Soporte contable permanente",
      "Información financiera para la toma de decisiones",
    ],
  },
  {
    id: "juridica",
    title: "Asesoría Jurídica Corporativa",
    category: "Legal",
    description:
      "Prestamos asesoría jurídica especializada en derecho comercial, societario, contratación laboral, gobierno corporativo y procesos de negociación.",
    icon: "fa-solid fa-scale-balanced",
    items: [
      "Derecho Comercial",
      "Derecho Societario",
      "Planeación Patrimonial",
      "Contratación Laboral",
      "Talento Humano",
      "Gobierno Corporativo",
      "Secretaría General",
      "Auditoría Legal",
      "Due Diligence",
      "Negociación Empresarial",
      "Cobranza Jurídica",
    ],
  },
  {
    id: "back-office",
    title: "Back Office Administrativo",
    category: "Administración",
    description:
      "Apoyamos los procesos administrativos y operativos para mejorar la eficiencia y optimizar los recursos de su organización.",
    icon: "fa-solid fa-desktop",
    items: [
      "Procesos Administrativos",
      "Procesos de Soporte",
      "Gestión de Recursos Humanos",
      "Gestión Contable",
      "Atención al Cliente",
      "Administración de Inventarios",
      "Optimización de Recursos",
      "Reducción de Costos Operativos",
      "Incremento de Productividad",
      "Mejora de la Eficiencia",
    ],
  },
  {
    id: "gobierno-familiar",
    title: "Consultoría para Familias Empresarias",
    category: "Consultoría",
    description:
      "Acompañamos la implementación de modelos de gobierno corporativo y familiar que favorezcan la continuidad y sostenibilidad de la empresa.",
    icon: "fa-solid fa-people-roof",
    items: [
      "Gobierno Corporativo",
      "Gobierno Familiar",
      "Protocolos Familiares",
      "Planeación de la sucesión",
      "Protección del patrimonio",
      "Herramientas para la toma de decisiones",
      "Fortalecimiento de relaciones familiares",
      "Continuidad empresarial",
    ],
  },
  {
    id: "estrategia-innovacion",
    title: "Estrategia e Innovación Empresarial",
    category: "Consultoría Estratégica",
    description:
      "Diseñamos soluciones orientadas al fortalecimiento de la gestión empresarial mediante estrategias de crecimiento, innovación y optimización de procesos.",
    icon: "fa-solid fa-rocket",
    items: [
      "Estrategia Empresarial",
      "Innovación Empresarial",
      "Transformación Digital",
      "Modelos de Negocio",
      "Asesoría Comercial",
      "Estrategia Comercial",
      "Estrategia Digital",
      "Optimización de Operaciones",
      "Optimización de Procesos",
      "Implementación Tecnológica",
      "Automatización de Procesos",
      "Análisis Financiero",
      "Mejoramiento de la Rentabilidad",
      "Crecimiento Empresarial",
      "Soluciones Tecnológicas",
      "Diseño de estrategias de crecimiento",
    ],
  },
];

export const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER ?? "573000000000";
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? "info@caegroup.com";
export const CONTACT_ADDRESS = import.meta.env.VITE_CONTACT_ADDRESS ?? "Bogotá, Colombia";

export function waUrl(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
