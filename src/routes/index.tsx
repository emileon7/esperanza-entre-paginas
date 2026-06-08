import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Logo } from "@/components/landing/Logo";
import { Reveal } from "@/components/landing/Reveal";
import { PaperPlane, Star, DashedPath } from "@/components/landing/Decorations";

import postImg from "../assets/post.png";
import chanPhoto from "../assets/lider/ChanE.png";
import emilyPhoto from "../assets/lider/Emi.jpg";
import dannaPhoto from "../assets/lider/Danna.jpeg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esperanza entre Páginas · Compartiendo esperanza, transformando vidas" },
      { name: "description", content: "Proyecto misionero de literatura cristiana en el Soconusco, Chiapas. Donar libros, esperanza y restauración a familias vulnerables." },
      { property: "og:title", content: "Esperanza entre Páginas" },
      { property: "og:description", content: "Compartiendo esperanza, transformando vidas — Soconusco, Chiapas." },
    ],
  }),
  component: Index,
});

const CLABE = "638180010078362654";
const TARJETA = "5101256553957403";

function Index() {
  return (
    <div id="top" className="min-h-screen scroll-smooth bg-[#FAFAF7] text-[#1C1C1C]">
      <Nav />
      <Hero />
      <Proyecto />
      <Equipos />
      <Impacto />
      
      <ComoApoyar />
      <Donaciones />
      <Contacto />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      style={{
        background:
          "radial-gradient(circle at 20% 10%, #3d9b68 0%, #2e7d4f 45%, #246340 100%)",
      }}
    >
      {/* decorative stars + planes */}
      <Star className="absolute top-10 left-6 w-8 h-8 text-[var(--color-brand-yellow)]/80" />
      <Star className="absolute top-24 right-10 w-6 h-6 text-[var(--color-brand-yellow)]/60" />
      <Star className="absolute bottom-16 left-12 w-5 h-5 text-white/40" />
      <Star className="absolute bottom-32 right-20 w-7 h-7 text-[var(--color-brand-yellow)]/70" />
      <PaperPlane className="absolute top-32 left-1/4 w-12 h-12 text-white/70 animate-float" />
      <PaperPlane className="absolute bottom-20 right-1/3 w-10 h-10 text-white/60 animate-float" style={{ animationDelay: "1.5s" }} />
      {/* <DashedPath className="absolute -top-2 left-1/2 -translate-x-1/2 w-[700px] max-w-none text-white/40" /> */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="relative inline-block animate-fade-up">
          <img
            src={postImg}
            alt=""
            className="w-full max-w-[700px] h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Logo size="lg" />
          </div>
        </div>
        <p className="mt-8 text-xl sm:text-2xl font-display font-bold text-white animate-fade-up" style={{ animationDelay: "150ms" }}>
          "Compartiendo esperanza, transformando vidas"
        </p>
        <p className="mt-3 text-sm sm:text-base text-white/85 animate-fade-up" style={{ animationDelay: "300ms" }}>
          Asociación del Soconusco, Chiapas · Universidad de Montemorelos
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "450ms" }}>
          <a
            href="#donaciones"
            className="rounded-full bg-[var(--color-brand-yellow)] hover:brightness-105 text-[#1C1C1C] font-bold px-8 py-4 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            Apóyanos con una donación
          </a>
          <a
            href="#proyecto"
            className="rounded-full bg-white/10 backdrop-blur ring-1 ring-white/40 text-white font-semibold px-8 py-4 hover:bg-white/20 transition"
          >
            Conoce el proyecto ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Proyecto() {
  return (
    <section id="proyecto" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <Star className="absolute top-10 right-8 w-6 h-6 text-[var(--color-brand-yellow)]/70" />
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]">
            Nuestro propósito
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]">
            ¿Qué es Esperanza entre Páginas?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-[#1C1C1C]/85">
            Somos parte del proyecto nacional <span className="font-bold text-[var(--color-brand-green)]">Cruzando Fronteras</span> de la Universidad de Montemorelos. Nuestro grupo, asignado al Soconusco, busca donar
            <span className="font-bold"> 4,000 colecciones de libros</span> al DIF Tapachula y comunidades vulnerables de la región.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#1C1C1C]/85">
            Creemos que detrás de cada libro hay mensajes de fe, restauración, amor y salvación mensajeros silenciosos que llegan a manos de personas quebrantadas, niños vulnerables y familias necesitadas.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 relative inline-block max-w-xl rotate-[-1.5deg] bg-[var(--color-brand-yellow)] text-[#1C1C1C] rounded-md px-7 py-6 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#fef3c7]/80 rotate-2 shadow-sm" />
            <p className="font-display text-lg sm:text-xl italic leading-snug">
              "No nos cansemos, pues, de hacerlo bien; porque a su tiempo segaremos, si no desmayamos."
            </p>
            <p className="mt-3 font-bold">— Gálatas 6:9</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Impacto() {
  const places = [
    {
      title: "CENTRA Tapachula",
      tipo: "Centro de rehabilitación",
      desc: "Personas en proceso de rehabilitación recibirán colecciones de libros, refrigerios y obsequios especiales, incluyendo peluches para los niños.",
      team: "Voceros de Esperanza",
      date: "18 de julio de 2026",
      hour: "9:00 am",
      impacto: "~200 personas",
      accent: "var(--color-brand-green)",
    },
    {
      title: "CERESO Tapachula",
      tipo: "Centro penitenciario",
      desc: "Personas en proceso de reinserción social recibirán literatura cristiana y materiales de esperanza y restauración.",
      team: "Sembradores de Esperanza",
      date: "19 de julio de 2026",
      hour: "Aprox. 10:00 am",
      impacto: "~200 personas",
      accent: "var(--color-brand-blue)",
    },
    {
      title: "DIF Tapachula",
      tipo: "Institución de asistencia social",
      desc: "Niños, adultos mayores y familias en situación de vulnerabilidad atendidos por el DIF recibirán libros, juguetes y apoyo especial.",
      team: "Mensajeros de Esperanza",
      date: "24 de julio de 2026",
      hour: "10:30 am",
      impacto: "~1,000 personas",
      accent: "var(--color-brand-yellow)",
    },
  ];

  return (
    <section id="impacto" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#f4f1e8]/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]">
              Lugares de impacto
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]">
              ¿Dónde vamos a trabajar?
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {places.map((p, i) => (
            <Reveal key={p.title} delay={i * 150}>
              <article className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">

                {/* Franja de color superior */}
                <div className="h-2 w-full" style={{ background: p.accent }} />

                <div className="flex flex-col flex-1 p-6 gap-4">

                  {/* Encabezado */}
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: p.accent }}
                    >
                      {p.tipo}
                    </p>
                    <h3 className="text-xl font-extrabold text-[var(--color-brand-blue)] leading-tight">
                      {p.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-sm text-[#1C1C1C]/70 leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Datos clave */}
                  <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[#1C1C1C]/60">
                      <span className="font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16">Fecha</span>
                      <span className="font-medium text-[#1C1C1C]/80">{p.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1C1C1C]/60">
                      <span className="font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16">Hora</span>
                      <span className="font-medium text-[#1C1C1C]/80">{p.hour}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1C1C1C]/60">
                      <span className="font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16">Impacto</span>
                      <span
                        className="font-bold text-sm"
                        style={{ color: p.accent }}
                      >
                        {p.impacto}
                      </span>
                    </div>
                  </div>

                  {/* Equipo */}
                  <div
                    className="rounded-xl px-3 py-2 text-xs font-semibold text-center"
                    style={{ background: `color-mix(in srgb, ${p.accent} 12%, transparent)`, color: p.accent }}
                  >
                    {p.team}
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[var(--color-brand-green)]/8 px-3 py-2" style={{ backgroundColor: "rgba(46,125,79,0.08)" }}>
      <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-green)]">{label}</dt>
      <dd className="font-semibold text-[#1C1C1C]">{value}</dd>
    </div>
  );
}

function Equipos() {
  const teams = [
    {
      name: "Voceros de Esperanza",
      role: "Directora Asociada",
      person: "Emily León Méndez",
      carrera: "Estudiante de Ingeniería en Sistemas Computacionales",
      districts: ["Carrillo Puerto", "Independencia", "Centro", "Cacahoatán", "La Obrera"],
      comunidad: "CENTRA (Centro Especializado para la Prevención y Tratamiento en Adicciones)",
      image: emilyPhoto,
      imagePosition: "center 20%",
    },
    {
      name: "Sembradores de Esperanza",
      role: "Asociado en Formación",
      person: "José Chan Chim",
      carrera: "Aspirante de la Licenciatura en Teología",
      districts: ["Ciudad Hidalgo", "Frontera Hidalgo", "Tuxtla Chico", "Mazatán", "La Unidad"],
      comunidad: "CERESO de Tapachula",
      image: chanPhoto,
      imagePosition: "center 10%",  
    },
    {
      name: "Mensajeros de Esperanza", // ← cambia el nombre
      role: "Secretaria Asociada", // ← cambia el rol
      person: "Danna López Monzon", // ← cambia el nombre
      carrera: "Aspirante de la Licenciatura en Psicología Clínica", // ← cambia la carrera
      districts: ["Azteca", "5 de Febrero", "Colinas del Rey", "Huehuetna Pueblo", "Zaragoza"],
      comunidad: "DIF TAPACHULA",
      image: dannaPhoto,
      imagePosition: "center 10%",
    },
  ];

  return (
    <section id="equipos" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <PaperPlane className="absolute top-12 right-10 w-10 h-10 text-[var(--color-brand-blue)]/30 animate-float" />
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]">
              Las personas
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]">
              Nuestros equipos
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {teams.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <article className="h-full flex flex-col rounded-3xl overflow-hidden bg-[var(--color-brand-green)] text-white shadow-md">

                {/* Foto del líder */}
                <div className="relative h-90 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.person}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: t.imagePosition}}
                  />
                  {/* Degradado suave hacia el verde de la tarjeta */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-green)] via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 px-6 pb-7 pt-2 space-y-5">

                  {/* Nombre y rol */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                      {t.role}
                    </p>
                    <h3 className="text-lg font-extrabold leading-snug">{t.person}</h3>
                    <p className="text-sm text-white/75 mt-0.5">{t.carrera}</p>
                  </div>

                  {/* Nombre del equipo */}
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                      Equipo
                    </p>
                    <p className="font-bold text-base">{t.name}</p>
                  </div>

                  {/* Distritos */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                      Distritos a cargo
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.districts.map((d) => (
                        <span
                          key={d}
                          className="text-xs font-medium bg-white/15 rounded-full px-2.5 py-1"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Comunidad a impactar */}
                  <div className="mt-auto pt-4 border-t border-white/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                      Comunidad a impactar
                    </p>
                    <p className="text-sm font-semibold italic">{t.comunidad}</p>
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoApoyar() {
  const ways = [
    { icon: "💰", title: "Donación económica", desc: "Para financiar libros, juguetes y alimentos." },
    { icon: "🙏", title: "Oración intercesora", desc: "Tu oración es parte de esta misión." },
    { icon: "🤝", title: "Participación voluntaria", desc: "Únete a las actividades del proyecto." },
  ];
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--color-brand-blue)] text-white overflow-hidden">
      <Star className="absolute top-10 left-10 w-6 h-6 text-[var(--color-brand-yellow)]/80" />
      <Star className="absolute bottom-10 right-10 w-8 h-8 text-[var(--color-brand-yellow)]/60" />
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-yellow)]">Únete</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold">¿Cómo puedes apoyar?</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-7 text-center hover:bg-white/15 transition">
                <div className="text-5xl">{w.icon}</div>
                <h3 className="mt-4 text-xl font-extrabold">{w.title}</h3>
                <p className="mt-2 text-white/85">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donaciones() {
  const [copied, setCopied] = useState(false);
  const copyClabe = async () => {
    try {
      await navigator.clipboard.writeText(CLABE);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const copyTarjeta = async () => {
    try {
      await navigator.clipboard.writeText(TARJETA); 
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="donaciones" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]">Para donativos</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]">Datos para donativos</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="relative rounded-2xl p-8 sm:p-10 shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #efe4c8 0%, #e8dcc4 60%, #ddc99e 100%)",
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 rotate-[-2deg] shadow-sm rounded-sm" />
            <div className="flex items-center gap-3 text-[var(--color-brand-blue)] font-display font-extrabold text-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
              </svg>
              Información bancaria
            </div>
            <div className="mt-6 space-y-5">
              <DataRow label="No. Tarjeta" value={TARJETA} />
              <DataRow label="Cuenta CLABE" value={CLABE} mono />
              <DataRow label="Concepto sugerido" value='Donativo "Esperanza entre Páginas" - Equipo "Nombre del Equipo"' />
            </div>
            <div className=" pt-6 flex gap-3">
              <button
              onClick={copyClabe}
              className="mt-7 w-full sm:w-auto rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold px-6 py-3 shadow-md transition"
            >
              {copied ? "✓ CLABE copiada" : "Copiar CLABE"}
            </button>
              <button
              onClick={copyTarjeta}
              className="mt-7 w-full sm:w-auto rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold px-6 py-3 shadow-md transition"
            >
              {copied ? "✓ TARJETA copiada" : "Copiar TARJETA"}
            </button>
            </div>
            
            
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-center text-sm text-[#1C1C1C]/65 italic max-w-xl mx-auto">
            Cada donativo, por pequeño que sea, ayuda a poner un libro en manos de quien lo necesita.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function DataRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-blue)]/70">{label}</div>
      <div className={`text-lg sm:text-xl font-bold text-[var(--color-brand-blue)] ${mono ? "font-mono tracking-wider" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function Contacto() {
  const people = [
    {
      name: "Emily Laura Nallely León Méndez",
      role: "Directora Asociada — Voceros de Esperanza",
      phone: "8261150953",
      email: "1220122@alumno.um.edu.mx",
      wa: "528261150953",
    },
    {
      name: "Danna López Monzon",
      role: "Secretaria Asociada — Mensajeros de Esperanza",
      phone: "9903341019",
      email: null,
      wa: "9903341019",
    },
    {
      name: "José Chan Chim",
      role: "Asociado en Formación — Sembradores de Esperanza",
      phone: " 9997437659",
      email: null,
      wa: "9997437659",
    },
  ];
  return (
    <section id="contacto" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#f4f1e8]/60">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]">Hablemos</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]">Contáctanos</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="h-full bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/5 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-green)]/15 flex items-center justify-center text-2xl">
                  {p.name[0]}
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-[var(--color-brand-blue)]">{p.name}</h3>
                <p className="text-sm font-semibold text-[var(--color-brand-green)]">{p.role}</p>
                <div className="mt-4 space-y-1 text-sm text-[#1C1C1C]/80">
                  <div>📱 WhatsApp: <span className="font-semibold">{p.phone}</span></div>
                  {p.email && <div>✉️ <a className="hover:underline" href={`mailto:${p.email}`}>{p.email}</a></div>}
                </div>
                <a
                  href={`https://wa.me/${p.wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:brightness-110 text-white font-bold px-5 py-3 shadow-md transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.6 17.3L2 22l4.8-1.6A11 11 0 1020.5 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1112 20zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5 0-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"/></svg>
                  Escribir por WhatsApp
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-brand-blue)] text-white/90 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
        <div className="bg-white rounded-2xl px-5 py-3">
          <Logo size="sm" />
        </div>
        <div className="text-sm">
          <div className="font-semibold">Universidad de Montemorelos · Grupo Emprendum</div>
          <div className="opacity-80">Tapachula, Chiapas, México · 2026</div>
          <div className="mt-2 inline-block px-3 py-1 rounded-full bg-[var(--color-brand-yellow)]/20 text-[var(--color-brand-yellow)] text-xs font-bold tracking-wider uppercase">
            Cruzando Fronteras — Proyecto Nacional - Esperanza entre Páginas
          </div>
        </div>
      </div>
    </footer>
  );
}
