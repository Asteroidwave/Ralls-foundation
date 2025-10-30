export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
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
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <p>Email: info@rallsfoundation.org</p>
          <p>We currently accept grant applications online.</p>
        </div>
      </div>
    </div>
  );
}


