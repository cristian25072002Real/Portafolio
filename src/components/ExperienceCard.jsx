import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceCard({
  title,
  role,
  date,
  location,
  summary,
  points,
  language = "en"
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={() => setOpen(!open)}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 p-8 rounded-3xl cursor-pointer transition duration-300"
    >

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

        <div>
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="text-blue-400 font-medium">
            {role[language]}
          </p>
        </div>

        <span className="text-slate-400 text-sm md:text-right">
          {location}
          <br />
          {date[language]}
        </span>

      </div>

      {/* SUMMARY */}
      <p className="text-slate-300 mt-4">
        {summary[language]}
      </p>

      {/* TOGGLE TEXT */}
      <p className="text-xs text-slate-500 mt-3">
        {open
          ? language === "en"
            ? "Click to collapse ↑"
            : "Clic para cerrar ↑"
          : language === "en"
            ? "Click to expand ↓"
            : "Clic para ver más ↓"}
      </p>

      {/* DROPDOWN */}
      {open && (
        <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc pl-5">
          {points[language].map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

    </motion.div>
  );
}