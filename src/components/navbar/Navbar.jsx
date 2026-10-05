import logo from "../../assets/logo.png";

import { useState } from "react";

const serviceLinks = [
  { label: "UI & UX Design", href: "/web-and-ux-design" },
  { label: "Brand & Strategy", href: "/brand-strategy" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Influencer Marketing", href: "/influencer-marketing" },
  { label: "Creative & Content", href: "/creative-and-content" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="
        fixed
        left-1/2
        top-[42px]
        z-[1000]
        flex
        h-[57px]
        w-[421px]
        -translate-x-1/2
        items-center
        rounded-full
        border
        border-white/[0.10]
        bg-[rgba(8,12,11,0.24)]
        transition-colors
        duration-200
        px-[24px]
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-[16px]
        max-[1100px]:left-0
        max-[1100px]:top-[40px]
        max-[1100px]:h-[28px]
        max-[1100px]:w-full
        max-[1100px]:translate-x-0
        max-[1100px]:rounded-none
        max-[1100px]:border-0
        max-[1100px]:bg-transparent
        max-[1100px]:px-[24px]
        max-[1100px]:shadow-none
        max-[1100px]:backdrop-blur-0
      "
    >
      <a
        href="/"
        aria-label="Dignifyd home"
        className="flex shrink-0 items-center"
      >
        <img
          src={logo}
          alt="Dignifyd"
          className="block w-[81px] brightness-0 invert max-[1100px]:w-[68px]"
        />
      </a>

      <nav className="ml-[16px] flex h-[33px] items-center gap-[2px] max-[1100px]:hidden">
        <a
          href="/about"
          className="inline-flex h-[33px] items-center rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline transition-colors duration-200 hover:bg-white/[0.07]"
        >
          About
        </a>

        <div className="group relative">
          <a
            href="/services"
            className="inline-flex h-[33px] items-center gap-[6px] rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline transition-colors duration-200 hover:bg-white/[0.07]"
          >
            Services

            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
          </a>

          <div
            className="
              invisible
              absolute
              left-1/2
              top-[calc(100%+8px)]
              z-[1100]
              w-[226px]
              -translate-x-1/2
              translate-y-[-6px]
              rounded-[14px]
              border
              border-white/10
              bg-[rgba(9,13,12,0.72)]
              p-2
              opacity-0
              shadow-[0_18px_45px_rgba(0,0,0,0.36)]
              backdrop-blur-[18px]
              transition-all
              duration-200
              ease-out
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {serviceLinks.map((service) => (
              <a
                key={service.label}
                href={service.href}
                className="block rounded-[8px] px-[12px] py-[10px] text-[13px] leading-[18px] text-white no-underline transition-colors duration-150 hover:bg-white/[0.08]"
              >
                {service.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/contact"
          className="inline-flex h-[33px] items-center rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline transition-colors duration-200 hover:bg-white/[0.07]"
        >
          Contact Us
        </a>
      </nav>

      <button
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="ml-auto hidden h-[32px] w-[32px] items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 max-[1100px]:inline-flex"
      >
        <svg viewBox="0 0 20 20" className="h-[32px] w-[32px]" aria-hidden="true">
          {menuOpen ? (
            <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          ) : (
            <path d="M1 5h18M1 10h18M1 15h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-[24px] top-[calc(100%+12px)] flex w-[220px] flex-col rounded-[16px] border border-white/10 bg-[rgba(9,13,12,0.88)] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.36)] backdrop-blur-[18px] min-[1101px]:hidden"
        >
          {[
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact Us", href: "/contact" },
            ...serviceLinks,
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[9px] px-3 py-[10px] text-[13px] leading-[18px] text-white transition-colors duration-150 hover:bg-white/[0.08]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
