import Image from "next/image";

export default function StoriesPage() {
  const stories = [
    {
      title: "Cooking Basics for 5th Graders",
      summary: "A school program teaching knife safety and simple veggie-forward recipes.",
      img: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Clinic Pantry Produce Days",
      summary: "Pairing fresh produce distribution with kid-friendly nutrition lessons.",
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop",
    },
  ];
  return (
    <div>
      <section className="container pt-20 pb-10">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">Stories & Impact</h1>
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


