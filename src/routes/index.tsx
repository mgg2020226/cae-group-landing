import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { services, type Service } from "../lib/services-data";
import { useContact, buildWaUrl } from "../lib/use-contact";
import { alliesLogos } from "../lib/allies-data";
import { LogoCloud } from "../components/ui/logo-cloud";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import logo from "../assets/logotipo-cae.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAE GROUP | Soluciones Empresariales" },
      {
        name: "description",
        content:
          "Firma de consultoría y asesoramiento empresarial en las áreas financiera, contable, tributaria, jurídica y de auditoría.",
      },
      { property: "og:title", content: "CAE GROUP | Soluciones Empresariales" },
      {
        property: "og:description",
        content:
          "Acompañamos a organizaciones mediante soluciones especializadas orientadas a fortalecer la gestión empresarial y la toma de decisiones.",
      },
    ],
  }),
  component: Landing,
});



function byId(id: string): Service {
  const s = services.find((s) => s.id === id);
  if (!s) throw new Error(`Unknown service id: ${id}`);
  return s;
}

const revisoriaFiscal = byId("revisoria-fiscal");
const asesoriaTributaria = byId("asesoria-tributaria");
const estrategiaInnovacion = byId("estrategia-innovacion");
const outsourcingContable = byId("outsourcing-contable");
const juridica = byId("juridica");
const informacionExogena = byId("informacion-exogena");
const backOffice = byId("back-office");
const gobiernoFamiliar = byId("gobierno-familiar");

const porQueElegirnos = [
  {
    icon: "fa-solid fa-user-check",
    title: "Atención personalizada",
    description:
      "Cada cliente recibe un acompañamiento cercano, adaptado a las necesidades de su organización.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Equipo multidisciplinario",
    description:
      "Profesionales especializados en auditoría, impuestos, contabilidad, derecho y consultoría empresarial.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Gestión integral de riesgos",
    description:
      "Identificamos oportunidades de mejora y contribuimos al fortalecimiento del control interno y el cumplimiento normativo.",
  },
  {
    icon: "fa-solid fa-award",
    title: "Más de 15 años de experiencia",
    description:
      "Nuestra trayectoria nos permite ofrecer soluciones ajustadas a diferentes sectores económicos.",
  },
];

const comoTrabajamos = [
  {
    n: "01",
    title: "Comprendemos las necesidades de su organización.",
  },
  {
    n: "02",
    title: "Identificamos riesgos y oportunidades de mejora.",
  },
  {
    n: "03",
    title: "Diseñamos soluciones acordes con los objetivos de su empresa.",
  },
  {
    n: "04",
    title: "Acompañamos la implementación y fortalecimiento de su gestión.",
  },
];

const valoresInstitucionales = [
  { i: "fa-solid fa-user-check", t: "Atención personalizada" },
  { i: "fa-solid fa-layer-group", t: "Soluciones integrales" },
  { i: "fa-solid fa-shield-halved", t: "Gestión de riesgos" },
  { i: "fa-solid fa-people-group", t: "Equipo multidisciplinario" },
  { i: "fa-solid fa-handshake", t: "Compromiso profesional" },
  { i: "fa-solid fa-seedling", t: "Crecimiento sostenible" },
];

type TeamMember = {
  name: string;
  position: string;
  area: string;
  summary: string;
  experience: string;
  specialties: string[];
};

