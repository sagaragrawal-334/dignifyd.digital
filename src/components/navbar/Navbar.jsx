import logo from "../../assets/logo.png";

const serviceLinks = [
  { label: "UI & UX Design", href: "/web-and-ux-design" },
  { label: "Brand & Strategy", href: "/brand-strategy" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Influencer Marketing", href: "/influencer-marketing" },
  { label: "Creative & Content", href: "/creative-and-content" },
];

export default function Navbar() {
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
        px-[24px]
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-[16px]
        max-[760px]:top-[20px]
        max-[760px]:h-[54px]
        max-[760px]:w-[calc(100vw-32px)]
        max-[760px]:px-[20px]
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
          className="block w-[81px] brightness-0 invert max-[760px]:w-[72px]"
        />
      </a>

      <nav className="ml-[16px] flex h-[33px] items-center gap-[2px] max-[760px]:ml-auto">
        <a
          href="/about"
          className="inline-flex h-[33px] items-center rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline transition-opacity duration-200 hover:opacity-60"
        >
          About
        </a>

        <div className="group relative">
          <a
            href="/services"
            className="inline-flex h-[33px] items-center gap-[6px] rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline"
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
          className="inline-flex h-[33px] items-center rounded-full px-[14px] text-[13px] font-medium leading-[17px] text-white no-underline transition-opacity duration-200 hover:opacity-60"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}