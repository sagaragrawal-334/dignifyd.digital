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


/* =========================================================================

   GALLERY ROWS (4 cards per row, 442px wide + 24px gap = 466px per item)

   One full cycle = 4 * 466px = 1,864px

========================================================================= */

const galleryRowOne = [gallery1, gallery2, gallery3, gallery4];

const galleryRowTwo = [gallery5, gallery6, gallery7, gallery8];

const galleryRowThree = [gallery9, gallery10, gallery11, gallery12];


/* =========================================================================

   APPROACH ITEMS & ICONS

========================================================================= */

const approach = [

  {

    title: "Discover",

    copy: "We align on goals, scope, and success metrics before execution.",

    icon: (

      <svg

        width="44"

        height="44"

        viewBox="0 0 44 44"

        fill="none"

        xmlns="http://www.w3.org/2000/svg"

        aria-hidden="true"

        className="transition-transform duration-300 group-hover:scale-105"

      >

        <circle

          cx="20"

          cy="20"

          r="12"

          stroke="#FBFAFC"

          strokeWidth="2"

          strokeLinecap="round"

          strokeLinejoin="round"

        />

        <path

          d="M29 29L38 38"

          stroke="#00BDB5"

          strokeWidth="2.5"

          strokeLinecap="round"

          strokeLinejoin="round"

        />

        <path

          d="M15 15C16.5 13.5 18.5 12.8 20.5 13"

          stroke="rgba(251,250,252,0.45)"

          strokeWidth="1.5"

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

        width="44"

        height="44"

        viewBox="0 0 44 44"

        fill="none"

        xmlns="http://www.w3.org/2000/svg"

        aria-hidden="true"

        className="transition-transform duration-300 group-hover:scale-105"

      >

        <path

          d="M13 14L5 22L13 30"

          stroke="#FBFAFC"

          strokeWidth="2"

          strokeLinecap="round"

          strokeLinejoin="round"

        />

        <path

          d="M31 14L39 22L31 30"

          stroke="#FBFAFC"

          strokeWidth="2"

          strokeLinecap="round"

          strokeLinejoin="round"

        />

        <circle cx="18" cy="22" r="1.5" fill="#00BDB5" />

        <circle cx="22" cy="22" r="1.5" fill="#00BDB5" />

        <circle cx="26" cy="22" r="1.5" fill="#00BDB5" />

      </svg>

    ),

  },

  {

    title: "Optimize",

    copy: "We refine continuously using performance data and feedback loops.",

    icon: (

      <svg

        width="44"

        height="44"

        viewBox="0 0 44 44"

        fill="none"

        xmlns="http://www.w3.org/2000/svg"

        aria-hidden="true"

        className="transition-transform duration-300 group-hover:scale-105"

      >

        <polygon

          points="22,5 25.5,15.5 36.5,15.5 28,22.5 31,33 22,26.5 13,33 16,22.5 7.5,15.5 18.5,15.5"

          stroke="#FBFAFC"

          strokeWidth="1.8"

          strokeLinejoin="round"

          fill="none"

        />

        <path

          d="M26 28C28 32 33 35 38 35"

          stroke="#00BDB5"

          strokeWidth="2"

          strokeLinecap="round"

        />

        <path

          d="M29 33C32 36 35 38 40 38"

          stroke="rgba(0,189,181,0.4)"

          strokeWidth="1.5"

          strokeLinecap="round"

        />

      </svg>

    ),

  },

];


/* =========================================================================

   CAPABILITIES ITEMS

========================================================================= */

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


/* =========================================================================

   SERVICES PILL ICONS (Phosphor Regular 256x256 inline SVG)

========================================================================= */

