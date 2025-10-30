"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero: big image, text offset (inspiration: Green, Blank, Ford) */}
      <section className="relative overflow-hidden">
        <div className="container pt-24 pb-20 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900"
            >
              Nutrition education for every child
            </motion.h1>
            <p className="text-2xl text-zinc-700 max-w-prose">
              We support programs that teach kids and caregivers how to eat well and build healthy habits in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-primary">Apply for a Grant</Link>
              <Link href="/about" className="btn-secondary">About the Foundation</Link>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1600&auto=format&fit=crop"
                alt="Children learning about fruits and vegetables"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured story with big image */}
      <section className="py-24 bg-white">
        <div className="container grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1603201667141-7f0e6c56e6dd?q=80&w=1600&auto=format&fit=crop"
                alt="Community class preparing healthy food"
                fill
                className="object-cover"
              />
            </div>
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
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Our Priorities</h2>
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
        <div className="container">
          <div className="rounded-3xl p-10 md:p-14 bg-white border border-black/5 grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-2 text-zinc-900">Have a program impacting kids' nutrition?</h3>
              <p className="text-zinc-700">We fund capable, courageous leaders making measurable impact.</p>
            </div>
            <div className="flex md:justify-end">
              <Link href="/apply" className="btn-primary">Start Application</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
