"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        <motion.div className="lg:col-span-5 order-2 lg:order-1" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut" }}>
          <span className="inline-block h-2 w-24 rounded-full bg-[var(--brand-yellow)] mb-3" />
          <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-zinc-700 mb-6">We’d love to hear from partners and community members.</p>
          <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea rows={5} className="w-full rounded-lg border border-black/10 bg-white/70 dark:bg-black/30 px-3 py-2" />
          </div>
          <button className="btn-primary" type="button">Send</button>
          </form>
          <div className="space-y-2 text-sm text-zinc-700 mt-6">
            <p>Email: info@rallsfoundation.org</p>
            <p>We currently accept grant applications online.</p>
          </div>
        </motion.div>
        <motion.div className="lg:col-span-7 order-1 lg:order-2" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut" }}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Community garden" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}


