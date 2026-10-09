import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

import heroVideo from "../../assets/hero-video.mp4";
import heroLogo from "../../assets/dignifyd logo.svg";
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
import gallery6 from "../../assets/gallery-06.svg";
import gallery7 from "../../assets/gallery-07.svg";
import gallery8 from "../../assets/gallery-08.jpeg";
import gallery9 from "../../assets/gallery-09.jpeg";
import gallery10 from "../../assets/gallery-10.jpeg";
import gallery11 from "../../assets/gallery-11.jpeg";
import gallery12 from "../../assets/gallery-12.jpeg";

import workstreamsIcon from "../../assets/capabilities/workstreams.svg";
import fastDeliveryIcon from "../../assets/capabilities/fast-delivery.svg";
import predictablePricingIcon from "../../assets/capabilities/predictable-pricing.svg";
import provenExpertiseIcon from "../../assets/capabilities/proven-expertise.svg";
import iterateIcon from "../../assets/capabilities/iterate.svg";
import customSolutionsIcon from "../../assets/capabilities/custom-solutions.svg";

const galleryRowOne = [gallery1, gallery2, gallery3, gallery4];
const galleryRowTwo = [gallery5, gallery6, gallery7, gallery8];
const galleryRowThree = [gallery9, gallery10, gallery11, gallery12];

