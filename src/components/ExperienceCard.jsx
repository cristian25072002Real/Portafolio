import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceCard({ title, role, date, location, summary, points }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 p-8 rounded-3xl cursor-pointer"
      onClick={() => setOpen(!open)}
    >

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-blue-400">{role.en}</p>
        </div>

        <span className="text-slate-400 text-sm text-right">
          {location}<br />{date}
        </span>
      </div>

      <p className="text-slate-300 mt-4">
        {summary.en}
      </p>

      <p className="text-xs text-slate-500 mt-3">
        {open ? "Click to collapse ↑" : "Click to expand ↓"}
      </p>

      {open && (
        <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc pl-5">
          {points.en.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

    </motion.div>
  );
}