const ServiceIcons = {

  Pen: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M227.31,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l123.31-123.3a16,16,0,0,0,0-22.64ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.31,64l24-24L216,84.69Z" />

    </svg>

  ),

  PaintBrush: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M216,24H72A24,24,0,0,0,48,48v88a48.05,48.05,0,0,0,48,48h8a24,24,0,0,1,24,24v8a24,24,0,0,0,48,0V48A24,24,0,0,0,216,24ZM64,48a8,8,0,0,1,8-8H200V96H64ZM96,168A32,32,0,0,1,64,136V112H200v32a8,8,0,0,1-8,8H128a40,40,0,0,0-32,16Zm64,48a8,8,0,0,1-16,0v-8a40,40,0,0,0-7.39-23A24,24,0,0,1,160,168Z" />

    </svg>

  ),

  MagicWand: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M221.66,90.34,165.66,34.34a8,8,0,0,0-11.32,0L34.34,154.34a8,8,0,0,0,0,11.32l56,56a8,8,0,0,0,11.32,0l120-120A8,8,0,0,0,221.66,90.34ZM95.66,210.34,45.66,160.34,144,62l50,50ZM192,24a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24ZM80,48a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H72A8,8,0,0,0,80,48ZM200,80a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V72A8,8,0,0,0,200,80Z" />

    </svg>

  ),

  Palette: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M128,24A104,104,0,0,0,24,128a103,103,0,0,0,34.42,77.34A39.6,39.6,0,0,0,86.29,216h18.37a47.4,47.4,0,0,0,47.34-47.34V168a8,8,0,0,1,8-8h16a56.06,56.06,0,0,0,56-56C232,60.65,185.35,24,128,24Zm88,80a40,40,0,0,1-40,40H160a24,24,0,0,0-24,24v.66A31.38,31.38,0,0,1,104.66,200H86.29a23.63,23.63,0,0,1-16.63-6.84A88,88,0,1,1,216,104ZM84,108a12,12,0,1,1,12-12A12,12,0,0,1,84,108Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,84Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,108Z" />

    </svg>

  ),

  Laptop: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M240,184H224V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V184H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,64H208V184H48ZM144,192H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z" />

    </svg>

  ),

  Camera: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.29,48h55.42l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z" />

    </svg>

  ),

  Pencil: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l123.32-123.3a16,16,0,0,0,0-22.64ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z" />

    </svg>

  ),

  Video: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M244.24,60a8,8,0,0,0-7.75.4l-44.49,27.81V80a24,24,0,0,0-24-24H32A24,24,0,0,0,8,80V176a24,24,0,0,0,24,24H168a24,24,0,0,0,24-24V167.79l44.49,27.81A8,8,0,0,0,248,189.19V66.81A8,8,0,0,0,244.24,60ZM176,176a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8Zm56,2.39-40-25V102.61l40-25Z" />

    </svg>

  ),

  ChartLine: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V172.69L90.34,121a8,8,0,0,1,11.32,0L136,155.31l66.34-66.35a8,8,0,0,1,11.32,11.32L141.66,172a8,8,0,0,1-11.32,0L96,137.66l-56,56V200H224A8,8,0,0,1,232,208Z" />

    </svg>

  ),

  InstagramLogo: () => (

    <svg width="26" height="26" viewBox="0 0 256 256" fill="currentColor">

      <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm60-88a12,12,0,1,1-12-12A12,12,0,0,1,188,72Z" />

    </svg>

  ),

};


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

      { threshold: 0.08 },

    );


    observer.observe(element);

    return () => observer.disconnect();

  }, []);


  return [ref, visible];

}


function Eyebrow({ children }) {

  return (

    <span className="inline-flex h-[40px] items-center rounded-full border border-white/10 bg-white/[0.025] px-[16px] text-[16px] font-medium leading-[20px] text-white backdrop-blur-[5px]">

      {children}

    </span>

  );

}


function ApproachCard({ item, index }) {

  const [ref, visible] = useInView();


  return (

    <article

      ref={ref}

      className={`group flex min-h-[197px] flex-col items-center text-center transition-[opacity,transform] duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"

        }`}

      style={{ transitionDelay: `${index * 120}ms` }}

    >

      <div

        className={`flex h-[72px] w-[72px] items-center justify-center ${visible

          ? "animate-[approachIconIn_900ms_cubic-bezier(.22,.61,.36,1)_both]"

          : ""

          }`}

      >

        {item.icon}

      </div>


      <h3 className="mt-[24px] text-[28px] font-medium leading-[1] tracking-[-0.02em] text-[#FBFAFC]">

        {item.title}

      </h3>


      <p className="mt-[11px] max-w-[315px] text-[14px] leading-[27px] text-[#999999]">

        {item.copy}

      </p>

    </article>

  );

}


/* =========================================================================

   GENERIC SEAMLESS MARQUEE HOOK

========================================================================= */

