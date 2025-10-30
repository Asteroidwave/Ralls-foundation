export default function PressPage() {
  const releases = [
    { date: "2025-09-15", title: "Ralls Family Foundation Announces First Nutrition Micro-Grants" },
    { date: "2025-06-01", title: "Foundation Partners with Local Schools on Healthy Lunch Pilot" },
  ];
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-6">Press</h1>
      <ul className="space-y-4">
        {releases.map((r) => (
          <li key={r.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-black/5 dark:border-white/10 p-4">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{new Date(r.date).toLocaleDateString()}</span>
            <span className="font-medium">{r.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


