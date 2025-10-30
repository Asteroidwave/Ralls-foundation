import Image from "next/image";

export default function PressPage() {
  const releases = [
    { date: "2025-09-15", title: "Ralls Family Foundation Announces First Nutrition Micro-Grants" },
    { date: "2025-06-01", title: "Foundation Partners with Local Schools on Healthy Lunch Pilot" },
  ];
  return (
    <div>
      <section className="relative">
        <div className="container pt-20 pb-10 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="inline-block h-2 w-24 rounded-full bg-[var(--brand-yellow)] mb-3" />
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight">Press</h1>
            <p className="text-xl text-zinc-700 mt-3">Latest announcements and media mentions.</p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.pexels.com/photos/3676228/pexels-photo-3676228.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Press microphones" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-20">
        <ul className="space-y-4">
          {releases.map((r) => (
            <li key={r.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-black/5 p-4 bg-white">
              <span className="text-sm text-zinc-600">{new Date(r.date).toLocaleDateString()}</span>
              <span className="font-medium">{r.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


