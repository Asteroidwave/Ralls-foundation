export default function StoriesPage() {
  const stories = [
    {
      title: "Cooking Basics for 5th Graders",
      summary: "A school program teaching knife safety and simple veggie-forward recipes.",
    },
    {
      title: "Clinic Pantry Produce Days",
      summary: "Pairing fresh produce distribution with kid-friendly nutrition lessons.",
    },
  ];
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Stories & Impact</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {stories.map((s) => (
          <article key={s.title} className="rounded-xl border border-black/5 dark:border-white/10 p-6 bg-white/60 dark:bg-black/40">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{s.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}