const equipo: TeamMember[] = [
  {
    name: "Víctor Flórez Muñoz",
    position: "Gerente General · Socio Fundador",
    area: "Dirección General",
    summary: "Contador Público y Magíster en Tributación.",
    experience: "Más de 20 años de experiencia",
    specialties: [
      "Consultoría Empresarial",
      "Planeación Tributaria",
      "Dirección Estratégica",
      "Sector Solidario",
    ],
  },
  {
    name: "Luis Alfredo Villalba",
    position: "Socio de Auditoría",
    area: "Auditoría y Revisoría Fiscal",
    summary: "Contador Público, Especialista en Gerencia Tributaria.",
    experience: "Más de 10 años de experiencia",
    specialties: ["Auditoría", "Revisoría Fiscal", "SARLAFT", "Control Interno"],
  },
  {
    name: "Jesús Silvera Mejía",
    position: "Gerente de Outsourcing y Asesoría Contable",
    area: "Outsourcing Contable",
    summary: "Especialista en procesos contables y outsourcing.",
    experience: "Más de 9 años de experiencia",
    specialties: ["Outsourcing Contable", "NIIF", "SARLAFT", "Asesoría Contable"],
  },
  {
    name: "Carlos Flórez Ospino",
    position: "Socio de Impuestos",
    area: "Consultoría Tributaria",
    summary: "Especialista en Derecho Tributario.",
    experience: "Más de 6 años de experiencia",
    specialties: ["Planeación Tributaria", "Información Exógena", "DIAN", "Consultoría Fiscal"],
  },
  {
    name: "Juan José Ternera",
    position: "Gerente del Área Jurídica",
    area: "Asesoría Jurídica",
    summary: "Abogado especialista en Derecho Comercial.",
    experience: "Experiencia en Derecho Comercial y Civil",
    specialties: ["Derecho Comercial", "Derecho Societario", "Contratación", "Asesoría Jurídica"],
  },
  {
    name: "Enoc Olivos",
    position: "Consultor Financiero",
    area: "Consultoría Financiera",
    summary: "Ingeniero Industrial con maestrías en Administración y Finanzas.",
    experience: "Más de 25 años de experiencia",
    specialties: ["Finanzas", "Planeación Estratégica", "Alta Gerencia", "Consultoría Empresarial"],
  },
  {
    name: "Carlos Donado",
    position: "Consultor en Estrategia e Innovación Empresarial",
    area: "Estrategia Empresarial",
    summary: "Administrador de Empresas con MBA.",
    experience: "Amplia trayectoria empresarial",
    specialties: [
      "Innovación",
      "Estrategia Empresarial",
      "Desarrollo Comercial",
      "Transformación Organizacional",
    ],
  },
  {
    name: "Juan David Jiménez Jaraba",
    position: "Gerente de Cobranza",
    area: "Gestión Jurídica de Cartera",
    summary: "Abogado especializado en cobranza jurídica.",
    experience: "Más de 3 años de experiencia",
    specialties: ["Cobranza Jurídica", "Derecho Laboral", "Derecho Civil", "Gestión de Cartera"],
  },
];