function useMarquee({

  speed = 0.025,

  direction = -1,

  initialX = 0,

  cycle = 0,

  copies = 6,

  scrollBoost = 0,

  isHoveredRef = null,

  hoverFactor = 0.5,

} = {}) {

  const ref = useRef(null);


  useEffect(() => {

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;

    let previous = performance.now();

    let currentCycle = cycle;

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


      const currentHover = isHoveredRef?.current ? hoverFactor : 1;

      const move = direction * speed * delta * currentHover;

      const boost = direction * scrollDelta * scrollBoost;


      x += move + boost;


      if (!currentCycle && ref.current) {

        currentCycle = ref.current.scrollWidth / copies;

      }


      const c = currentCycle || 1200;


      if (direction < 0) {

        while (x <= -c) x += c;

      } else {

        while (x >= 0) x -= c;

      }


      if (ref.current) {

        ref.current.style.transform = `translate3d(${x}px,0,0)`;

      }


      frame = requestAnimationFrame(tick);

    };


    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);

  }, [cycle, copies, direction, initialX, isHoveredRef, hoverFactor, scrollBoost, speed]);


  return ref;

}


/* =========================================================================

   BRAND RAIL

========================================================================= */

function BrandRail() {

  const trackRef = useMarquee({

    speed: 0.035,

    direction: 1,

    initialX: -1166 * 2,

    cycle: 1166,

    scrollBoost: 0.04,

  });


  const items = [

    { src: brand1, width: 79 },

    { src: brand2, width: 187 },

    { src: brand3, width: 172 },

    { src: brand4, width: 206 },

    { src: brand5, width: 202 },

  ];

  return (

    <div className="h-[189.41px] overflow-hidden bg-[#0a0a0a]">

      <div className="mx-auto flex h-full w-[1200px] max-w-[calc(100vw-32px)] flex-col items-center">

        <p className="mt-[1px] text-center text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-[#999999]">

          Trusted by global brands across lifestyle, SaaS, fintech &amp; enterprise

        </p>


        <div className="relative mt-[49.41px] h-[55px] w-full overflow-hidden">

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[180px] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[180px] bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />


          <div ref={trackRef} className="absolute left-0 top-0 flex w-max will-change-transform">

            {Array.from({ length: 8 }).map((_, copy) => (

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

    </div>

  );

}


/* =========================================================================

   WORK GALLERY (442px cards, 24px gap, 1864px cycle, 4deg skew perspective)

========================================================================= */

function WorkRail({ images, direction, initialOffset }) {

  // 4 items * (442px + 24px) = 1864px cycle

  const CYCLE_WIDTH = 1864;

  const initialX = direction < 0 ? -initialOffset : -CYCLE_WIDTH + initialOffset;


  const trackRef = useMarquee({

    speed: 0.038,

    direction,

    initialX,

    cycle: CYCLE_WIDTH,

    copies: 6,

    scrollBoost: 0.06,

  });


  const repeated = Array.from({ length: 6 }, () => images).flat();


  return (

    <div

      className="relative h-[300px] w-full overflow-hidden"

      style={{

        transform: "perspective(1200px) skewX(4deg) skewY(4deg)",

      }}

    >

      <div

        ref={trackRef}

        className="flex h-full w-max items-center gap-[24px] will-change-transform"

      >

        {repeated.map((image, index) => (

          <div

            key={`${image}-${index}`}

            className="h-[251px] w-[442px] shrink-0 overflow-hidden rounded-[24px] border-t border-white/10 bg-[#131313] transition-transform duration-300 hover:scale-[1.015] max-[760px]:h-[210px] max-[760px]:w-[80vw]"

          >

            <img

              src={image}

              alt=""

              loading="lazy"

              className="h-full w-full object-cover"

            />

          </div>

        ))}

      </div>

    </div>

  );

}


/* =========================================================================

   SERVICES MARQUEE

========================================================================= */

function ServiceMarquee() {

  const isHoveredRef = useRef(false);


  const firstRow = [

    { label: "Logos", icon: ServiceIcons.Pen },

    { label: "Creative Strategy", icon: ServiceIcons.MagicWand },

    { label: "Branding", icon: ServiceIcons.Palette },

    { label: "Website Design", icon: ServiceIcons.Laptop },

  ];


  const secondRow = [

    { label: "Influencer Marketing", icon: ServiceIcons.Camera },

    { label: "Copywriting", icon: ServiceIcons.Pencil },

    { label: "Video Editing", icon: ServiceIcons.Video },

    { label: "SEO, SEM", icon: ServiceIcons.ChartLine },

    { label: "Social Media", icon: ServiceIcons.InstagramLogo },

  ];


  const firstRef = useMarquee({

    speed: 0.03,

    direction: -1,

    initialX: 0,

    copies: 8,

    scrollBoost: 0.03,

    isHoveredRef,

    hoverFactor: 0.4,

  });


  const secondRef = useMarquee({

    speed: 0.03,

    direction: 1,

    initialX: -1300,

    copies: 8,

    scrollBoost: 0.03,

    isHoveredRef,

    hoverFactor: 0.4,

  });


  const renderRow = (items) =>

    Array.from({ length: 8 }).map((_, copy) => (

      <div

        key={copy}

        className="flex h-[78px] shrink-0 items-center gap-[24px] pr-[24px]"

      >

        {items.map(({ label, icon: IconComponent }) => (

          <a

            key={`${copy}-${label}`}

            href="/services"

            className="flex h-[78px] shrink-0 items-center gap-[12px] rounded-[24px] border-t border-white/10 bg-[#0d0d0d] px-[28px] text-[24px] font-medium tracking-[-0.48px] text-[#FBFAFC] no-underline transition-all duration-300 hover:-translate-y-[2px] hover:border-white/20 hover:bg-white/[0.04] max-[760px]:h-[64px] max-[760px]:px-[20px] max-[760px]:text-[18px]"

          >

            <span className="flex h-[26px] w-[26px] items-center justify-center text-[#FBFAFC]">

              <IconComponent />

            </span>

            <span className="whitespace-nowrap">{label}</span>

          </a>

        ))}

      </div>

    ));


  return (

    <div

      className="relative mx-auto mt-[48px] w-[1072px] max-w-full overflow-hidden"

      onMouseEnter={() => {

        isHoveredRef.current = true;

      }}

      onMouseLeave={() => {

        isHoveredRef.current = false;

      }}

    >

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[50px] bg-gradient-to-r from-[#0a0a0a] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[50px] bg-gradient-to-l from-[#0a0a0a] to-transparent" />


      <div className="relative h-[78px] overflow-hidden">

        <div ref={firstRef} className="absolute left-0 top-0 flex w-max will-change-transform">

          {renderRow(firstRow)}

        </div>

      </div>


      <div className="relative mt-[24px] h-[78px] overflow-hidden">

        <div ref={secondRef} className="absolute left-0 top-0 flex w-max will-change-transform">

          {renderRow(secondRow)}

        </div>

      </div>

    </div>

  );

}


/* =========================================================================

   MAIN HOME COMPONENT

========================================================================= */

export default function Home() {

  return (

    <div className="min-h-screen overflow-x-clip bg-[#0a0a0a] font-['Inter',sans-serif] text-[#fbfafc]">

      <Navbar />


      <main>

        {/* =========================================================
            HERO + VIDEO
        ========================================================= */}
        <section className="hero-scroll-section relative isolate bg-[#0a0a0a]">
          {/* The copy and the video panel have the same sticky height and release at the same scroll position. */}
          <div data-hero-copy className="hero-scroll-copy">
            <div className="absolute left-1/2 top-0 w-full -translate-x-1/2">
              <div className="relative w-full">
                <div className="absolute left-1/2 top-[153px] w-[1200px] -translate-x-1/2 text-center max-[1100px]:top-[96px] max-[1000px]:w-[calc(100vw-32px)] max-[800px]:top-[120px] max-[800px]:w-[calc(100%-48px)] max-[760px]:top-[76px] max-[430px]:top-[72px]">
                  <h1 className="mx-auto h-[229px] w-[740px] max-w-full text-[91px] font-medium leading-[118px] tracking-[-4.55px] text-[#fbfafc] max-[1100px]:h-auto max-[1100px]:w-[658px] max-[1100px]:text-[80px] max-[1100px]:leading-[1.1] max-[1000px]:tracking-[-4px] max-[800px]:w-full max-[800px]:text-[68px] max-[800px]:leading-[1.08] max-[800px]:tracking-[-3.4px] max-[760px]:max-w-[300px] max-[760px]:text-[42px] max-[760px]:leading-[1.2] max-[760px]:tracking-[-2.1px] max-[374px]:max-w-[260px] max-[374px]:text-[36px] max-[374px]:leading-[1.18] max-[374px]:tracking-[-1.8px]">
                    <span className="font-['Baskerville'] font-normal italic tracking-normal">Digital</span>{" "}
                    <br className="hidden max-[1100px]:inline max-[800px]:hidden" />
                    <span>Execution,</span>
                    <br />
                    <span>built for scale.</span>
                  </h1>

                  <p className="mx-auto mt-[17px] w-[568px] max-w-full text-[28px] font-medium leading-[42px] tracking-[-0.56px] text-[#999999] max-[1100px]:mt-[55px] max-[1100px]:text-[18px] max-[1100px]:leading-[27px] max-[800px]:mt-[28px] max-[760px]:mt-[22px] max-[760px]:max-w-[280px] max-[760px]:text-[16px] max-[760px]:leading-[24px] max-[374px]:max-w-[240px] max-[374px]:text-[15px]">
                    Move beyond fragmented vendors with integrated,
                    growth-driven digital solutions.
                  </p>

                  <div className="mt-[29px] flex justify-center gap-[24px] max-[1100px]:gap-[12px] max-[800px]:mt-[18px] max-[760px]:mt-[18px] max-[479px]:flex-col max-[479px]:items-center max-[479px]:gap-[10px] max-[479px]:px-[20px]">
                    <a
                      href="/contact"
                      className="inline-flex h-[68px] w-[343px] items-center justify-center rounded-full bg-[#018d87] text-[21px] font-medium tracking-[-0.42px] text-white transition-all duration-300 hover:bg-[#00a69f] hover:shadow-[0_0_28px_rgba(1,141,135,0.28)] max-[1100px]:h-[48px] max-[1100px]:w-auto max-[1100px]:px-[24px] max-[1100px]:text-[14px] max-[1100px]:tracking-normal max-[479px]:w-full max-[479px]:max-w-[320px]"
                    >
                      <span className="max-[1100px]:hidden">Start Your Digital Journey</span>
                      <span className="hidden max-[1100px]:inline">Get Started</span>
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex h-[68px] w-[245px] items-center justify-center rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] text-[21px] font-medium tracking-[-0.42px] text-[#fbfafc] backdrop-blur-[5px] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035] max-[1100px]:h-[48px] max-[1100px]:w-auto max-[1100px]:px-[24px] max-[1100px]:text-[14px] max-[1100px]:tracking-normal max-[479px]:w-full max-[479px]:max-w-[320px]"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*
            The track stays in normal document flow. The video and Trusted Brands
            are connected together in this layer, moving as a single unit over the
            pinned hero text with consistent spacing and seamless transition into
            the following section.
          */}
          <div data-hero-video-track className="hero-scroll-track">
            <div data-hero-video-panel className="hero-scroll-panel">
              <div className="relative left-1/2 top-0 h-[603px] w-[1792px] -translate-x-1/2 overflow-hidden rounded-[48px] bg-[#0a0a0a] max-[1200px]:h-auto max-[1200px]:w-[calc(100%-64px)] max-[1200px]:aspect-[1200/861] max-[1200px]:rounded-[32px] max-[800px]:w-[calc(100%-48px)] max-[760px]:h-[340px] max-[760px]:aspect-auto max-[760px]:rounded-[24px]">
                <div className="absolute left-1/2 top-[-129.01px] h-[861.02px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-[48px] bg-[#0a0a0a] max-[1200px]:top-0 max-[1200px]:h-full max-[1200px]:w-full max-[1200px]:rounded-[32px] max-[800px]:rounded-[24px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                    aria-label="Dignifyd Digital showreel"
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <img
                      src={heroLogo}
                      alt="Dignifyd Digital"
                      className="block h-auto w-[437px] max-w-[75%] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>
              </div>

              {/* Trusted Brands connected directly below the hero video with consistent spacing */}
              <div className="mt-[42px] max-[1200px]:mt-[32px] max-[760px]:mt-[24px]">
                <BrandRail />
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================

            APPROACH

        ========================================================= */}

        <section className="min-h-0 bg-black px-4 pb-16 pt-[64px] min-[1101px]:mt-[64.59px] max-[1100px]:h-auto max-[1100px]:pb-[98px] max-[800px]:pb-[64px] max-[760px]:min-h-0 max-[760px]:px-4">

          <div className="mx-auto h-[789px] min-h-0 w-[1200px] max-w-full rounded-[50px] border-t border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] max-[1100px]:h-auto max-[760px]:min-h-0 max-[760px]:rounded-[28px] max-[760px]:pb-12">

            <div className="mx-auto w-[1104px] max-w-[calc(100%-96px)] pt-[64px] text-center max-[760px]:max-w-[calc(100%-40px)] max-[760px]:pt-10">

              <Eyebrow>Our Approach</Eyebrow>


              <h2 className="mt-[8px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[40px]">

                Digital Growth,

                <br />

                <span className="font-['Baskerville'] font-normal italic tracking-normal">

                  executed with clarity.

                </span>

              </h2>


              <p className="mt-[20px] text-[22px] font-medium leading-[27px] tracking-[-0.44px] text-[#999999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">

                A structured process built for scalable digital outcomes.

              </p>


              <div className="mt-[65px] grid grid-cols-3 max-[1100px]:mt-[14px] max-[1100px]:grid-cols-1 max-[1100px]:gap-y-[36px] max-[800px]:mt-[32px] max-[760px]:mt-[48px] max-[760px]:gap-y-[48px]">

                {approach.map((item, index) => (

                  <ApproachCard key={item.title} item={item} index={index} />

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

            WORK GALLERY (Skewed Perspective Marquee)

        ========================================================= */}

        <section className="relative overflow-hidden bg-[#0a0a0a] pb-[80px] pt-[48px] min-[1101px]:mt-[32px]">

          {/* Subtle edge fades for seamless blending */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[120px] bg-gradient-to-r from-[#0a0a0a] to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[120px] bg-gradient-to-l from-[#0a0a0a] to-transparent" />


          {/* Row 1: Leftward movement */}

          <WorkRail

            images={galleryRowOne}

            direction={-1}

            initialOffset={0}

          />


          {/* Row 2: Rightward movement */}

          <div className="mt-[12px]">

            <WorkRail

              images={galleryRowTwo}

              direction={1}

              initialOffset={466}

            />

          </div>


          {/* Row 3: Leftward movement */}

          <div className="mt-[12px]">

            <WorkRail

              images={galleryRowThree}

              direction={-1}

              initialOffset={233}

            />

          </div>

        </section>


        {/* =========================================================

            VALUE SECTION (Agile, precise & scalable)

        ========================================================= */}

        <section className="relative bg-[#0a0a0a] px-[32px] pb-[80px] pt-[128px] max-[1100px]:pt-[96px] max-[760px]:px-[20px] max-[760px]:pb-[48px] max-[760px]:pt-[80px]">

          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[64px] max-[1100px]:gap-[48px]">

            {/* Header: Eyebrow + Heading + Subtitle */}

            <div className="flex flex-col items-center gap-[16px] text-center">

              <Eyebrow>Value</Eyebrow>


              <h2 className="mt-[4px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[38px] max-[760px]:leading-[1.15]">

                Agile, precise{" "}

                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">

                  &amp;

                </span>{" "}

                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">

                  scalable

                </span>

                <span className="font-['Instrument_Serif'] font-normal italic leading-[91px] tracking-normal">

                  .

                </span>

              </h2>


              <p className="max-w-[1200px] text-[22px] font-medium leading-[33px] tracking-[-0.44px] text-[#999999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">

                Dignifyd Digital replaces fragmented vendors with a unified

                digital partner, delivering consistent, performance-driven

                outcomes through structured engagement models.

              </p>

            </div>


            {/* Testimonial card + Benefits */}

            <div className="flex w-full items-center justify-between gap-[64px] max-[1100px]:flex-col-reverse max-[1100px]:items-stretch max-[1100px]:gap-[48px]">

              {/* Testimonial Quote Card */}

              <article className="relative flex h-[349.19px] min-h-[349.19px] flex-1 max-w-[741px] items-center overflow-hidden rounded-[24px] border-t border-white/10 bg-[#0d0d0d] px-[48px] py-[64px] max-[1100px]:max-w-full max-[1100px]:h-auto max-[1100px]:min-h-[349.19px] max-[760px]:flex-col-reverse max-[760px]:h-auto max-[760px]:min-h-0 max-[760px]:p-[24px]">

                {/* Content: 375.45px width matching Figma */}

                <div className="relative z-10 flex w-[375.45px] max-w-full flex-col justify-between gap-[24px] max-[760px]:w-full">

                  <p className="w-[335px] max-w-full text-[18px] font-medium leading-[26px] tracking-[-0.36px] text-[#999999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">

                    &ldquo;At Dignifyd Digital, we believe digital success is built on clarity, creativity, and trust. Our focus is simple&mdash;create meaningful digital solutions that help brands grow with purpose, impact, and integrity. Every project we take on is a partnership, not just a service.&rdquo;

                  </p>


                  {/* Author block matching Figma: 18px name, 12px role, 4px gap */}

                  <div className="flex flex-col gap-[4px]">

                    <p className="text-[18px] font-medium leading-[20px] tracking-[-0.36px] text-[#FCFCFA]">

                      Paavan Ahuja

                    </p>

                    <p className="text-[12px] font-medium leading-[15px] tracking-[-0.24px] text-[#999999]">

                      CEO, Dignifyd Group

                    </p>

                  </div>

                </div>


                {/* Right Portrait */}

                <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 overflow-hidden max-[760px]:relative max-[760px]:mb-[18px] max-[760px]:h-[260px] max-[760px]:w-full max-[760px]:rounded-[16px]">

                  <div className="relative h-full w-full">

                    {/* Soft gradient blend overlay for desktop */}

                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[140px] bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent max-[760px]:hidden" />

                    <img

                      src={portrait}

                      alt="Paavan Ahuja"

                      className="h-full w-full object-cover object-center max-[760px]:rounded-[16px] max-[760px]:[mask-image:none] max-[760px]:[-webkit-mask-image:none]"

                      style={{

                        WebkitMaskImage:

                          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, black 60%)",

                        maskImage:

                          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, black 60%)",

                      }}

                    />

                  </div>

                </div>

              </article>


              {/* Right: Benefits matching Figma 64px gap, 28px title, 18px body */}

              <div className="flex w-[395px] shrink-0 flex-col gap-[64px] max-[1100px]:w-full max-[1100px]:max-w-[741px] max-[1100px]:gap-[48px] max-[760px]:gap-[36px]">

                <article className="flex flex-col gap-[12px]">

                  <h3 className="text-[28px] font-medium leading-[28px] tracking-[-0.56px] text-[#FCFCFA] max-[760px]:text-[22px] max-[760px]:leading-[28px]">

                    Scalable Execution Requests

                  </h3>

                  <p className="text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999999] max-[760px]:text-[15px] max-[760px]:leading-[22px]">

                    Prioritised workstreams executed through structured queues and delivery ownership.

                  </p>

                </article>


                <article className="flex flex-col gap-[12px]">

                  <h3 className="text-[28px] font-medium leading-[28px] tracking-[-0.56px] text-[#FCFCFA] max-[760px]:text-[22px] max-[760px]:leading-[28px]">

                    Governed Workflows

                  </h3>

                  <p className="text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999999] max-[760px]:text-[15px] max-[760px]:leading-[22px]">

                    Clear visibility across active, ongoing, and completed initiatives with defined accountability.

                  </p>

                </article>


                <article className="flex flex-col gap-[12px]">

                  <h3 className="text-[28px] font-medium leading-[28px] tracking-[-0.56px] text-[#FCFCFA] max-[760px]:text-[22px] max-[760px]:leading-[28px]">

                    Flexible Engagement Model

                  </h3>

                  <p className="text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999999] max-[760px]:text-[15px] max-[760px]:leading-[22px]">

                    Engagements designed to adapt to business priorities, scale, and timelines.

                  </p>

                </article>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================

            CAPABILITIES

        ========================================================= */}

        <section

          id="features"

          className="h-[1141px] scroll-mt-12 bg-black px-[24px] pb-0 pt-[64px] min-[1101px]:mt-[69px] max-[1100px]:h-auto max-[1100px]:pb-[39px] max-[800px]:pb-[9px] max-[760px]:pb-[20px]"

        >

          <div className="mx-auto h-[1077px] min-h-0 w-[1200px] max-w-full rounded-[50px] border-t border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] px-[48px] pt-[64px] pb-[64px] max-[1100px]:h-auto max-[1100px]:pb-[28px] max-[760px]:rounded-[28px] max-[760px]:px-[20px]">

            <div className="text-center">

              <Eyebrow>Capabilities</Eyebrow>


              <h2 className="mt-[18px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[38px]">

                Why leading brands{" "}

                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">

                  trust

                </span>{" "}

                <span className="font-['Instrument_Serif'] font-normal italic leading-[91px] tracking-normal">

                  us.

                </span>

              </h2>


              <p className="mx-auto mt-[16px] max-w-[740px] text-[18px] leading-[28px] text-[#999999]">

                Once you partner with Dignifyd, execution becomes predictable,

                scalable, and aligned.

              </p>

            </div>


            <div className="mt-[54px] grid grid-cols-3 gap-x-[8px] gap-y-[40px] max-[1100px]:mt-[59px] max-[1100px]:grid-cols-1 max-[1100px]:gap-y-[119px] max-[800px]:mt-[26px] max-[800px]:gap-y-[109px] max-[760px]:mt-[70px] max-[760px]:gap-y-[98px]">

              {capabilities.map(({ title, copy, icon }) => (

                <article

                  key={title}

                  className="flex flex-col items-center rounded-[24px] px-[20px] py-[12px] text-center"

                >

                  <div className="flex h-[72px] w-[72px] items-center justify-center overflow-visible">

                    <img

                      src={icon}

                      alt=""

                      aria-hidden="true"

                      className="h-[72px] w-[72px] object-contain transition-transform duration-300 hover:scale-[1.05]"

                    />

                  </div>


                  <h3 className="mt-[18px] text-[21px] font-medium leading-[35px]">

                    {title}

                  </h3>


                  <p className="mx-auto mt-[8px] max-w-[275px] text-[14px] leading-[22px] text-[#999999]">

                    {copy}

                  </p>

                </article>

              ))}

            </div>


            <div className="mt-[42px] flex justify-center">

              <a

                href="/about"

                className="inline-flex h-[68px] w-[130px] items-center justify-center rounded-full bg-[#018d87] px-[24px] text-[17px] font-medium text-white transition-all duration-300 hover:bg-[#00a69f]"

              >

                About Us

              </a>

            </div>

          </div>

        </section>


        {/* =========================================================

            SERVICES

        ========================================================= */}

        <section className="bg-[#0a0a0a] px-[32px] pb-[64px] pt-[92px] max-[760px]:px-[20px] max-[760px]:pb-[48px] max-[760px]:pt-[64px]">

          <div className="mx-auto max-w-[1200px] text-center">

            <Eyebrow>Services</Eyebrow>


            <h2 className="mx-auto mt-[18px] text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc] max-[1000px]:text-[54px] max-[1000px]:leading-[1.1] max-[760px]:text-[38px] max-[760px]:leading-[1.15]">

              All your{" "}

              <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">

                digital

              </span>{" "}

              needs.

            </h2>


            <p className="mx-auto mt-[16px] max-w-[1200px] text-[22px] font-medium leading-[33px] tracking-[-0.44px] text-[#999999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">

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
        /*
          Hero scroll geometry (desktop):
          - Hero copy stays stationary and pinned at top: 0 while the video track scrolls over it.
          - The video and Trusted Brands section are connected together in the video track layer,
            moving as a single unit with consistent spacing below the video.
          - As the user scrolls down, the video moves over the pinned text and Trusted Brands follows.
          - Scrolling up naturally reverses the movement and reveals the hero text again.
        */
        .hero-scroll-section {
          --hero-sticky-height: 645px;
          --hero-video-start: 645px;
          position: relative;
          height: auto;
          overflow: visible;
        }
        .hero-scroll-copy {
          position: sticky;
          top: 0;
          z-index: 10;
          height: var(--hero-sticky-height);
        }
        .hero-scroll-track {
          position: relative;
          z-index: 20;
          width: 100%;
          height: auto;
          margin-top: calc(var(--hero-video-start) - var(--hero-sticky-height));
          background: #0a0a0a;
        }
        .hero-scroll-panel {
          position: relative;
          width: 100%;
          height: auto;
        }
        /* The existing tablet video aspect ratio is 1200:861. Keep the same
           starting Y position while maintaining seamless scroll. */
        @media (max-width: 1200px) and (min-width: 761px) {
          .hero-scroll-section {
            --hero-sticky-height: calc(71.75vw - 45.92px);
            --hero-video-start: 605px;
          }
        }
        @media (max-width: 800px) and (min-width: 761px) {
          .hero-scroll-section {
            --hero-video-start: 491px;
          }
        }
        /* Keep the existing non-pinned mobile layout and card dimensions. */
        @media (max-width: 760px) {
          .hero-scroll-section {
            height: auto;
          }
          .hero-scroll-copy {
            position: relative;
            top: auto;
            height: 620px;
          }
          .hero-scroll-track {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: auto;
            margin-top: 0;
          }
          .hero-scroll-panel {
            position: relative;
            top: auto;
            height: auto;
          }
        }
        @media (max-width: 430px) {
          .hero-scroll-copy { height: 580px; }
        }
        @media (max-width: 374px) {
          .hero-scroll-copy { height: 540px; }
        }

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
