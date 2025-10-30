import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f0f5ec] border-t border-black/5">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-base">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full" style={{ backgroundColor: "var(--brand-green)" }} />
            <span className="font-semibold text-lg">Ralls Family Foundation</span>
          </div>
          <p className="text-zinc-700 max-w-sm text-lg">
            Advancing nutrition education for children in underserved communities.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-lg">Pages</p>
          <ul className="space-y-2 text-zinc-700 text-lg">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/apply">Apply for a Grant</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-lg">Contact</p>
          <address className="not-italic text-zinc-700 text-lg">
            Email: <a className="underline" href="mailto:info@rallsfoundation.org">info@rallsfoundation.org</a>
          </address>
        </div>

        <div>
          <p className="font-semibold mb-3 text-lg">Follow</p>
          <ul className="space-y-2 text-zinc-700 text-lg">
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Ralls Family Foundation · 501(c)(3)
      </div>
    </footer>
  );
}