function Landing() {
  const contact = useContact();
  const waUrl = (text: string) => buildWaUrl(contact.whatsapp, text);
  const WA_URL = waUrl("Hola, quisiera solicitar una asesoría con CAE GROUP");
  const [serviceChoice, setServiceChoice] = useState("");
  const [companySize, setCompanySize] = useState("");

  const ctaText = serviceChoice
    ? `Hola, quisiera solicitar una asesoría sobre ${serviceChoice}${
        companySize ? ` (${companySize})` : ""
      }`
    : "Hola, quisiera solicitar una asesoría con CAE GROUP";

  return (
    <div className="antialiased text-slate-800" style={{ backgroundColor: "#f8fafc" }}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav top-0 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="CAE GROUP" className="h-9 w-auto" />
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#servicios" className="hover:text-brand-800 transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-brand-800 transition-colors">
              Nosotros
            </a>
            <a href="#equipo" className="hover:text-brand-800 transition-colors">
              Equipo
            </a>
            <a href="#contacto" className="hover:text-brand-800 transition-colors">
              Contacto
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-green-200"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="pt-24 pb-12 px-4 md:px-6 max-w-[1400px] mx-auto">
        {/* HERO SECTION */}
        <section className="relative w-full h-[85vh] min-h-[560px] sm:min-h-[600px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl hero-bg flex flex-col justify-end">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0" />

          <div className="hero-title-container max-w-xl rounded-3xl bg-white/85 backdrop-blur-md p-5 shadow-xl sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:shadow-none">
            <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-brand-500 bg-white sm:bg-white/70 px-4 py-1.5 rounded-full mb-4 md:mb-5">
              Aliado estratégico para su organización
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.05] font-extrabold tracking-tighter text-brand-900">
              Somos su{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 to-slate-400">
                aliado estratégico.
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-slate-700 font-medium max-w-lg">
              Consultoría y asesoramiento empresarial en las áreas financiera, contable, tributaria,
              jurídica y de auditoría.
            </p>
          </div>

          {/* Floating Bottom Action Bar */}
          <div className="relative z-30 mb-4 md:mb-8 mx-auto w-[92%] md:w-[85%] glass-panel rounded-3xl md:rounded-full p-2 flex flex-col md:flex-row items-center justify-between shadow-xl border border-white/40">
            <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
              <div className="px-6 py-3 md:py-4 flex-1 flex flex-col justify-center">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Necesito ayuda con
                </label>
                <Select value={serviceChoice} onValueChange={setServiceChoice}>
                  <SelectTrigger className="mt-1 h-auto w-full justify-between gap-2 border-0 bg-transparent p-0 font-semibold text-brand-900 shadow-none outline-none focus:ring-0 focus:ring-offset-0 [&>span]:line-clamp-1">
                    <SelectValue placeholder="Selecciona un servicio..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 shadow-xl">
                    {services.map((s) => (
                      <SelectItem
                        key={s.id}
                        value={s.title}
                        className="rounded-xl text-brand-900 focus:bg-brand-50 focus:text-brand-900"
                      >
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="px-6 py-3 md:py-4 flex-1 flex flex-col justify-center">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Tamaño de empresa
                </label>
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger className="mt-1 h-auto w-full justify-between gap-2 border-0 bg-transparent p-0 font-semibold text-brand-900 shadow-none outline-none focus:ring-0 focus:ring-offset-0 [&>span]:line-clamp-1">
                    <SelectValue placeholder="Persona Natural / Pyme" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200 shadow-xl">
                    <SelectItem
                      value="Persona Natural / Pyme"
                      className="rounded-xl text-brand-900 focus:bg-brand-50 focus:text-brand-900"
                    >
                      Persona Natural / Pyme
                    </SelectItem>
                    <SelectItem
                      value="Mediana Empresa"
                      className="rounded-xl text-brand-900 focus:bg-brand-50 focus:text-brand-900"
                    >
                      Mediana Empresa
                    </SelectItem>
                    <SelectItem
                      value="Gran Empresa / Corporativo"
                      className="rounded-xl text-brand-900 focus:bg-brand-50 focus:text-brand-900"
                    >
                      Gran Empresa / Corporativo
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <a
              href={waUrl(ctaText)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-900 hover:bg-brand-800 text-white font-semibold rounded-full px-8 py-4 md:ml-4 w-full md:w-auto flex items-center justify-center gap-3 transition-colors shrink-0 m-1"
            >
              Solicitar Asesoría <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </section>

        {/* POR QUÉ ELEGIR CAE GROUP */}
        <section className="mt-24 max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-5">
              ¿Por qué elegir CAE GROUP?
            </h2>
            <p className="text-slate-600 mb-3">
              Entendemos que cada organización enfrenta desafíos particulares. Por ello, brindamos
              un acompañamiento cercano y especializado, orientado a comprender las necesidades de
              cada cliente y ofrecer soluciones que aporten valor a su gestión.
            </p>
            <p className="text-slate-600">
              Nuestro equipo multidisciplinario trabaja junto a la administración de cada
              organización para identificar riesgos, fortalecer procesos y facilitar una toma de
              decisiones basada en información confiable y oportuna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {porQueElegirnos.map((v) => (
              <div key={v.title} className="bento-card p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-brand-800 text-xl`} />
                </div>
                <h3 className="font-bold text-brand-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION (BENTO BOX UI) */}
        <section id="servicios" className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">
              Portafolio Integral
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 mt-2 mb-5">
              Nuestros Servicios
            </h2>
            <p className="text-slate-600">
              Ponemos a disposición de nuestros clientes un portafolio integral de servicios
              diseñado para fortalecer la gestión empresarial mediante soluciones especializadas y
              atención personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1: Revisoría Fiscal (Large Card) */}
            <div className="bento-card p-8 rounded-3xl md:col-span-2 group relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <i className="fa-solid fa-shield-halved text-8xl text-brand-800" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                  <i className="fa-solid fa-magnifying-glass-chart text-brand-800 text-xl" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {revisoriaFiscal.category}
                </span>
                <h3 className="text-2xl font-bold text-brand-900 mt-1 mb-3">
                  {revisoriaFiscal.title}
                </h3>
                <p className="text-slate-600 max-w-md">{revisoriaFiscal.description}</p>
              </div>
              <Link
                to="/servicios/$serviceId"
                params={{ serviceId: revisoriaFiscal.id }}
                className="inline-flex items-center gap-2 text-brand-800 font-bold mt-8 group-hover:translate-x-2 transition-transform"
              >
                Conocer servicio <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>

            {/* Service 2: Asesoría Tributaria */}
            <Link
              to="/servicios/$serviceId"
              params={{ serviceId: asesoriaTributaria.id }}
              className="bento-card p-8 rounded-3xl bg-slate-50 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <i className={`${asesoriaTributaria.icon} text-brand-800 text-xl`} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {asesoriaTributaria.category}
                </span>
                <h3 className="text-2xl font-bold text-brand-900 mt-1 mb-3">
                  {asesoriaTributaria.title}
                </h3>
                <p className="text-slate-600 text-sm">{asesoriaTributaria.description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-brand-800 font-bold text-sm mt-6 group-hover:translate-x-2 transition-transform">
                Conocer servicio <i className="fa-solid fa-arrow-right-long" />
              </span>
            </Link>

            {/* Service 3: Estrategia e Innovación (Dark Card) */}
            <div className="bento-card p-8 rounded-3xl bg-brand-900 text-white group flex flex-col justify-between md:row-span-2 border-none">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <i className={`${estrategiaInnovacion.icon} text-white text-xl`} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-100">
                  {estrategiaInnovacion.category}
                </span>
                <h3 className="text-3xl font-bold mt-1 mb-4">{estrategiaInnovacion.title}</h3>
                <p className="text-slate-300 mb-6">{estrategiaInnovacion.description}</p>

                <ul className="space-y-3 text-sm text-slate-200">
                  {estrategiaInnovacion.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <i className="fa-solid fa-check text-wa" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/servicios/$serviceId"
                params={{ serviceId: estrategiaInnovacion.id }}
                className="mt-8 bg-white text-brand-900 text-center font-bold py-3 rounded-xl hover:bg-brand-50 transition-colors"
              >
                Conocer servicio
              </Link>
            </div>

            {/* Service 4: Outsourcing Contable */}
            <Link
              to="/servicios/$serviceId"
              params={{ serviceId: outsourcingContable.id }}
              className="bento-card p-8 rounded-3xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                  <i className={`${outsourcingContable.icon} text-brand-800 text-xl`} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {outsourcingContable.category}
                </span>
                <h3 className="text-xl font-bold text-brand-900 mt-1 mb-2">
                  {outsourcingContable.title}
                </h3>
                <p className="text-slate-600 text-sm">{outsourcingContable.description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-brand-800 font-bold text-sm mt-6 group-hover:translate-x-2 transition-transform">
                Conocer servicio <i className="fa-solid fa-arrow-right-long" />
              </span>
            </Link>

            {/* Service 5: Asesoría Jurídica */}
            <Link
              to="/servicios/$serviceId"
              params={{ serviceId: juridica.id }}
              className="bento-card p-8 rounded-3xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                  <i className={`${juridica.icon} text-brand-800 text-xl`} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {juridica.category}
                </span>
                <h3 className="text-xl font-bold text-brand-900 mt-1 mb-2">{juridica.title}</h3>
                <p className="text-slate-600 text-sm">{juridica.description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-brand-800 font-bold text-sm mt-6 group-hover:translate-x-2 transition-transform">
                Conocer servicio <i className="fa-solid fa-arrow-right-long" />
              </span>
            </Link>

            {/* Small Grid for remaining services */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                to="/servicios/$serviceId"
                params={{ serviceId: informacionExogena.id }}
                className="bento-card p-6 rounded-3xl flex flex-col items-start justify-center text-center group cursor-pointer hover:bg-brand-50"
              >
                <i className={`${informacionExogena.icon} text-2xl text-brand-500 mb-3 mx-auto`} />
                <h4 className="font-bold text-brand-900 w-full">{informacionExogena.title}</h4>
                <span className="inline-flex items-center gap-1 text-brand-800 text-xs font-bold mt-2 w-full justify-center group-hover:translate-x-1 transition-transform">
                  Ver más <i className="fa-solid fa-arrow-right text-[10px]" />
                </span>
              </Link>

              <Link
                to="/servicios/$serviceId"
                params={{ serviceId: backOffice.id }}
                className="bento-card p-6 rounded-3xl flex flex-col items-start justify-center text-center group cursor-pointer hover:bg-brand-50"
              >
                <i className={`${backOffice.icon} text-2xl text-brand-500 mb-3 mx-auto`} />
                <h4 className="font-bold text-brand-900 w-full">{backOffice.title}</h4>
                <span className="inline-flex items-center gap-1 text-brand-800 text-xs font-bold mt-2 w-full justify-center group-hover:translate-x-1 transition-transform">
                  Ver más <i className="fa-solid fa-arrow-right text-[10px]" />
                </span>
              </Link>

              <Link
                to="/servicios/$serviceId"
                params={{ serviceId: gobiernoFamiliar.id }}
                className="bento-card p-6 rounded-3xl flex flex-col items-start justify-center text-center group cursor-pointer hover:bg-brand-50"
              >
                <i className={`${gobiernoFamiliar.icon} text-2xl text-brand-500 mb-3 mx-auto`} />
                <h4 className="font-bold text-brand-900 w-full">{gobiernoFamiliar.title}</h4>
                <span className="inline-flex items-center gap-1 text-brand-800 text-xs font-bold mt-2 w-full justify-center group-hover:translate-x-1 transition-transform">
                  Ver más <i className="fa-solid fa-arrow-right text-[10px]" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* NUESTRA FORMA DE TRABAJAR */}
        <section className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-12 text-center">
            Nuestra forma de trabajar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comoTrabajamos.map((step) => (
              <div key={step.n} className="bento-card p-6 rounded-3xl">
                <span className="text-3xl font-extrabold text-brand-100">{step.n}</span>
                <p className="mt-3 font-semibold text-brand-900 leading-snug">{step.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="mt-24 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-900 p-10 md:p-16 text-white">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-wa/20 rounded-full blur-3xl" />
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <span className="text-brand-100 font-bold tracking-widest uppercase text-sm">
                  Sobre nosotros
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                  Más de 15 años acompañando a organizaciones en la toma de decisiones.
                </h2>
                <p className="mt-4 max-w-md text-slate-300">
                  Un equipo multidisciplinario comprometido con el cumplimiento normativo y el
                  crecimiento sostenible de cada cliente.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valoresInstitucionales.map((v) => (
                  <li
                    key={v.t}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                      <i className={`${v.i} text-wa`} />
                    </span>
                    <span className="text-sm font-medium">{v.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section id="equipo" className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mt-2 mb-5">
              Lideran nuestras áreas de especialización.
            </h2>
            <p className="text-slate-600">
              Cada uno dirige su área y está respaldado por un equipo de profesionales
              especializados en auditoría, impuestos, contabilidad, derecho y consultoría
              empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipo.map((m) => (
              <div key={m.name} className="bento-card p-6 rounded-3xl flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <i className="fa-solid fa-user-tie text-brand-800 text-lg" />
                </div>
                <h3 className="font-bold text-brand-900 leading-snug">{m.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500 mt-1">
                  {m.position}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 mt-1">
                  <i className="fa-solid fa-people-group text-[10px]" />
                  {m.area} y su equipo
                </span>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">{m.summary}</p>
                <p className="text-xs font-semibold text-slate-500 mt-4">{m.experience}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {m.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold bg-brand-50 text-brand-800 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ALIADOS COMERCIALES */}
        <section className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm">
              Alianzas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mt-2 mb-5">
              Aliados comerciales
            </h2>
            <p className="text-slate-600">
              Trabajamos junto a aliados estratégicos que fortalecen nuestra propuesta de valor y
              amplían las soluciones que ofrecemos a nuestros clientes.
            </p>
          </div>

          <LogoCloud logos={alliesLogos} />
        </section>

        {/* CTA SECTION */}
        <section
          id="contacto"
          className="mt-24 max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 text-center border border-slate-200 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-wa/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-800/10 rounded-full blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4 relative z-10">
            Conversemos sobre las necesidades de su organización.
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">
            Nuestro equipo está preparado para brindar el acompañamiento que su empresa requiere
            mediante soluciones especializadas en consultoría, auditoría, impuestos, contabilidad y
            asesoría jurídica. Permítanos conocer su organización y trabajar conjuntamente en el
            fortalecimiento de su gestión empresarial.
          </p>

          <a
            href={waUrl("Hola, quisiera solicitar una asesoría con CAE GROUP.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wa hover:bg-wa-hover text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative z-10"
          >
            <i className="fa-brands fa-whatsapp text-2xl" />
            Solicitar Asesoría
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-slate-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#top" className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <img src={logo} alt="CAE GROUP" className="h-9 w-auto" />
            </a>
            <p className="max-w-xs text-sm">
              Somos una firma de consultoría y asesoramiento empresarial que acompaña a
              organizaciones mediante soluciones especializadas en auditoría, contabilidad,
              impuestos, asesoría jurídica y gestión empresarial.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {[revisoriaFiscal, outsourcingContable, estrategiaInnovacion, juridica].map((s) => (
                <li key={s.id}>
                  <Link
                    to="/servicios/$serviceId"
                    params={{ serviceId: s.id }}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <i className="fa-solid fa-envelope w-5" /> {contact.email}
              </li>
              <li>
                <i className="fa-solid fa-phone w-5" /> +{contact.whatsapp}
              </li>
              <li>
                <i className="fa-solid fa-location-dot w-5" /> {contact.address}
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Fixed Floating WhatsApp Button */}
      <a
        href={waUrl("Hola, vengo de la página web")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-wa text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform hover:bg-wa-hover group"
      >
        <i className="fa-brands fa-whatsapp group-hover:animate-pulse" />
        <span className="absolute right-20 bg-white text-slate-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Asesoría Inmediata!
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white" />
        </span>
      </a>
    </div>
  );
}
