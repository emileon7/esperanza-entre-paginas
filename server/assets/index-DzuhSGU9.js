import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
const logo$1 = "/esperanza-entre-paginas/assets/logo-e-C7chrRPb.png";
const links = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#equipos", label: "Equipos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#donaciones", label: "Donaciones" },
  { href: "#contacto", label: "Contacto" }
];
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white/100 backdrop-blur-sm"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: logo$1, alt: "Esperanza entre Páginas", className: "w-64  h-auto" }) }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-7", children: [
            links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "text-sm font-semibold text-[#1C1C1C]/80 hover:text-[var(--color-brand-green)] transition-colors", children: l.label }, l.href)),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#donaciones",
                className: "rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white px-4 py-2 text-sm font-bold shadow-sm transition-colors",
                children: "Donar"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Menú",
              onClick: () => setOpen((v) => !v),
              className: "md:hidden p-2 rounded-lg text-[#1C1C1C]",
              children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: open ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("path", { d: "M6 6l12 12" }),
                /* @__PURE__ */ jsx("path", { d: "M18 6L6 18" })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("path", { d: "M4 7h16" }),
                /* @__PURE__ */ jsx("path", { d: "M4 12h16" }),
                /* @__PURE__ */ jsx("path", { d: "M4 17h16" })
              ] }) })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-black/5 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "py-2 px-2 rounded-lg text-[#1C1C1C] font-semibold hover:bg-[var(--color-brand-green)]/10",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#donaciones",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-full bg-[var(--color-brand-green)] text-white px-4 py-2.5 text-center font-bold",
              children: "Donar"
            }
          )
        ] }) })
      ]
    }
  );
}
function PaperPlane({ className = "", style }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", className, style, fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M58 6 6 28l20 6 4 20 10-14 16 12z", fill: "rgba(255,255,255,0.6)" }),
    /* @__PURE__ */ jsx("path", { d: "M58 6 26 34" })
  ] });
}
function Star({ className = "", style }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className, style, fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" }) });
}
const logo = "/esperanza-entre-paginas/assets/logo-DZmPD0Wh.png";
function Logo({ size = "lg" }) {
  const big = size === "lg";
  return /* @__PURE__ */ jsxs("div", { className: `relative inline-block ${big ? "px-10 py-6" : "px-2"}`, children: [
    big && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(PaperPlane, { className: "absolute -left-6 top-6 w-10 h-10 text-slate-500 animate-float" }),
      /* @__PURE__ */ jsx(PaperPlane, { className: "absolute -right-4 -top-2 w-8 h-8 text-slate-400 animate-float", style: { animationDelay: "1.2s" } }),
      /* @__PURE__ */ jsx(PaperPlane, { className: "absolute right-8 bottom-0 w-7 h-7 text-slate-400 animate-float", style: { animationDelay: "2.4s" } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " text-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: logo,
        alt: "Esperanza entre Páginas",
        className: big ? "w-64 h-auto" : "w-24 h-auto"
      }
    ) })
  ] });
}
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      },
      children
    }
  );
}
const postImg = "/esperanza-entre-paginas/assets/post-DZcyH_5c.png";
const chanPhoto = "/esperanza-entre-paginas/assets/ChanE-Df7SiBqW.png";
const emilyPhoto = "/esperanza-entre-paginas/assets/Emi-BtMxNrZv.jpg";
const dannaPhoto = "/esperanza-entre-paginas/assets/Danna-CB8riaVJ.jpeg";
const CLABE = "638180010078362654";
const TARJETA = "5101256553957403";
function Index() {
  return /* @__PURE__ */ jsxs("div", { id: "top", className: "min-h-screen scroll-smooth bg-[#FAFAF7] text-[#1C1C1C]", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Proyecto, {}),
    /* @__PURE__ */ jsx(Equipos, {}),
    /* @__PURE__ */ jsx(Impacto, {}),
    /* @__PURE__ */ jsx(ComoApoyar, {}),
    /* @__PURE__ */ jsx(Donaciones, {}),
    /* @__PURE__ */ jsx(Contacto, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28", style: {
    background: "radial-gradient(circle at 20% 10%, #3d9b68 0%, #2e7d4f 45%, #246340 100%)"
  }, children: [
    /* @__PURE__ */ jsx(Star, { className: "absolute top-10 left-6 w-8 h-8 text-[var(--color-brand-yellow)]/80" }),
    /* @__PURE__ */ jsx(Star, { className: "absolute top-24 right-10 w-6 h-6 text-[var(--color-brand-yellow)]/60" }),
    /* @__PURE__ */ jsx(Star, { className: "absolute bottom-16 left-12 w-5 h-5 text-white/40" }),
    /* @__PURE__ */ jsx(Star, { className: "absolute bottom-32 right-20 w-7 h-7 text-[var(--color-brand-yellow)]/70" }),
    /* @__PURE__ */ jsx(PaperPlane, { className: "absolute top-32 left-1/4 w-12 h-12 text-white/70 animate-float" }),
    /* @__PURE__ */ jsx(PaperPlane, { className: "absolute bottom-20 right-1/3 w-10 h-10 text-white/60 animate-float", style: {
      animationDelay: "1.5s"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative inline-block animate-fade-up", children: [
        /* @__PURE__ */ jsx("img", { src: postImg, alt: "", className: "w-full max-w-[700px] h-auto" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(Logo, { size: "lg" }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-xl sm:text-2xl font-display font-bold text-white animate-fade-up", style: {
        animationDelay: "150ms"
      }, children: '"Compartiendo esperanza, transformando vidas"' }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm sm:text-base text-white/85 animate-fade-up", style: {
        animationDelay: "300ms"
      }, children: "Asociación del Soconusco, Chiapas · Universidad de Montemorelos" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up", style: {
        animationDelay: "450ms"
      }, children: [
        /* @__PURE__ */ jsx("a", { href: "#donaciones", className: "rounded-full bg-[var(--color-brand-yellow)] hover:brightness-105 text-[#1C1C1C] font-bold px-8 py-4 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5", children: "Apóyanos con una donación" }),
        /* @__PURE__ */ jsx("a", { href: "#proyecto", className: "rounded-full bg-white/10 backdrop-blur ring-1 ring-white/40 text-white font-semibold px-8 py-4 hover:bg-white/20 transition", children: "Conoce el proyecto ↓" })
      ] })
    ] })
  ] });
}
function Proyecto() {
  return /* @__PURE__ */ jsxs("section", { id: "proyecto", className: "relative py-20 sm:py-28 px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(Star, { className: "absolute top-10 right-8 w-6 h-6 text-[var(--color-brand-yellow)]/70" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]", children: "Nuestro propósito" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]", children: "¿Qué es Esperanza entre Páginas?" })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 120, children: [
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-lg leading-relaxed text-[#1C1C1C]/85", children: [
          "Somos parte del proyecto nacional ",
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[var(--color-brand-green)]", children: "Cruzando Fronteras" }),
          " de la Universidad de Montemorelos. Nuestro grupo, asignado al Soconusco, busca donar",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: " 4,000 colecciones de libros" }),
          " al DIF Tapachula y comunidades vulnerables de la región."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-[#1C1C1C]/85", children: "Creemos que detrás de cada libro hay mensajes de fe, restauración, amor y salvación mensajeros silenciosos que llegan a manos de personas quebrantadas, niños vulnerables y familias necesitadas." })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsxs("div", { className: "mt-12 relative inline-block max-w-xl rotate-[-1.5deg] bg-[var(--color-brand-yellow)] text-[#1C1C1C] rounded-md px-7 py-6 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#fef3c7]/80 rotate-2 shadow-sm" }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-lg sm:text-xl italic leading-snug", children: '"No nos cansemos, pues, de hacerlo bien; porque a su tiempo segaremos, si no desmayamos."' }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 font-bold", children: "— Gálatas 6:9" })
      ] }) })
    ] })
  ] });
}
function Impacto() {
  const places = [{
    title: "CENTRA Tapachula",
    tipo: "Centro de rehabilitación",
    desc: "Personas en proceso de rehabilitación recibirán colecciones de libros, refrigerios y obsequios especiales, incluyendo peluches para los niños.",
    team: "Voceros de Esperanza",
    date: "18 de julio de 2026",
    hour: "9:00 am",
    impacto: "~200 personas",
    accent: "var(--color-brand-green)"
  }, {
    title: "CERESO Tapachula",
    tipo: "Centro penitenciario",
    desc: "Personas en proceso de reinserción social recibirán literatura cristiana y materiales de esperanza y restauración.",
    team: "Sembradores de Esperanza",
    date: "19 de julio de 2026",
    hour: "Aprox. 10:00 am",
    impacto: "~200 personas",
    accent: "var(--color-brand-blue)"
  }, {
    title: "DIF Tapachula",
    tipo: "Institución de asistencia social",
    desc: "Niños, adultos mayores y familias en situación de vulnerabilidad atendidos por el DIF recibirán libros, juguetes y apoyo especial.",
    team: "Mensajeros de Esperanza",
    date: "24 de julio de 2026",
    hour: "10:30 am",
    impacto: "~1,000 personas",
    accent: "var(--color-brand-yellow)"
  }];
  return /* @__PURE__ */ jsx("section", { id: "impacto", className: "relative py-20 sm:py-28 px-4 sm:px-6 bg-[#f4f1e8]/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]", children: "Lugares de impacto" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]", children: "¿Dónde vamos a trabajar?" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: places.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 150, children: /* @__PURE__ */ jsxs("article", { className: "h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "h-2 w-full", style: {
        background: p.accent
      } }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-6 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest mb-1", style: {
            color: p.accent
          }, children: p.tipo }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-extrabold text-[var(--color-brand-blue)] leading-tight", children: p.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-[#1C1C1C]/70 leading-relaxed flex-1", children: p.desc }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-100 pt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#1C1C1C]/60", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16", children: "Fecha" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1C1C1C]/80", children: p.date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#1C1C1C]/60", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16", children: "Hora" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1C1C1C]/80", children: p.hour })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#1C1C1C]/60", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1C1C1C]/40 text-xs uppercase tracking-wide w-16", children: "Impacto" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", style: {
              color: p.accent
            }, children: p.impacto })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-xl px-3 py-2 text-xs font-semibold text-center", style: {
          background: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
          color: p.accent
        }, children: p.team })
      ] })
    ] }) }, p.title)) })
  ] }) });
}
function Equipos() {
  const teams = [{
    name: "Voceros de Esperanza",
    role: "Directora Asociada",
    person: "Emily León Méndez",
    carrera: "Estudiante de Ingeniería en Sistemas Computacionales",
    districts: ["Carrillo Puerto", "Independencia", "Centro", "Cacahoatán", "La Obrera"],
    comunidad: "CENTRA (Centro Especializado para la Prevención y Tratamiento en Adicciones)",
    image: emilyPhoto,
    imagePosition: "center 20%"
  }, {
    name: "Sembradores de Esperanza",
    role: "Asociado en Formación",
    person: "José Chan Chim",
    carrera: "Aspirante de la Licenciatura en Teología",
    districts: ["Ciudad Hidalgo", "Frontera Hidalgo", "Tuxtla Chico", "Mazatán", "La Unidad"],
    comunidad: "CERESO de Tapachula",
    image: chanPhoto,
    imagePosition: "center 10%"
  }, {
    name: "Mensajeros de Esperanza",
    // ← cambia el nombre
    role: "Secretaria Asociada",
    // ← cambia el rol
    person: "Danna López Monzon",
    // ← cambia el nombre
    carrera: "Aspirante de la Licenciatura en Psicología Clínica",
    // ← cambia la carrera
    districts: ["Azteca", "5 de Febrero", "Colinas del Rey", "Huehuetna Pueblo", "Zaragoza"],
    comunidad: "DIF TAPACHULA",
    image: dannaPhoto,
    imagePosition: "center 10%"
  }];
  return /* @__PURE__ */ jsxs("section", { id: "equipos", className: "relative py-20 sm:py-28 px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(PaperPlane, { className: "absolute top-12 right-10 w-10 h-10 text-[var(--color-brand-blue)]/30 animate-float" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]", children: "Las personas" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]", children: "Nuestros equipos" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-7", children: teams.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 150, children: /* @__PURE__ */ jsxs("article", { className: "h-full flex flex-col rounded-3xl overflow-hidden bg-[var(--color-brand-green)] text-white shadow-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-90 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: t.image, alt: t.person, className: "w-full h-full object-cover", style: {
            objectPosition: t.imagePosition
          } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--color-brand-green)] via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 px-6 pb-7 pt-2 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-white/60 mb-1", children: t.role }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-extrabold leading-snug", children: t.person }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white/75 mt-0.5", children: t.carrera })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-white/20 pt-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-white/60 mb-1", children: "Equipo" }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-base", children: t.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-white/60 mb-2", children: "Distritos a cargo" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: t.districts.map((d) => /* @__PURE__ */ jsx("span", { className: "text-xs font-medium bg-white/15 rounded-full px-2.5 py-1", children: d }, d)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-4 border-t border-white/20", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-white/60 mb-1", children: "Comunidad a impactar" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold italic", children: t.comunidad })
          ] })
        ] })
      ] }) }, t.name)) })
    ] })
  ] });
}
function ComoApoyar() {
  const ways = [{
    icon: "💰",
    title: "Donación económica",
    desc: "Para financiar libros, juguetes y alimentos."
  }, {
    icon: "🙏",
    title: "Oración intercesora",
    desc: "Tu oración es parte de esta misión."
  }, {
    icon: "🤝",
    title: "Participación voluntaria",
    desc: "Únete a las actividades del proyecto."
  }];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--color-brand-blue)] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx(Star, { className: "absolute top-10 left-10 w-6 h-6 text-[var(--color-brand-yellow)]/80" }),
    /* @__PURE__ */ jsx(Star, { className: "absolute bottom-10 right-10 w-8 h-8 text-[var(--color-brand-yellow)]/60" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-yellow)]", children: "Únete" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold", children: "¿Cómo puedes apoyar?" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: ways.map((w, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-7 text-center hover:bg-white/15 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl", children: w.icon }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-extrabold", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-white/85", children: w.desc })
      ] }) }, w.title)) })
    ] })
  ] });
}
function Donaciones() {
  const [copied, setCopied] = useState(false);
  const copyClabe = async () => {
    try {
      await navigator.clipboard.writeText(CLABE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
    }
  };
  const copyTarjeta = async () => {
    try {
      await navigator.clipboard.writeText(TARJETA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "donaciones", className: "relative py-20 sm:py-28 px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]", children: "Para donativos" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]", children: "Datos para donativos" })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl p-8 sm:p-10 shadow-lg", style: {
      background: "linear-gradient(135deg, #efe4c8 0%, #e8dcc4 60%, #ddc99e 100%)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 rotate-[-2deg] shadow-sm rounded-sm" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[var(--color-brand-blue)] font-display font-extrabold text-lg", children: [
        /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
          /* @__PURE__ */ jsx("path", { d: "M2 10h20" })
        ] }),
        "Información bancaria"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5", children: [
        /* @__PURE__ */ jsx(DataRow, { label: "No. Tarjeta", value: TARJETA }),
        /* @__PURE__ */ jsx(DataRow, { label: "Cuenta CLABE", value: CLABE, mono: true }),
        /* @__PURE__ */ jsx(DataRow, { label: "Concepto sugerido", value: 'Donativo "Esperanza entre Páginas" - Equipo "Nombre del Equipo"' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " pt-6 flex gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: copyClabe, className: "mt-7 w-full sm:w-auto rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold px-6 py-3 shadow-md transition", children: copied ? "✓ CLABE copiada" : "Copiar CLABE" }),
        /* @__PURE__ */ jsx("button", { onClick: copyTarjeta, className: "mt-7 w-full sm:w-auto rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold px-6 py-3 shadow-md transition", children: copied ? "✓ TARJETA copiada" : "Copiar TARJETA" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-sm text-[#1C1C1C]/65 italic max-w-xl mx-auto", children: "Cada donativo, por pequeño que sea, ayuda a poner un libro en manos de quien lo necesita." }) })
  ] }) });
}
function DataRow({
  label,
  value,
  mono
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-[var(--color-brand-blue)]/70", children: label }),
    /* @__PURE__ */ jsx("div", { className: `text-lg sm:text-xl font-bold text-[var(--color-brand-blue)] ${mono ? "font-mono tracking-wider" : ""}`, children: value })
  ] });
}
function Contacto() {
  const people = [{
    name: "Emily Laura Nallely León Méndez",
    role: "Directora Asociada — Voceros de Esperanza",
    phone: "8261150953",
    email: "1220122@alumno.um.edu.mx",
    wa: "528261150953"
  }, {
    name: "Danna López Monzon",
    role: "Secretaria Asociada — Mensajeros de Esperanza",
    phone: "9903341019",
    email: null,
    wa: "9903341019"
  }, {
    name: "José Chan Chim",
    role: "Asociado en Formación — Sembradores de Esperanza",
    phone: " 9997437659",
    email: null,
    wa: "9997437659"
  }];
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "relative py-20 sm:py-28 px-4 sm:px-6 bg-[#f4f1e8]/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-green)]", children: "Hablemos" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-extrabold text-[var(--color-brand-blue)]", children: "Contáctanos" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: people.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("article", { className: "h-full bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/5 flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-[var(--color-brand-green)]/15 flex items-center justify-center text-2xl", children: p.name[0] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-extrabold text-[var(--color-brand-blue)]", children: p.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[var(--color-brand-green)]", children: p.role }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-1 text-sm text-[#1C1C1C]/80", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "📱 WhatsApp: ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: p.phone })
        ] }),
        p.email && /* @__PURE__ */ jsxs("div", { children: [
          "✉️ ",
          /* @__PURE__ */ jsx("a", { className: "hover:underline", href: `mailto:${p.email}`, children: p.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${p.wa}`, target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:brightness-110 text-white font-bold px-5 py-3 shadow-md transition", children: [
        /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.5 3.5A11 11 0 003.6 17.3L2 22l4.8-1.6A11 11 0 1020.5 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1112 20zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5 0-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3z" }) }),
        "Escribir por WhatsApp"
      ] })
    ] }) }, p.name)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[var(--color-brand-blue)] text-white/90 py-12 px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto flex flex-col items-center text-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl px-5 py-3", children: /* @__PURE__ */ jsx(Logo, { size: "sm" }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Universidad de Montemorelos · Grupo Emprendum" }),
      /* @__PURE__ */ jsx("div", { className: "opacity-80", children: "Tapachula, Chiapas, México · 2026" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 inline-block px-3 py-1 rounded-full bg-[var(--color-brand-yellow)]/20 text-[var(--color-brand-yellow)] text-xs font-bold tracking-wider uppercase", children: "Cruzando Fronteras — Proyecto Nacional - Esperanza entre Páginas" })
    ] })
  ] }) });
}
export {
  Index as component
};
