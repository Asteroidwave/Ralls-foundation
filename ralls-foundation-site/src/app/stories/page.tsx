"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoriesPage() {
  const stories = [
    {
      title: "Cooking Basics for 5th Graders",
      summary: "A school program teaching knife safety and simple veggie-forward recipes.",
      img: "/kate-and-girls.jpg",
    },
    {
      title: "Clinic Pantry Produce Days",
      summary: "Pairing fresh produce distribution with kid-friendly nutrition lessons.",
      img: "/gen-viv.jpg",
    },
  ];
  return (
    <div>
      <section className="container pt-20 pb-10">
        <span className="inline-block h-2 w-24 rounded-full bg-[var(--brand-yellow)] mb-3" />
        <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight">Stories & Impact</h1>
      </section>
      <section className="container pb-20 space-y-14">
        <div className="h-1 w-full bg-[var(--brand-yellow)]" />
        {stories.map((s, i) => (
          <div key={s.title} className={`grid items-center gap-8 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.1, ease: "easeOut" }} className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </motion.div>
            </div>
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.1, ease: "easeOut", delay: 0.08 }}>
              <h3 className="text-4xl font-bold mb-2">{s.title}</h3>
              <p className="text-lg text-zinc-700">{s.summary}</p>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}


