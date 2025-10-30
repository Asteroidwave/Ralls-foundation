import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
            <span className="font-semibold">Ralls Family Foundation</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-sm">
            Advancing nutrition education for children in underserved communities.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3">Pages</p>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/apply">Apply for a Grant</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Contact</p>
          <address className="not-italic text-zinc-700 dark:text-zinc-300">
            Email: <a className="underline" href="mailto:info@rallsfoundation.org">info@rallsfoundation.org</a>
          </address>
        </div>
      </div>
      <div className="border-t border-black/5 dark:border-white/10 py-6 text-center text-xs text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Ralls Family Foundation · 501(c)(3)
      </div>
    </footer>
  );
}


