"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero: big image, text offset (inspiration: Green, Blank, Ford) */}
      <section className="relative overflow-hidden">
        <div className="h-1 w-full bg-[var(--brand-yellow)]" />
        <div className="container py-6">
          <div className="relative w-full rounded-2xl overflow-hidden mx-auto aspect-[16/9] max-h-[80vh]">
            <Image src="/family.jpg" alt="Ralls family" fill className="object-cover object-center" priority />
          </div>
        </div>
        <div className="container pb-10">
          <div className="max-w-5xl space-y-6">
            <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-7xl lg:text-8xl font-extrabold tracking-tight text-zinc-900">
              Nutrition education for every child
            </motion.h1>
            <p className="text-3xl text-zinc-800">
              We support programs that teach kids and caregivers how to eat well and build healthy habits in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-primary">Apply for a Grant</Link>
              <Link href="/about" className="btn-secondary">About the Foundation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured story with big image */}
      <section className="py-24 bg-white">
        <div className="h-1 w-full bg-[var(--brand-yellow)] mb-12" />
        <div className="container grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.05, ease: "easeOut" }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <Image src="/gen-viv.jpg" alt="Community class preparing healthy food" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-4xl font-bold">Cooking basics in after‑school programs</h2>
            <p className="text-lg text-zinc-700">
              Hands-on lessons help kids build confidence in choosing and preparing vegetables, fruits, and whole foods.
            </p>
            <Link href="/stories" className="btn-primary w-fit">Read Stories</Link>
          </div>
        </div>
      </section>

      {/* Focus areas: airy grid */}
      <section className="py-24">
        <div className="h-1 w-full bg-[var(--brand-yellow)] mb-12" />
        <div className="container">
          <h2 className="text-5xl font-bold mb-8">Our Priorities</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[{
              title: "Nutrition Education",
              desc: "Evidence-based curricula for K-12 and caregivers.",
              img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
            }, {
              title: "Healthy Access",
              desc: "Improving access to fresh, nutritious foods.",
              img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop",
            }, {
              title: "Community Partnerships",
              desc: "Working with schools, clinics, and nonprofits.",
              img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
            }].map((c) => (
              <article key={c.title} className="rounded-2xl overflow-hidden border border-black/5 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={c.img} alt={c.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-semibold text-lg">{c.title}</h3>
                  <p className="text-sm text-zinc-700">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wide CTA with space */}
      <section className="py-28 bg-[var(--brand-lime)]/30">
        <div className="h-1 w-full bg-[var(--brand-yellow)] mb-12" />
        <div className="container">
          <div className="rounded-3xl p-12 md:p-16 bg-white border border-black/5 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-4xl lg:text-5xl font-extrabold mb-3 text-zinc-900">Have a program impacting kids' nutrition?</h3>
              <p className="text-xl text-zinc-700">We fund capable, courageous leaders making measurable impact.</p>
            </div>
            <div className="flex md:justify-end">
              <Link href="/apply" className="btn-primary text-lg px-8 py-4">Start Application</Link>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-[var(--brand-yellow)] mt-12" />
      </section>
    </div>
  );
}
