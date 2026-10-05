import { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";
import SiteFooter from "../shared/SiteFooter";

import heroVideo from "../../assets/hero-video.mp4";
import logo from "../../assets/logo.png";
import portrait from "../../assets/portrait.jpg";

import brand1 from "../../assets/brand-01.png";
import brand2 from "../../assets/brand-02.png";
import brand3 from "../../assets/brand-03.png";
import brand4 from "../../assets/brand-04.png";
import brand5 from "../../assets/brand-05.png";

import gallery1 from "../../assets/gallery-01.png";
import gallery2 from "../../assets/gallery-02.jpeg";
import gallery3 from "../../assets/gallery-03.png";
import gallery4 from "../../assets/gallery-04.jpeg";
import gallery5 from "../../assets/gallery-05.png";
import gallery6 from "../../assets/gallery-06.png";
import gallery7 from "../../assets/gallery-07.png";
import gallery8 from "../../assets/gallery-08.jpeg";

const galleryRowOne = [gallery1, gallery2, gallery3, gallery4];
const galleryRowTwo = [gallery5, gallery6, gallery7, gallery8];

const approach = [
  {
    title: "Discover",
    copy: "We align on goals, scope, and success metrics before execution.",
    icon: (
      <svg
        viewBox="0 0 72 72"
        className="h-[72px] w-[72px]"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="31"
          cy="31"
          r="18"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M44 44L58 58"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M25 16C18.5 18.5 14 24.3 14 31"
          stroke="#00bdb5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Execute",
    copy: "Our teams design, build, and deploy with speed and precision.",
    icon: (
      <svg
        viewBox="0 0 72 72"
        className="h-[72px] w-[72px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26 17L15 36L26 55"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46 17L57 36L46 55"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="36" r="2.3" fill="#00bdb5" />
        <circle cx="36" cy="36" r="2.3" fill="#00bdb5" />
        <circle cx="42" cy="36" r="2.3" fill="#00bdb5" />
      </svg>
    ),
  },
  {
    title: "Optimize",
    copy: "We refine continuously using performance data and feedback loops.",
    icon: (
      <svg
        viewBox="0 0 72 72"
        className="h-[72px] w-[72px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M36 10L41.8 24.2L57 26.2L45.7 36.8L48.6 52L36 44.7L23.4 52L26.3 36.8L15 26.2L30.2 24.2L36 10Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M45 22C53 22 60 27 63 35"
          stroke="#00bdb5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M63 35L57 32"
          stroke="#00bdb5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const capabilities = [
  [
    "Workstreams",
    "All initiatives tracked through structured queues with clear ownership.",
  ],
  [
    "Fast Delivery",
    "Agile execution powered by prioritisation, sprints, and delivery benchmarks.",
  ],
  [
    "Predictable Pricing",
    "Transparent scope, clear commercials, and outcome-driven planning.",
  ],
  [
    "Proven Expertise",
    "Experience across brands, sectors, and high-impact digital initiatives.",
  ],
  [
    "Iterate",
    "Continuous refinement guided by feedback, data, and performance insights.",
  ],
  [
    "Custom Solutions",
    "Custom strategies and executions aligned to your business goals.",
  ],
];

function useMarquee({
  speed = 0.04,
  direction = -1,
  initialX = 0,
  cycle = 1200,
  scrollBoost = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();
    let x = initialX;
    let previousScroll = window.scrollY;

    const tick = (time) => {
      const delta = Math.min(time - previous, 32);
      previous = time;

      const scrollDelta = window.scrollY - previousScroll;
      previousScroll = window.scrollY;

      x += direction * speed * delta;
      x += direction * scrollDelta * scrollBoost;

      if (direction < 0 && x <= -cycle) {
        x += cycle;
      }

      if (direction > 0 && x >= 0) {
        x -= cycle;
      }

      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px,0,0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [cycle, direction, initialX, scrollBoost, speed]);

  return ref;
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex h-[40px] items-center rounded-full border border-white/10 bg-white/[0.025] px-[16px] text-[16px] font-medium leading-[20px] text-white backdrop-blur-[5px]">
      {children}
    </span>
  );
}

function BrandRail() {
  const trackRef = useMarquee({
    speed: 0.045,
    direction: -1,
    initialX: -2323,
    cycle: 1166,
  });

  const items = [
    { src: brand1, width: 79 },
    { src: brand2, width: 187 },
    { src: brand3, width: 172 },
    { src: brand4, width: 206 },
    { src: brand5, width: 202 },
  ];

  return (
    <section className="h-[189px] overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto flex h-full w-[1200px] max-w-[calc(100vw-32px)] flex-col items-center">
        <p className="mt-[1px] text-center text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-[#999]">
          Trusted by global brands across lifestyle, SaaS, fintech &amp;
          enterprise
        </p>

        <div className="relative mt-[49px] h-[55px] w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[180px] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[180px] bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />

          <div
            ref={trackRef}
            className="absolute left-0 top-0 flex w-max"
          >
            {Array.from({ length: 12 }).map((_, copy) => (
              <div
                key={copy}
                className="flex h-[55px] shrink-0 items-center gap-[64px] pr-[64px]"
              >
                {items.map((item, index) => (
                  <div
                    key={`${copy}-${index}`}
                    className="flex h-[55px] shrink-0 items-center justify-center"
                    style={{ width: `${item.width}px` }}
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="block h-auto w-full object-contain opacity-[0.82]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkRail({ images, direction, initialX, top }) {
  const trackRef = useMarquee({
    speed: 0.075,
    direction,
    initialX,
    cycle: 1864,
    scrollBoost: 0.22,
  });

  const repeated = Array.from({ length: 10 }, () => images).flat();

  const rotations = [
    "-rotate-[3deg]",
    "rotate-[3deg]",
    "-rotate-[2deg]",
    "rotate-[4deg]",
  ];

  return (
    <div
      className="absolute left-1/2 w-[1920px] -translate-x-1/2"
      style={{ top }}
    >
      <div className="relative h-[424px] overflow-hidden">
        <div
          ref={trackRef}
          className="absolute left-[-40px] top-0 flex w-max items-start gap-[8px]"
        >
          {repeated.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`h-[280px] w-[458px] shrink-0 overflow-hidden rounded-[24px] ${rotations[index % 4]}`}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceMarquee() {
  const firstRow = [
    ["Logos", 161.2],
    ["Creative Strategy", 297.48],
    ["Branding", 198.53],
    ["Website Design", 277.17],
  ];

  const secondRow = [
    ["Influencer Marketing", 339.81],
    ["Copywriting", 236.84],
    ["Video Editing", 249.73],
    ["SEO, SEM", 208.53],
    ["Social Media", 241.28],
  ];

  const firstRef = useMarquee({
    speed: 0.035,
    direction: -1,
    initialX: -1150,
    cycle: 959,
    scrollBoost: 0.1,
  });

  const secondRef = useMarquee({
    speed: 0.04,
    direction: 1,
    initialX: -2240,
    cycle: 1072,
    scrollBoost: 0.1,
  });

  const renderRow = (items) =>
    Array.from({ length: 5 }).map((_, copy) => (
      <div
        key={copy}
        className="flex h-[78px] shrink-0 items-center gap-[24px] pr-[24px]"
      >
        {items.map(([label, width]) => (
          <a
            key={`${copy}-${label}`}
            href="/services"
            style={{ width: `${width}px` }}
            className="flex h-[78px] shrink-0 items-center rounded-full border border-white/10 bg-[#0d0d0d] px-[24px] text-[19px] font-medium tracking-[-0.38px] text-[#fbfafc] no-underline transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="mr-[10px] text-[20px] text-cyan-300">+</span>
            <span className="whitespace-nowrap">{label}</span>
          </a>
        ))}
      </div>
    ));

  return (
    <div className="relative mt-[48px] overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[150px] bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[150px] bg-gradient-to-l from-black via-black/80 to-transparent" />

      <div className="relative h-[78px] overflow-hidden">
        <div
          ref={firstRef}
          className="absolute left-0 top-0 flex w-max"
        >
          {renderRow(firstRow)}
        </div>
      </div>

      <div className="relative mt-[24px] h-[78px] overflow-hidden">
        <div
          ref={secondRef}
          className="absolute left-0 top-0 flex w-max"
        >
          {renderRow(secondRow)}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroVideoStageRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateHeroScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = heroSectionRef.current;
        if (!section) return;

        // Drive the hero animation from the hero's own position instead of
        // global scrollY. This prevents the animation from starting too early.
        const rect = section.getBoundingClientRect();
        const raw = clamp(-rect.top / 560, 0, 1);
        const progress = raw * raw * (3 - 2 * raw);

        // The live composition is primarily the video rising through the hero.
        if (heroVideoStageRef.current) {
          heroVideoStageRef.current.style.transform =
            `translate3d(0, ${-progress * 330}px, 0)`;
        }

        // Keep the hero copy visible and stable, with only a restrained drift.
        if (heroContentRef.current) {
          heroContentRef.current.style.transform =
            `translate3d(0, ${-progress * 28}px, 0)`;
          heroContentRef.current.style.opacity = `${1 - progress * 0.08}`;
        }
      });
    };

    window.addEventListener("scroll", updateHeroScroll, { passive: true });
    window.addEventListener("resize", updateHeroScroll);
    updateHeroScroll();

    return () => {
      window.removeEventListener("scroll", updateHeroScroll);
      window.removeEventListener("resize", updateHeroScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] font-['Inter',sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        {/* =========================================================
            HERO + VIDEO SCROLL STAGE
        ========================================================= */}
        <section ref={heroSectionRef} className="relative h-[1312px] bg-[#0c0c0c]">
          {/* Hero stays in place while its content moves with scroll. */}
          <div className="sticky top-0 z-10 h-[645px]">
            <div className="absolute left-1/2 top-0 w-full -translate-x-1/2">
              <div
                ref={heroContentRef}
                className="relative w-full will-change-transform"
              >
                <div className="absolute left-1/2 top-[153px] w-[1200px] -translate-x-1/2 text-center max-[1000px]:w-[calc(100vw-32px)] max-[760px]:top-[118px]">
                <h1 className="mx-auto w-[740px] max-w-full text-[91px] font-medium leading-[118px] tracking-[-4.55px] text-[#fbfafc] max-[1000px]:text-[68px] max-[1000px]:leading-[1.1] max-[760px]:text-[48px]">
                  <span className="font-['Baskerville'] font-normal italic tracking-normal">
                    Digital
                  </span>{" "}
                  <span>Execution,</span>
                  <br />
                  <span>built for scale.</span>
                </h1>

                <p className="mx-auto mt-[17px] w-[568px] max-w-full text-[28px] font-medium leading-[42px] tracking-[-0.56px] text-[#999] max-[760px]:text-[18px] max-[760px]:leading-[27px]">
                  Move beyond fragmented vendors with integrated, growth-driven
                  digital solutions.
                </p>

                <div className="mt-[29px] flex justify-center gap-[24px] max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-[12px]">
                  <a
                    href="/contact"
                    className="inline-flex h-[68px] w-[329px] items-center justify-center rounded-full bg-[#018d87] text-[21px] font-medium tracking-[-0.42px] text-white transition-all duration-300 hover:bg-[#00a69f] hover:shadow-[0_0_28px_rgba(1,141,135,0.28)] max-[760px]:h-[58px] max-[760px]:w-full max-[760px]:max-w-[329px] max-[760px]:text-[17px]"
                  >
                    Start Your Digital Journey
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex h-[68px] w-[233px] items-center justify-center rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] text-[21px] font-medium tracking-[-0.42px] text-[#fbfafc] backdrop-blur-[5px] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035] max-[760px]:h-[58px] max-[760px]:w-full max-[760px]:max-w-[233px] max-[760px]:text-[17px]"
                  >
                    Schedule a Call
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video rises through the hero as the page scrolls. */}
          <div
            className="absolute left-1/2 top-[645px] z-20 h-[667px] w-full -translate-x-1/2 overflow-visible"
          >
            <div
              ref={heroVideoStageRef}
              className="relative h-full w-full will-change-transform"
            >
              <div className="absolute left-1/2 top-0 h-[603px] w-[1792px] -translate-x-1/2 overflow-hidden rounded-[48px] bg-transparent">
              <div className="absolute left-1/2 top-[-129px] h-[861px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-[48px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-black/[0.06]" />

                <img
                  src={logo}
                  alt="Dignifyd"
                  className="pointer-events-none absolute left-1/2 top-1/2 w-[437px] max-w-[55%] -translate-x-1/2 -translate-y-1/2 brightness-0 invert"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TRUSTED BRANDS
        ========================================================= */}
        <BrandRail />

        {/* =========================================================
            APPROACH
        ========================================================= */}
        <section className="h-[917px] bg-black pt-[64px]">
          <div className="mx-auto h-[789px] w-[1200px] max-w-[calc(100vw-32px)] rounded-[50px] bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]">
            <div className="mx-auto w-[1104px] max-w-[calc(100%-96px)] pt-[64px] text-center max-[760px]:max-w-[calc(100%-40px)]">
              <Eyebrow>Our Approach</Eyebrow>

              <h2 className="mt-[8px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[40px]">
                Digital Growth,
                <br />
                <span className="font-['Baskerville'] font-normal italic tracking-normal">
                  executed with clarity.
                </span>
              </h2>

              <p className="mt-[20px] text-[22px] font-medium leading-[27px] tracking-[-0.44px] text-[#999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">
                A structured process built for scalable digital outcomes.
              </p>

              <div className="mt-[65px] grid grid-cols-3 max-[760px]:grid-cols-1 max-[760px]:gap-[32px]">
                {approach.map((item) => (
                  <article
                    key={item.title}
                    className="flex min-h-[197px] flex-col items-center text-center"
                  >
                    <div className="flex h-[72px] w-[72px] items-center justify-center text-white">
                      {item.icon}
                    </div>

                    <h3 className="mt-[24px] text-[21px] font-medium leading-[35px] tracking-[-0.42px]">
                      {item.title}
                    </h3>

                    <p className="mt-[11px] max-w-[315px] text-[14px] leading-[27px] text-[#999]">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-[64px] inline-flex h-[68px] w-[316px] items-center justify-center rounded-full bg-[#018d87] text-[18px] font-medium text-white transition-all duration-300 hover:bg-[#00a69f] max-[760px]:mt-[36px] max-[760px]:w-full max-[760px]:max-w-[316px]"
              >
                Schedule a Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORK GALLERY
        ========================================================= */}
        <section className="relative h-[1028px] overflow-hidden bg-[#0a0a0a]">
          <WorkRail
            images={galleryRowOne}
            direction={-1}
            initialX={0}
            top={25}
          />

          <WorkRail
            images={galleryRowTwo}
            direction={1}
            initialX={-3728}
            top={302}
          />
        </section>

        {/* =========================================================
            VALUE
        ========================================================= */}
        <section className="bg-black px-[24px] pb-[116px] pt-[72px]">
          <div className="mx-auto w-[1200px] max-w-full">
            <div className="text-center">
              <Eyebrow>Value</Eyebrow>

              <h2 className="mt-[20px] text-[70px] font-medium leading-[1.05] tracking-[-3.5px] max-[1000px]:text-[54px] max-[760px]:text-[38px]">
                Agile, precise{" "}
                <span className="font-['Baskerville'] font-normal italic tracking-normal">
                  &amp; scalable.
                </span>
              </h2>

              <p className="mx-auto mt-[22px] max-w-[980px] text-[22px] leading-[32px] text-[#999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">
                Dignifyd Digital replaces fragmented vendors with a unified
                digital partner, delivering consistent, performance-driven
                outcomes through structured engagement models.
              </p>
            </div>

            <div className="mt-[58px] grid grid-cols-[600px_1fr] items-start gap-[48px] max-[1100px]:grid-cols-1">
              {/* CEO TILE */}
              <article className="grid h-[320px] w-[600px] max-w-full grid-cols-[58%_42%] overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d] max-[760px]:h-auto max-[760px]:grid-cols-1">
                <div className="flex flex-col justify-end p-[26px]">
                  <p className="text-[14px] leading-[22px] text-white">
                    “At Dignifyd Digital, we believe digital success is built
                    on clarity, creativity, and trust. Our focus is simple—
                    create meaningful digital solutions that help brands grow
                    with purpose, impact, and integrity. Every project we take
                    on is a partnership, not just a service.”
                  </p>

                  <p className="mt-[16px] text-[14px] font-medium text-white">
                    Paavan Ahuja
                  </p>

                  <p className="text-[12px] leading-[18px] text-[#999]">
                    CEO, Dignifyd Group
                  </p>
                </div>

                <div className="relative min-h-[320px] overflow-hidden bg-[#131313] max-[760px]:h-[260px] max-[760px]:min-h-0">
                  <img
                    src={portrait}
                    alt="Paavan Ahuja"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </article>

              <div className="flex flex-col justify-center gap-[34px] py-[18px]">
                {[
                  [
                    "Scalable Execution Requests",
                    "Prioritised workstreams executed through structured queues and delivery ownership.",
                  ],
                  [
                    "Governed Workflows",
                    "Clear visibility across active, ongoing, and completed initiatives with defined accountability.",
                  ],
                  [
                    "Flexible Engagement Model",
                    "Engagements designed to adapt to business priorities, scale, and timelines.",
                  ],
                ].map(([title, copy]) => (
                  <article key={title}>
                    <h3 className="text-[21px] font-medium tracking-[-0.5px]">
                      {title}
                    </h3>

                    <p className="mt-[8px] max-w-[310px] text-[14px] leading-[22px] text-[#999]">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CAPABILITIES
        ========================================================= */}
        <section className="bg-[#0a0a0a] px-[24px] pb-[100px] pt-[40px]">
          <div className="mx-auto w-[1200px] max-w-full rounded-[50px] border border-white/10 bg-[#0d0d0d] px-[48px] py-[64px] max-[760px]:rounded-[28px] max-[760px]:px-[20px]">
            <div className="text-center">
              <Eyebrow>Capabilities</Eyebrow>

              <h2 className="mt-[18px] text-[70px] font-medium leading-[1.1] tracking-[-3.5px] max-[1000px]:text-[54px] max-[760px]:text-[38px]">
                Why leading brands{" "}
                <span className="font-['Baskerville'] font-normal italic tracking-normal">
                  trust us.
                </span>
              </h2>

              <p className="mx-auto mt-[16px] max-w-[740px] text-[18px] leading-[28px] text-[#999]">
                Once you partner with Dignifyd, execution becomes predictable,
                scalable, and aligned.
              </p>
            </div>

            <div className="mt-[54px] grid grid-cols-3 gap-x-[8px] gap-y-[40px] max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {capabilities.map(([title, copy], index) => (
                <article
                  key={title}
                  className="flex flex-col items-center rounded-[24px] px-[20px] py-[12px] text-center"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center text-white">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/20 text-cyan-300">
                      <span className="text-[16px] font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-[18px] text-[21px] font-medium leading-[35px]">
                    {title}
                  </h3>

                  <p className="mx-auto mt-[8px] max-w-[275px] text-[14px] leading-[22px] text-[#999]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-[42px] flex justify-center">
              <a
                href="/about"
                className="inline-flex h-[68px] w-[116px] items-center justify-center rounded-full bg-[#018d87] px-[18px] text-[17px] font-medium text-white transition-all duration-300 hover:bg-[#00a69f]"
              >
                About Us
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section className="bg-black pb-[72px] pt-[92px]">
          <div className="mx-auto w-[1200px] max-w-[calc(100vw-32px)] text-center">
            <Eyebrow>Services</Eyebrow>

            <h2 className="mt-[18px] text-[70px] font-medium leading-[1.08] tracking-[-3.5px] max-[1000px]:text-[54px] max-[760px]:text-[38px]">
              All your digital{" "}
              <span className="font-['Baskerville'] font-normal italic tracking-normal">
                needs.
              </span>
            </h2>

            <p className="mx-auto mt-[18px] max-w-[760px] text-[18px] leading-[28px] text-[#999]">
              Modern businesses need more than isolated solutions. We deliver
              integrated digital services that align design, technology, and
              growth under one strategic partner.
            </p>
          </div>

          <ServiceMarquee />

          <div className="mt-[38px] flex justify-center">
            <a
              href="/contact"
              className="inline-flex h-[68px] w-[194px] items-center justify-center rounded-full bg-[#018d87] text-[18px] font-medium text-white transition-all duration-300 hover:bg-[#00a69f]"
            >
              Book a call
            </a>
          </div>
        </section>

        {/* =========================================================
            CTA + FOOTER
        ========================================================= */}
        <SiteCTA />
        <SiteFooter />
      </main>
    </div>
  );
}