const approach = [
  {
    title: "Discover",
    copy: "We align on goals, scope, and success metrics before execution.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fbfafc"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    title: "Execute",
    copy: "Our teams design, build, and deploy with speed and precision.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fbfafc"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <circle cx="10" cy="12" r="0.8" fill="#00bdb5" />
        <circle cx="12" cy="12" r="0.8" fill="#00bdb5" />
        <circle cx="14" cy="12" r="0.8" fill="#00bdb5" />
      </svg>
    ),
  },
  {
    title: "Optimize",
    copy: "We refine continuously using performance data and feedback loops.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fbfafc"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: "Workstreams",
    copy: "All initiatives tracked through structured queues with clear ownership.",
    icon: workstreamsIcon,
  },
  {
    title: "Fast Delivery",
    copy: "Agile execution powered by prioritisation, sprints, and delivery benchmarks.",
    icon: fastDeliveryIcon,
  },
  {
    title: "Predictable Pricing",
    copy: "Transparent scope, clear commercials, and outcome-driven planning.",
    icon: predictablePricingIcon,
  },
  {
    title: "Proven Expertise",
    copy: "Experience across brands, sectors, and high-impact digital initiatives.",
    icon: provenExpertiseIcon,
  },
  {
    title: "Iterate",
    copy: "Continuous refinement guided by feedback, data, and performance insights.",
    icon: iterateIcon,
  },
  {
    title: "Custom Solutions",
    copy: "Custom strategies and executions aligned to your business goals.",
    icon: customSolutionsIcon,
  },
];

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function ApproachCard({ item, index }) {
  const [ref, visible] = useInView();

  return (
    <article
      ref={ref}
      className={`flex min-h-[197px] flex-col items-center text-center transition-[opacity,transform] duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-[18px] opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div
        className={`flex h-[72px] w-[72px] items-center justify-center ${
          visible
            ? "animate-[approachIconIn_900ms_cubic-bezier(.22,.61,.36,1)_both]"
            : ""
        }`}
      >
        {item.icon}
      </div>

      <h3 className="mt-[24px] text-[21px] font-medium leading-[35px] tracking-[-0.42px]">
        {item.title}
      </h3>

      <p className="mt-[11px] max-w-[315px] text-[14px] leading-[27px] text-[#999]">
        {item.copy}
      </p>
    </article>
  );
}

function useMarquee({
  speed = 0.04,
  direction = -1,
  initialX = 0,
  cycle = 1200,
  scrollBoost = 0,
  measureCycle = false,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let previous = performance.now();
    let x = initialX;
    let previousScroll = window.scrollY;

    const tick = (time) => {
      if (reduceMotion) {
        if (ref.current) ref.current.style.transform = `translate3d(${initialX}px,0,0)`;
        return;
      }
      const delta = Math.min(time - previous, 32);
      previous = time;

      const scrollDelta = window.scrollY - previousScroll;
      previousScroll = window.scrollY;
      const cycleWidth = measureCycle
        ? ref.current?.children[4]?.offsetLeft || cycle
        : cycle;

      x += direction * speed * delta;
      x += direction * scrollDelta * scrollBoost;

      if (direction < 0) {
        while (x <= -cycleWidth) x += cycleWidth;
      }

      if (direction > 0) {
        while (x >= 0) x -= cycleWidth;
      }

      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px,0,0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [cycle, direction, initialX, measureCycle, scrollBoost, speed]);

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
    direction: 1,
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
    <section className="h-[215px] overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto flex h-full w-[1200px] max-w-[calc(100vw-32px)] flex-col items-center">
        <p className="mt-[1px] text-center text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-[#999]">
          Trusted by global brands across lifestyle, SaaS, fintech &amp;
          enterprise
        </p>

        <div className="relative mt-[49.41px] h-[55px] w-full overflow-hidden">
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
                    style={{
                      width: `${item.width}px`,
                    }}
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

function WorkRail({ images, initialX, top }) {
  const [revealRef, visible] = useInView();

  const trackRef = useMarquee({
    speed: 0.075,
    direction: -1,
    initialX,
    cycle: 1864,
    scrollBoost: 0.22,
    measureCycle: true,
  });

  const repeated = Array.from(
    { length: 5 },
    () => images,
  ).flat();

  return (
    <div
      ref={revealRef}
      className={`absolute left-1/2 w-[1920px] -translate-x-1/2 transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ top }}
    >
      <div className="relative h-[424px] overflow-visible">
        <div className="absolute left-[55.75px] top-[2.16px] h-[300px] w-[1792px] origin-top-left rotate-[-3.98deg]">
          <div
            ref={trackRef}
            className="flex h-[300px] w-max items-center gap-[8px]"
          >
            {repeated.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="h-[280px] w-[458px] shrink-0 overflow-hidden rounded-[24px] max-[760px]:h-[220px] max-[760px]:w-[84vw] max-[760px]:rounded-[20px]"
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
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
            style={{
              width: `${width}px`,
            }}
            className="flex h-[78px] shrink-0 items-center rounded-full border border-white/10 bg-[#0d0d0d] px-[24px] text-[19px] font-medium tracking-[-0.38px] text-[#fbfafc] no-underline transition-all duration-200 hover:-translate-y-[2px] hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="mr-[10px] text-[20px] text-cyan-300">
              +
            </span>

            <span className="whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>
    ));

  return (
    <div className="relative mx-auto mt-[48px] w-[1072px] max-w-full overflow-hidden">
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
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0a0a0a] font-['Inter',sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        {/* =========================================================
            HERO + VIDEO
        ========================================================= */}

        <section
          className="relative h-[1351px] bg-[#0c0c0c] max-[1100px]:h-[1397px] max-[800px]:h-[1078px] max-[760px]:h-[1029px]"
        >
          <div className="sticky top-0 z-10 h-[645px]">
            <div className="absolute left-1/2 top-0 w-full -translate-x-1/2">
              <div
                className="relative w-full"
              >
                <div className="absolute left-1/2 top-[153px] w-[1200px] -translate-x-1/2 text-center max-[1100px]:top-[96px] max-[1000px]:w-[calc(100vw-32px)] max-[800px]:top-[120px] max-[800px]:w-[calc(100%-48px)] max-[760px]:top-[85px]">
                  <h1 className="mx-auto h-[229px] w-[740px] max-w-full text-[91px] font-medium leading-[118px] tracking-[-4.55px] text-[#fbfafc] max-[1100px]:h-auto max-[1100px]:w-[658px] max-[1100px]:text-[80px] max-[1100px]:leading-[1.1] max-[1000px]:tracking-[-4px] max-[800px]:w-full max-[800px]:text-[68px] max-[800px]:leading-[1.08] max-[800px]:tracking-[-3.4px] max-[760px]:max-w-[220px] max-[760px]:text-[42px] max-[760px]:leading-[2] max-[760px]:tracking-[-2.1px]">
                    <span className="font-['Baskerville'] font-normal italic tracking-normal">
                      Digital
                    </span><span className="font-['Instrument_Serif'] font-normal not-italic tracking-normal"> </span>
                    <br className="hidden max-[1100px]:inline max-[800px]:hidden" />
                    <span>Execution,</span>
                    <br />
                    <span>built for scale.</span>
                  </h1>

                  <p className="mx-auto mt-[17px] w-[568px] max-w-full text-[28px] font-medium leading-[42px] tracking-[-0.56px] text-[#999] max-[1100px]:mt-[55px] max-[1100px]:text-[18px] max-[1100px]:leading-[27px] max-[800px]:mt-[28px] max-[760px]:mt-[28px] max-[760px]:max-w-[220px]">
                    Move beyond fragmented vendors with integrated,
                    growth-driven digital solutions.
                  </p>

                  <div className="mt-[29px] flex justify-center gap-[24px] max-[1100px]:gap-[12px] max-[800px]:mt-[18px] max-[760px]:mt-[8px]">
                    <a
                      href="/contact"
                      className="inline-flex h-[68px] w-[329px] items-center justify-center rounded-full bg-[#018d87] text-[21px] font-medium tracking-[-0.42px] text-white transition-all duration-300 hover:bg-[#00a69f] hover:shadow-[0_0_28px_rgba(1,141,135,0.28)] max-[1100px]:h-[38px] max-[1100px]:w-auto max-[1100px]:px-[16px] max-[1100px]:text-[12px] max-[1100px]:tracking-normal"
                    >
                      <span className="max-[1100px]:hidden">Start Your Digital Journey</span>
                      <span className="hidden max-[1100px]:inline">Get Started</span>
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex h-[68px] w-[233px] items-center justify-center rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] text-[21px] font-medium tracking-[-0.42px] text-[#fbfafc] backdrop-blur-[5px] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035] max-[1100px]:h-[38px] max-[1100px]:w-auto max-[1100px]:px-[16px] max-[1100px]:text-[12px] max-[1100px]:tracking-normal"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[645px] z-20 h-[667px] w-full -translate-x-1/2 overflow-visible max-[1200px]:top-[605px] max-[800px]:top-[491px] max-[760px]:top-[689px] max-[760px]:h-[300px]">
            <div
              className="relative h-full w-full"
            >
              <div className="absolute left-1/2 top-0 h-[603px] w-[1792px] -translate-x-1/2 overflow-hidden rounded-[48px] bg-transparent max-[1200px]:h-auto max-[1200px]:w-[calc(100%-64px)] max-[1200px]:aspect-[1200/861] max-[1200px]:rounded-[32px] max-[800px]:w-[calc(100%-48px)] max-[760px]:rounded-[24px]">
                <div className="absolute left-1/2 top-[-129.01px] h-[861.02px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-[48px] max-[1200px]:top-0 max-[1200px]:h-full max-[1200px]:w-full max-[1200px]:rounded-[32px] max-[800px]:rounded-[24px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                  >
                    <source
                      src={heroVideo}
                      type="video/mp4"
                    />
                  </video>

                  <div className="pointer-events-none absolute left-[382px] top-[373.01px] h-[115px] w-[437px]">
                    <img
                      src={heroLogo}
                      alt="Dignifyd Digital"
                      className="block h-[115px] w-[437px] object-contain"
                    />
                  </div>
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

        <section className="h-[917px] min-h-0 bg-black px-4 pb-16 pt-[64px] max-[1100px]:h-auto max-[1100px]:pb-[98px] max-[800px]:pb-[64px] max-[760px]:min-h-0 max-[760px]:px-4">
          <div className="mx-auto h-[789px] min-h-0 w-[1200px] max-w-full rounded-[50px] border-t border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] max-[1100px]:h-auto max-[760px]:min-h-0 max-[760px]:rounded-[28px] max-[760px]:pb-12">
            <div className="mx-auto w-[1104px] max-w-[calc(100%-96px)] pt-[64px] text-center max-[760px]:max-w-[calc(100%-40px)] max-[760px]:pt-10">
              <Eyebrow>
                Our Approach
              </Eyebrow>

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

              <div className="mt-[65px] grid grid-cols-3 max-[1100px]:mt-[14px] max-[1100px]:grid-cols-1 max-[1100px]:gap-y-[36px] max-[800px]:mt-[32px] max-[760px]:mt-[202px] max-[760px]:gap-y-[58px]">
                {approach.map((item, index) => (
                  <ApproachCard
                    key={item.title}
                    item={item}
                    index={index}
                  />
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

        <section className="relative h-[1028px] overflow-hidden bg-[#0a0a0a] max-[800px]:h-[947px] max-[760px]:h-[927px]">
          <WorkRail
            images={galleryRowOne}
            initialX={0}
            top={2.16}
          />

          <WorkRail
            images={galleryRowTwo}
            initialX={-932}
            top={279.16}
          />

          <WorkRail
            images={galleryRowThree}
            initialX={-466}
            top={556.16}
          />
        </section>

        {/* =========================================================
            VALUE
        ========================================================= */}

        <section className="h-[932px] bg-black px-[24px] pb-[116px] pt-[72px] max-[1100px]:h-auto max-[1100px]:pb-[97px] max-[800px]:pb-[269px] max-[760px]:pb-[71px]">
          <div className="mx-auto w-[1200px] max-w-full">
            <div className="text-center">
              <Eyebrow>
                Value
              </Eyebrow>

              <h2 className="mx-auto mt-[20px] h-[91px] w-[740px] max-w-full text-[70px] font-medium leading-[88px] tracking-[-3.5px] max-[1000px]:h-auto max-[1000px]:text-[54px] max-[760px]:text-[38px]">
                Agile, precise{" "}
                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">
                  &amp;
                </span>{" "}
                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">
                  scalable.
                </span>
              </h2>

              <p className="mx-auto mt-[22px] h-[66px] w-[1200px] max-w-full text-[22px] font-medium leading-[33px] tracking-[-0.44px] text-[#999] max-[760px]:h-auto max-[760px]:text-[16px] max-[760px]:leading-[24px]">
                Dignifyd Digital replaces fragmented vendors with a unified
                digital partner, delivering consistent, performance-driven
                outcomes through structured engagement models.
              </p>
            </div>

            <div className="mt-[58px] grid grid-cols-[741px_395px] items-start gap-[64px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[34px] max-[760px]:mt-[75px]">
              <article className="mt-[34.39px] grid h-[349.2px] w-[741px] max-w-full grid-cols-[58%_42%] overflow-hidden rounded-[24px] bg-[#0d0d0d] max-[1100px]:mt-0 max-[760px]:order-2 max-[760px]:h-auto max-[760px]:grid-cols-1">
                <div className="flex flex-col justify-end p-[26px] max-[760px]:order-2 max-[760px]:p-[24px]">
                  <p className="text-[14px] leading-[22px] text-white">
                    &ldquo;At Dignifyd Digital, we believe digital success is
                    built on clarity, creativity, and trust. Our focus is
                    simple&mdash;create meaningful digital solutions that help
                    brands grow with purpose, impact, and integrity. Every
                    project we take on is a partnership, not just a service.
                    &rdquo;
                  </p>

                  <p className="mt-[16px] text-[14px] font-medium text-white">
                    Paavan Ahuja
                  </p>

                  <p className="text-[12px] leading-[18px] text-[#999]">
                    CEO, Dignifyd Group
                  </p>
                </div>

                <div className="relative min-h-[349.2px] overflow-hidden bg-[#131313] max-[760px]:order-1 max-[760px]:h-[350px] max-[760px]:min-h-0">
                  <img
                    src={portrait}
                    alt="Paavan Ahuja"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </article>

              <div className="flex w-[395px] max-w-full flex-col justify-center gap-[34px] py-[18px] max-[1100px]:w-full max-[760px]:order-1 max-[760px]:gap-[72px]">
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
                    <h3 className="h-[35px] text-[28px] font-medium leading-[35px] tracking-[-0.56px]">
                      {title}
                    </h3>

                    <p className="mt-[15px] h-auto w-[395px] max-w-full text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999]">
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

        <section className="h-[1141px] bg-black px-[24px] pb-0 pt-[64px] max-[1100px]:h-auto max-[1100px]:pb-[39px] max-[800px]:pb-[9px] max-[760px]:pb-[20px]">
          <div className="mx-auto h-[1077px] min-h-0 w-[1200px] max-w-full rounded-[50px] border-t border-white/10 bg-[#0d0d0d] px-[48px] pt-[64px] pb-[64px] max-[1100px]:h-auto max-[1100px]:pb-[28px] max-[760px]:rounded-[28px] max-[760px]:px-[20px]">
            <div className="text-center">
              <Eyebrow>
                Capabilities
              </Eyebrow>

              <h2 className="mt-[18px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[38px]">
                Why leading brands{" "}
                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">
                  trust us.
                </span>
              </h2>

              <p className="mx-auto mt-[16px] max-w-[740px] text-[18px] leading-[28px] text-[#999]">
                Once you partner with Dignifyd, execution becomes predictable,
                scalable, and aligned.
              </p>
            </div>

            <div className="mt-[54px] grid grid-cols-3 gap-x-[8px] gap-y-[40px] max-[1100px]:mt-[59px] max-[1100px]:grid-cols-1 max-[1100px]:gap-y-[119px] max-[800px]:mt-[26px] max-[800px]:gap-y-[109px] max-[760px]:mt-[70px] max-[760px]:gap-y-[98px]">
              {capabilities.map(
                ({
                  title,
                  copy,
                  icon,
                  }) => (
                  <article
                    key={title}
                    className="flex flex-col items-center rounded-[24px] px-[20px] py-[12px] text-center"
                  >
                    <div className="flex h-[72px] w-[72px] items-center justify-center overflow-visible">
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="h-[72px] w-[72px] object-contain transition-transform duration-300 hover:scale-[1.04]"
                      />
                    </div>

                    <h3 className="mt-[18px] text-[21px] font-medium leading-[35px]">
                      {title}
                    </h3>

                    <p className="mx-auto mt-[8px] max-w-[275px] text-[14px] leading-[22px] text-[#999]">
                      {copy}
                    </p>
                  </article>
                ),
              )}
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

        <section className="mx-auto h-[590px] w-[1436px] max-w-[calc(100vw-4px)] bg-[#0a0a0a] pb-[39px] pt-[92px] max-[1100px]:h-auto max-[1100px]:pb-[72px]">
          <div className="mx-auto w-[1200px] max-w-[calc(100vw-32px)] text-center">
            <Eyebrow>
              Services
            </Eyebrow>

            <h2 className="mx-auto mt-[18px] h-[91px] w-[651px] max-w-full text-[70px] font-medium leading-[88px] tracking-[-3.5px] max-[1000px]:h-auto max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[38px]">
              All your{" "}
              <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">
                digital
              </span>{" "}
              needs.
            </h2>

            <p className="mx-auto mt-[16px] h-[66px] w-[1200px] max-w-full text-[22px] font-medium leading-[33px] tracking-[-0.44px] text-[#999] max-[760px]:h-auto max-[760px]:text-[16px] max-[760px]:leading-[24px]">
              Modern businesses need more than isolated solutions. We deliver
              integrated digital services that align design, technology, and
              growth under one strategic partner.
            </p>
          </div>

          <ServiceMarquee />

         </section>

        {/* =========================================================
            CTA + FOOTER
        ========================================================= */}

        <SiteCTA />
      </main>

      <style>{`
        @keyframes approachIconIn {
          0% {
            transform: translateY(8px) scale(.82) rotate(-4deg);
            opacity: 0;
          }

          70% {
            transform: translateY(-1px) scale(1.04) rotate(0deg);
            opacity: 1;
          }

          100% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[approachIconIn"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}