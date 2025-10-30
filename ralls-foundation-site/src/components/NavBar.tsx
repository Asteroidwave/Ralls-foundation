"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#eef3ea]/95 bg-[#eef3ea]/95 border-b border-black/10">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md grid place-items-center" style={{ backgroundColor: "var(--brand-green)", color: "white" }}>
            <span className="text-[11px] font-bold leading-none">RFF</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Ralls Family Foundation</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative text-lg font-medium">
                <span className={`rounded-full px-3 py-2 transition-colors ${active ? "bg-[var(--brand-lime)]/50 text-black" : "text-zinc-700 hover:bg-[var(--brand-lime)]/40 hover:text-black"}`}>
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full"
                    style={{ backgroundColor: "var(--brand-green)" }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/apply" className="btn-primary text-base">Apply for a Grant</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-black/80"
        >
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary" onClick={() => setOpen(false)}>
              Apply for a Grant
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

export default NavBar;


