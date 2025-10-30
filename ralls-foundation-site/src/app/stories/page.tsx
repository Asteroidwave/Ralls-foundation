import Image from "next/image";

export default function StoriesPage() {
  const stories = [
    {
      title: "Cooking Basics for 5th Graders",
      summary: "A school program teaching knife safety and simple veggie-forward recipes.",
      img: "https://images.pexels.com/photos/3184194/pexels-photo-3184194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Clinic Pantry Produce Days",
      summary: "Pairing fresh produce distribution with kid-friendly nutrition lessons.",
      img: "https://images.pexels.com/photos/4199091/pexels-photo-4199091.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div>
      <section className="container pt-20 pb-10">
        <span className="inline-block h-2 w-24 rounded-full bg-[var(--brand-yellow)] mb-3" />
        <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight">Stories & Impact</h1>
      </section>
      <section className="container pb-20 grid gap-8 sm:grid-cols-2">
        {stories.map((s) => (
          <article key={s.title} className="rounded-2xl overflow-hidden border border-black/5 bg-white">
            <div className="relative aspect-[16/10]">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-zinc-700 text-sm">{s.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}


