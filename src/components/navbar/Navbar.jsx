import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Library", href: "#library" },
  { name: "Benefits", href: "#benefits" },
  { name: "Palette", href: "#palette" },
  { name: "Stories", href: "#stories" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <nav className="mx-auto flex max-w-[1720px] items-center justify-between px-6 py-6 md:px-10 lg:px-20">
        {/* Logo */}
        <a href="#" className="group shrink-0">
          <span className="block font-serif text-3xl tracking-tight">
            Recueil
          </span>

          <span className="mt-1 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-200" />A new
            fragrance, every month
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/75 transition-colors duration-300 hover:text-white xl:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Subscribe button */}
        <a
          href="#pricing"
          className="hidden rounded-full bg-sky-200 px-7 py-4 text-xs font-medium tracking-[0.15em] text-slate-900 transition duration-300 hover:bg-white md:inline-flex"
        >
          SUBSCRIBE
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="rounded-full border border-white/25 bg-white/10 p-3 backdrop-blur-md lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="mx-5 rounded-2xl border border-white/15 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-sm text-white/80 transition hover:text-sky-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-sky-200 px-5 py-4 text-center text-xs font-semibold tracking-widest text-slate-900"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
