import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "../../lib/services-data";
import { useContact, buildWaUrl } from "../../lib/use-contact";
import logo from "../../assets/logotipo-cae.png";

export const Route = createFileRoute("/servicios/$serviceId")({
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.serviceId);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | CAE GROUP` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} | CAE GROUP` },
          { property: "og:description", content: loaderData.description },
        ]
      : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const contact = useContact();
  const waUrl = (text: string) => buildWaUrl(contact.whatsapp, text);
  const waUrlService = waUrl(`Hola, quiero información sobre ${service.title}`);


  return (
    <div className="antialiased text-slate-800" style={{ backgroundColor: "#f8fafc" }}>
      {/* Navigation (idéntica al Home para consistencia) */}
      <nav className="fixed w-full z-50 glass-nav top-0 transition-all duration-300 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="CAE GROUP" className="h-9 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <Link to="/" hash="servicios" className="hover:text-brand-800 transition-colors">
              Volver al Portafolio
            </Link>
            <a
              href={waUrlService}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-green-200"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Consulta Rápida
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {/* SERVICE HERO */}
        <section className="service-hero-pattern py-16 md:py-24 px-4 md:px-6 mb-12 border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
              <i className={`${service.icon} text-brand-500`} />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {service.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-900 mb-6 tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        {/* SUB-SERVICES GRID */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-brand-900">Alcance de nuestra intervención</h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.items.map((item: string) => (
              <div key={item} className="sub-service-card p-6 rounded-2xl flex items-start gap-4">
                <div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check-double text-brand-800" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DEDICATED WHATSAPP CONVERSION CTA */}
        <section className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-brand-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none transform skew-x-12 translate-x-10" />

            <div className="relative z-10 md:w-3/5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-brand-100 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wa opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-wa" />
                </span>
                Atención Inmediata
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                ¿Necesita ayuda con {service.title.toLowerCase()}?
              </h3>
              <p className="text-slate-300 text-sm md:text-base">
                Hablemos directamente. Nuestro equipo evaluará las necesidades de su organización y
                le presentará una propuesta a medida, integrando los más altos estándares de
                control.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center shrink-0">
              <a
                href={waUrlService}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-wa hover:bg-wa-hover text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-wa/30 hover:shadow-wa/50 hover:-translate-y-1 transition-all flex items-center gap-3 w-full md:w-auto justify-center"
              >
                <i className="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform" />
                Iniciar Chat
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (consistente con la landing page) */}
      <footer className="bg-brand-900 text-slate-400 py-12 mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <img src={logo} alt="CAE GROUP" className="h-9 w-auto" />
            </Link>
            <p className="max-w-xs text-sm">
              Servicios integrales de auditoría, consultoría, impuestos y estrategia para empresas
              que buscan la excelencia.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/servicios/$serviceId"
                    params={{ serviceId: s.id }}
                    className={
                      s.id === service.id
                        ? "text-white transition-colors"
                        : "hover:text-white transition-colors"
                    }
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
                <i className="fa-solid fa-envelope w-5" /> {CONTACT_EMAIL}
              </li>
              <li>
                <i className="fa-solid fa-phone w-5" /> +{WHATSAPP}
              </li>
              <li>
                <i className="fa-solid fa-location-dot w-5" /> {CONTACT_ADDRESS}
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Fixed Floating WhatsApp Button (Global) */}
      <a
        href={waUrl(`Hola, tengo una duda sobre los servicios de ${service.title}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-wa text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform hover:bg-wa-hover group"
      >
        <i className="fa-brands fa-whatsapp group-hover:animate-pulse" />
      </a>
    </div>
  );
}
