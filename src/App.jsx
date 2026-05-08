import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaGlobe,
} from "react-icons/fa";

import profile from "./assets/Cris.jpg";
import madrid from "./assets/madrid.png";
import encuesta from "./assets/encuesta.png";
import scrum from "./assets/scrum.png";
import responsive from "./assets/responsive.png";
import cv from "./assets/CV Cristian Sánchez Rodríguez.pdf";
import ExperienceCard from "./components/ExperienceCard";

export default function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const text = {
    en: {
      role:
        "Systems Engineer • Technical Support • QA • Web developer",

      about:
        "Computer Systems Engineer with experience in technical support, incident management, QA validation, and modern web development. Focused on building reliable systems and scalable digital experiences.",

      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      skills: "Skills",
      resume: "Resume",

      downloadCV: "Download CV",
    },

    es: {
      role:
        "Ingeniero en Sistemas • Soporte Técnico • QA • Desarrollador web",

      about:
        "Ingeniero en Sistemas Computacionales con experiencia en soporte técnico, gestión de incidencias, validación QA y desarrollo web moderno. Enfocado en construir sistemas confiables y experiencias digitales escalables.",

      experience: "Experiencia",
      projects: "Proyectos",
      certifications: "Certificaciones",
      skills: "Habilidades",
      resume: "Currículum",

      downloadCV: "Descargar CV",
    },
  };

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* LANGUAGE */}
      <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl">

        <button
          onClick={() => changeLanguage("es")}
          className={`px-4 py-2 rounded-xl border transition ${
            language === "es"
              ? "bg-blue-500 border-blue-500"
              : "border-slate-700"
          }`}
        >
          🇲🇽 ES
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded-xl border transition ${
            language === "en"
              ? "bg-blue-500 border-blue-500"
              : "border-slate-700"
          }`}
        >
          🇺🇸 EN
        </button>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl hidden md:flex gap-8">

        <a
          href="#experience"
          className="text-slate-300 hover:text-white transition"
        >
          {text[language].experience}
        </a>

        <a
          href="#projects"
          className="text-slate-300 hover:text-white transition"
        >
          {text[language].projects}
        </a>

        <a
          href="#certifications"
          className="text-slate-300 hover:text-white transition"
        >
          {text[language].certifications}
        </a>

        <a
          href="#skills"
          className="text-slate-300 hover:text-white transition"
        >
          {text[language].skills}
        </a>

      </nav>

      {/* HERO */}
<section className="min-h-screen flex items-center justify-center px-6 pt-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-5xl"
        >

          <img
            src={profile}
            alt="Cristian"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 object-cover shadow-2xl shadow-blue-500/30 hover:scale-105 transition duration-500"
          />

          <p className="text-blue-400 text-lg mb-4 flex justify-center items-center gap-2">
            <FaGlobe />
            Portafolio
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
            Cristian Sánchez Rodríguez
          </h1>

          <h2 className="text-2xl md:text-4xl text-slate-300 mb-8">
            {text[language].role}
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            {text[language].about}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

            <a
              href="https://github.com/cristian25072002Real"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 px-6 py-3 rounded-2xl flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-slate-700 hover:border-white hover:shadow-lg hover:shadow-white/10 transition duration-300 px-6 py-3 rounded-2xl flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={cv}
              download
              className="border border-slate-700 hover:border-white hover:shadow-lg hover:shadow-white/10 transition duration-300 px-6 py-3 rounded-2xl flex items-center gap-2"
            >
              <FaDownload />
              {text[language].downloadCV}
            </a>

          </div>

        </motion.div>
      </section>

     {/* EXPERIENCE */}
<section id="experience" className="py-24 px-6 max-w-6xl mx-auto">

  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
    {text[language].experience}
  </h2>

  <div className="space-y-8">

    {/* SOWINFOTECH */}
    <ExperienceCard
      language={language}
      title="SowInfotech"
      role={{
        en: "Technical Support / Service Desk",
        es: "Soporte Técnico / Service Desk"
      }}
      date={{
        en: "May 2025 – September 2025",
        es: "Mayo 2025 – Septiembre 2025"
      }}
      location="Veracruz, México"
      summary={{
        en: "Technical support focused on incident resolution, system stability and end-user assistance in production environments.",
        es: "Soporte técnico enfocado en resolución de incidencias, estabilidad de sistemas y atención a usuarios en entornos productivos."
      }}
      points={{
        en: [
          "Resolved application incidents reducing downtime in critical processes",
          "Tracked and managed tickets through full lifecycle",
          "Analyzed failure patterns to prevent recurring issues",
          "Improved system stability through corrective actions",
          "Provided remote technical support to end users",
          "Documented solutions for internal knowledge base"
        ],
        es: [
          "Resolución de incidencias en aplicaciones reduciendo tiempos de inactividad",
          "Gestión completa de tickets desde apertura hasta cierre",
          "Análisis de patrones de fallos para prevenir incidencias recurrentes",
          "Mejora de estabilidad en sistemas mediante acciones correctivas",
          "Soporte remoto a usuarios finales",
          "Documentación de soluciones para base de conocimiento interna"
        ]
      }}
    />

    {/* FOCUS INNOVATION */}
    <ExperienceCard
      language={language}
      title="Focus Innovation"
      role={{
        en: "Junior Web Developer",
        es: "Desarrollador Web Junior"
      }}
      date={{
        en: "July 2024 – April 2025",
        es: "Julio 2024 – Abril 2025"
      }}
      location="Veracruz, México"
      summary={{
        en: "Development of a web system for the Judicial Branch of Veracruz, working on frontend, backend and reporting systems.",
        es: "Desarrollo de un sistema web para el Poder Judicial de Veracruz, participando en frontend, backend y generación de reportes."
      }}
      points={{
        en: [
          "Built a web system for the Judicial Branch of Veracruz",
          "Developed frontend and backend using JavaScript, Python, HTML and CSS",
          "Generated reports (PDF, Excel, charts)",
          "Designed role-based access control system",
          "Gathered requirements with users",
          "Used Git & GitHub for version control",
          "Created technical documentation"
        ],
        es: [
          "Desarrollo de un sistema web para el Poder Judicial de Veracruz",
          "Implementación de frontend y backend con JavaScript, Python, HTML y CSS",
          "Generación de reportes en PDF, Excel y gráficos",
          "Diseño de sistema de roles y permisos",
          "Levantamiento de requerimientos con usuarios finales",
          "Uso de Git y GitHub para control de versiones",
          "Documentación técnica del sistema"
        ]
      }}
    />

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
          {text[language].projects}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 transition duration-500"
          >

            <img
              src={madrid}
              alt="Madrid Project"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                Madrid vs Dortmund
              </h3>

              <p className="text-slate-400 mb-6">
                Interactive betting-style website with match analysis and dynamic information.
              </p>

              <a
                href="https://cristian25072002real.github.io/Real-Madrid-final/"
                target="_blank"
                className="text-blue-400"
              >
                View Project →
              </a>

            </div>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 transition duration-500"
          >

            <img
              src={encuesta}
              alt="Survey Project"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                Interactive Survey
              </h3>

              <p className="text-slate-400 mb-6">
                Responsive survey form focused on validation and user experience.
              </p>

              <a
                href="https://cristian25072002real.github.io/Encuesta/"
                target="_blank"
                className="text-blue-400"
              >
                View Project →
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
          {text[language].certifications}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden">

            <img
              src={responsive}
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Responsive Web Design
              </h3>

              <p className="text-slate-400">
                freeCodeCamp • 2025
              </p>
            </div>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden">

            <img
              src={scrum}
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Scrum Foundation Professional
              </h3>

              <p className="text-slate-400">
                CertiProf • 2023
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
<section id="skills" className="py-24 px-6 max-w-6xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text"
  >
    {text[language].skills}
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* WEB DEVELOPMENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl p-8 hover:border-blue-500 transition duration-500"
    >
      <h3 className="text-2xl font-bold mb-2">
        💻 {language === "en" ? "Frontend & Web Development" : "Desarrollo Frontend y Web"}
      </h3>

      <p className="text-slate-400 mb-6 text-sm">
        {language === "en"
          ? "Building responsive interfaces, reusable components and interactive user experiences."
          : "Construcción de interfaces responsivas, componentes reutilizables y experiencias interactivas."}
      </p>

      <div className="flex flex-wrap gap-3">
        {(language === "en"
          ? ["React", "JavaScript", "HTML", "CSS", "Node.js", "Python", "Responsive Design"]
          : ["React", "JavaScript", "HTML", "CSS", "Node.js", "Python", "Diseño Responsivo"]
        ).map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-xl text-slate-300 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

    {/* TECHNICAL SUPPORT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl p-8 hover:border-blue-500 transition duration-500"
    >
      <h3 className="text-2xl font-bold mb-2">
        🛠 {language === "en" ? "Technical Support & Operations" : "Soporte Técnico y Operaciones"}
      </h3>

      <p className="text-slate-400 mb-6 text-sm">
        {language === "en"
          ? "Incident resolution, system stability, user support and troubleshooting in production environments."
          : "Resolución de incidencias, estabilidad de sistemas, soporte a usuarios y diagnóstico en entornos productivos."}
      </p>

      <div className="flex flex-wrap gap-3">
        {(language === "en"
          ? ["Incident Management", "Ticketing Systems", "Troubleshooting", "Remote Support", "Windows", "Documentation"]
          : ["Gestión de Incidencias", "Sistemas de Tickets", "Resolución de Problemas", "Soporte Remoto", "Windows", "Documentación"]
        ).map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-xl text-slate-300 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

    {/* DATABASES & TOOLS */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl p-8 hover:border-blue-500 transition duration-500"
    >
      <h3 className="text-2xl font-bold mb-2">
        🗄 {language === "en" ? "Databases & Tools" : "Bases de Datos y Herramientas"}
      </h3>

      <p className="text-slate-400 mb-6 text-sm">
        {language === "en"
          ? "Data handling, version control and API integration for scalable applications."
          : "Manejo de datos, control de versiones e integración de APIs para aplicaciones escalables."}
      </p>

      <div className="flex flex-wrap gap-3">
        {(language === "en"
          ? ["SQL", "Git", "GitHub", "REST APIs", "Version Control"]
          : ["SQL", "Git", "GitHub", "APIs REST", "Control de Versiones"]
        ).map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-xl text-slate-300 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

    {/* QA */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-3xl p-8 hover:border-blue-500 transition duration-500"
    >
      <h3 className="text-2xl font-bold mb-2">
        ✅ QA & {language === "en" ? "Testing" : "Pruebas de Software"}
      </h3>

      <p className="text-slate-400 mb-6 text-sm">
        {language === "en"
          ? "Validation, testing and analysis to ensure system reliability and quality."
          : "Validación, pruebas y análisis para garantizar la confiabilidad y calidad de los sistemas."}
      </p>

      <div className="flex flex-wrap gap-3">
        {(language === "en"
          ? ["Functional Testing", "Bug Reporting", "System Validation", "User Testing", "Quality Assurance"]
          : ["Pruebas Funcionales", "Reporte de Bugs", "Validación de Sistemas", "Pruebas de Usuario", "Aseguramiento de Calidad"]
        ).map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-xl text-slate-300 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500 border-t border-white/10 mt-20">
        © 2026 Cristian Sánchez Rodríguez • Built with React & Tailwind CSS
      </footer>

    </main>
  );
}