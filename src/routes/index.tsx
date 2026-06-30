import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAE GROUP — Consultoría Contable, Tributaria y Jurídica" },
      {
        name: "description",
        content:
          "Firma de consultoría contable, tributaria, jurídica y estratégica. Revisoría fiscal, outsourcing contable, asesoría tributaria y más.",
      },
      { property: "og:title", content: "CAE GROUP — Firma de Consultoría" },
      {
        property: "og:description",
        content:
          "Acompañamos a empresas y familias empresarias con servicios integrales de auditoría, impuestos, contabilidad y estrategia.",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "573000000000"; // TODO: reemplazar con el número real
const WA_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hola CAE GROUP, quisiera más información sobre sus servicios.",
)}`;

type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  items: string[];
};

const services: Service[] = [
  {
    id: "revisoria-fiscal",
    title: "Revisoría Fiscal",
    category: "Auditoría",
    description:
      "Servicio integral de revisoría fiscal bajo Normas Internacionales de Auditoría.",
    icon: "fa-solid fa-shield-halved",
    items: [
      "Revisoría Fiscal",
      "Auditoría Externa",
      "Auditoría Interna",
      "Evaluación de Estados Financieros",
      "Evaluación de riesgos",
      "Evaluación del Sistema de Control Interno",
      "Controles Generales de TI (ITGC)",
      "Auditoría de procesos de negocio",
      "Planes de Continuidad del Negocio (BCP)",
      "Levantamiento y estandarización de procesos",
      "Evaluación SARLAFT / SAGRILAFT",
      "Evaluación SARO / SARM / SARL / SARC",
    ],
  },
  {
    id: "asesoria-tributaria",
    title: "Asesoría Tributaria",
    category: "Impuestos",
    description:
      "Consultoría y planeación tributaria para empresas, socios y personas naturales.",
    icon: "fa-solid fa-file-invoice-dollar",
    items: [
      "Planeación tributaria",
      "Consultoría y conceptos tributarios",
      "Preparación de declaraciones",
      "Liquidación de impuestos",
      "Formularios tributarios",
      "Asesoría a personas naturales y socios",
      "Análisis de efectos fiscales",
      "Análisis contable bajo NIIF",
      "Cumplimiento de obligaciones fiscales",
    ],
  },
  {
    id: "informacion-exogena",
    title: "Información Exógena",
    category: "Cumplimiento",
    description: "Preparación y presentación de información ante entidades de control.",
    icon: "fa-solid fa-database",
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
    description: "Administración integral del proceso contable y financiero.",
    icon: "fa-solid fa-calculator",
    items: [
      "Outsourcing y Asesoría Contable",
      "Contabilidad bajo NIIF",
      "Registro de operaciones",
      "Estados Financieros",
      "Cumplimiento contable, fiscal, legal y laboral",
      "Soporte contable permanente",
      "Información para la toma de decisiones",
    ],
  },
  {
    id: "juridica",
    title: "Asesoría Jurídica Corporativa",
    category: "Legal",
    description: "Servicios legales para empresas.",
    icon: "fa-solid fa-scale-balanced",
    items: [
      "Derecho Comercial y Societario",
      "Planeación Patrimonial",
      "Contratación Laboral y Talento Humano",
      "Gobierno Corporativo",
      "Secretaría General",
      "Auditoría Legal y Due Diligence",
      "Negociación Empresarial",
      "Cobranza Jurídica",
    ],
  },
  {
    id: "back-office",
    title: "Back Office Administrativo",
    category: "Administración",
    description: "Externalización de procesos administrativos.",
    icon: "fa-solid fa-gears",
    items: [
      "Procesos administrativos y de soporte",
      "Gestión de Recursos Humanos",
      "Gestión Contable",
      "Atención al Cliente",
      "Administración de Inventarios",
      "Optimización de recursos",
      "Reducción de costos operativos",
      "Incremento de productividad",
    ],
  },
  {
    id: "gobierno-familiar",
    title: "Consultoría para Familias Empresarias",
    category: "Consultoría",
    description: "Gobierno corporativo y familiar para empresas familiares.",
    icon: "fa-solid fa-people-roof",
    items: [
      "Gobierno Corporativo y Familiar",
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
    title: "Estrategia e Innovación",
    category: "Consultoría Estratégica",
    description: "Transformación empresarial mediante estrategia, innovación y tecnología.",
    icon: "fa-solid fa-lightbulb",
    items: [
      "Estrategia y Modelos de Negocio",
      "Innovación y Transformación Digital",
      "Asesoría y Estrategia Comercial",
      "Optimización de operaciones y procesos",
      "Implementación tecnológica y automatización",
      "Análisis financiero y rentabilidad",
      "Diseño de estrategias de crecimiento",
    ],
  },
];

// Bento sizing pattern (lg breakpoint, 4 cols)
const bentoClasses = [
  "lg:col-span-2 lg:row-span-2", // 1 - hero card
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

function Landing() {
  return (
    <div
      className="min-h-screen bg-[#f6f7fb] text-navy-deep"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-wa/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-navy/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-white">
              <i className="fa-solid fa-chart-line text-sm" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              CAE <span className="text-slate-pro font-medium">GROUP</span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm font-medium text-slate-pro md:flex">
            <li><a href="#servicios" className="hover:text-navy">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-navy">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-navy">Contacto</a></li>
          </ul>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-wa px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-wa/30 transition hover:bg-wa-hover"
          >
            <i className="fa-brands fa-whatsapp text-base" />
            <span className="hidden sm:inline">Hablemos</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-pro backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-wa" />
            Firma de consultoría integral
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-deep sm:text-5xl md:text-6xl lg:text-7xl">
            Decisiones financieras{" "}
            <span className="bg-gradient-to-r from-navy to-wa bg-clip-text text-transparent">
              con respaldo experto.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-pro sm:text-lg">
            En <strong className="text-navy-deep">CAE GROUP</strong> acompañamos a empresas,
            familias empresarias y personas naturales con servicios de auditoría, tributación,
            contabilidad, derecho corporativo y estrategia.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/30 transition hover:bg-wa-hover hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Agenda una asesoría por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-navy-deep backdrop-blur transition hover:bg-white"
            >
              Ver servicios <i className="fa-solid fa-arrow-down text-xs" />
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 text-center">
            {[
              { k: "+15", v: "años de experiencia" },
              { k: "8", v: "líneas de servicio" },
              { k: "100%", v: "bajo NIIF & NIAS" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/50 bg-white/60 p-4 backdrop-blur"
              >
                <dt className="text-2xl font-extrabold text-navy-deep sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-slate-pro sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services — Bento */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-wa">
              Nuestros servicios
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
              Soluciones integrales,<br className="hidden sm:block" /> ejecutadas con rigor.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-pro">
            Cada línea de servicio está diseñada para responder a las necesidades reales
            de su organización, con metodología propia y estándares internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)]">
          {services.map((s, i) => {
            const isFeatured = i === 0;
            return (
              <article
                key={s.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl ${
                  bentoClasses[i] ?? ""
                } ${
                  isFeatured
                    ? "border-transparent bg-gradient-to-br from-navy to-navy-deep text-white shadow-xl"
                    : "border-white/60 bg-white/70 text-navy-deep backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                }`}
              >
                {isFeatured && (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-wa/30 blur-3xl" />
                )}
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      isFeatured
                        ? "bg-white/15 text-white backdrop-blur"
                        : "bg-navy/5 text-navy"
                    }`}
                  >
                    <i className={`${s.icon} text-lg`} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      isFeatured
                        ? "bg-white/15 text-white/90"
                        : "bg-navy/5 text-slate-pro"
                    }`}
                  >
                    {s.category}
                  </span>
                </div>
                <h3
                  className={`mt-5 text-xl font-bold leading-snug ${
                    isFeatured ? "text-white" : "text-navy-deep"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isFeatured ? "text-white/80" : "text-slate-pro"
                  }`}
                >
                  {s.description}
                </p>

                <ul
                  className={`mt-4 space-y-1.5 text-[13px] ${
                    isFeatured ? "text-white/85" : "text-slate-pro"
                  }`}
                >
                  {s.items.slice(0, isFeatured ? 8 : 4).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <i
                        className={`fa-solid fa-check mt-0.5 text-[11px] ${
                          isFeatured ? "text-wa" : "text-wa"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                  {s.items.length > (isFeatured ? 8 : 4) && (
                    <li
                      className={`pt-1 text-xs font-medium ${
                        isFeatured ? "text-white/70" : "text-navy/70"
                      }`}
                    >
                      + {s.items.length - (isFeatured ? 8 : 4)} servicios más
                    </li>
                  )}
                </ul>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold ${
                    isFeatured ? "text-white" : "text-navy-deep"
                  }`}
                >
                  Consultar
                  <i className="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-navy to-navy-deep p-10 text-white md:p-16">
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-wa/30 blur-3xl" />
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-wa">
                Quiénes somos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Una firma que combina experiencia técnica con visión estratégica.
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                CAE GROUP nace con el propósito de ofrecer un acompañamiento cercano,
                riguroso y de alto valor agregado para empresas y familias empresarias
                en Colombia y la región.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { i: "fa-solid fa-bullseye", t: "Enfoque a resultados" },
                { i: "fa-solid fa-handshake", t: "Cercanía con el cliente" },
                { i: "fa-solid fa-lock", t: "Confidencialidad absoluta" },
                { i: "fa-solid fa-certificate", t: "Estándares internacionales" },
              ].map((v) => (
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

      {/* CTA / Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-10 text-center backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl">
            ¿Listo para optimizar la gestión de su empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-pro">
            Conversemos sobre sus retos contables, tributarios o estratégicos.
            Le respondemos en minutos.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/30 transition hover:bg-wa-hover hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-white/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-pro md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-white">
              <i className="fa-solid fa-chart-line text-[11px]" />
            </span>
            <span className="font-semibold text-navy-deep">CAE GROUP</span>
          </div>
          <p>© {new Date().getFullYear()} CAE GROUP. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-2xl shadow-wa/40 transition hover:scale-110 hover:bg-wa-hover"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-40" />
        <i className="fa-brands fa-whatsapp relative text-2xl" />
      </a>
    </div>
  );
}
