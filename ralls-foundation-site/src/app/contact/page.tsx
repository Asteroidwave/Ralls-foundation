import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">Contact Us</h1>
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
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop" alt="Community garden" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}


