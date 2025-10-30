"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <div className="h-1 w-full bg-[var(--brand-yellow)]" />
        <div className="container py-14">
          <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">About Us</h1>
          <p className="text-2xl text-zinc-700 max-w-4xl">Advancing nutrition education for children in underserved communities.</p>
        </div>
      </section>
      <div className="container pb-20">
        <div className="h-1 w-full bg-[var(--brand-yellow)] mb-12" />
        <div className="grid gap-14">
          {/* Alternating sections */}
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <motion.div className="lg:col-span-6 order-2 lg:order-1" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut" }}>
              <div className="max-w-3xl space-y-6">
                <h2 className="text-5xl font-extrabold">Mission</h2>
                <p className="text-2xl text-zinc-700">We invest in organizations that deliver nutrition education to children and their caregivers in underserved communities, advancing health equity and lifelong well-being.</p>
                <h2 className="text-5xl font-extrabold">Vision</h2>
                <p className="text-2xl text-zinc-700">Inclusive and connected communities where every child understands the foundations of healthy eating and has the opportunity to thrive.</p>
                <h2 className="text-5xl font-extrabold">Values</h2>
                <ul className="text-2xl text-zinc-700 list-disc pl-6 space-y-2">
                  <li>Equity and inclusion</li>
                  <li>Evidence and impact</li>
                  <li>Partnership and community</li>
                  <li>Stewardship and transparency</li>
                </ul>
                <h2 className="text-5xl font-extrabold">Founders</h2>
                <p className="text-2xl text-zinc-700">The Ralls family created the Foundation to honor a commitment to community, education, and practical, measurable impact.</p>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-6 order-1 lg:order-2" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut" }}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/kate-and-girls.jpg" alt="Family and community" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12">
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut" }}>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image src="/girls-with-kids.jpg" alt="Programs in the community" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}>
              <div className="max-w-3xl space-y-4">
                <h2 className="text-5xl font-extrabold">Our Work So Far</h2>
                <p className="text-2xl text-zinc-700">We’ve partnered with schools and clinics to deliver practical, hands-on nutrition lessons, and supported programs that improve access to fresh foods while teaching healthy cooking skills.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


