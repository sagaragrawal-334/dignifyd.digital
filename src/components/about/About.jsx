import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

import brand1 from "../../assets/brand-01.png";
import brand2 from "../../assets/brand-02.png";
import brand3 from "../../assets/brand-03.png";
import brand4 from "../../assets/brand-04.png";
import brand5 from "../../assets/brand-05.png";

import strategicImage from "../../assets/gallery-06.svg";
import personalImage from "../../assets/gallery-07.svg";

const brands = [
  { src: brand1, width: 79 },
  { src: brand2, width: 187 },
  { src: brand3, width: 172 },
  { src: brand4, width: 206 },
  { src: brand5, width: 202 },
];

const bodyClass =
  "m-0 font-['Inter',Arial,sans-serif] text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999999]";

function BrandRail() {
  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="mt-[64px] h-[100.41px] overflow-hidden bg-transparent">
      <div className="mx-auto w-[1200px] max-w-full overflow-hidden">
        <p className="m-0 text-center text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-[#999]">
          Our designs are featured on:
        </p>

        <div
          className="relative mt-[25.41px] h-[55px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 7.5%, black 92.5%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 7.5%, black 92.5%, transparent 100%)",
          }}
        >
          <div className="flex h-[55px] w-max items-center gap-[64px] animate-[aboutBrands_42s_linear_infinite]">
            {items.map((item, index) => (
              <div
                key={`${index}-${item.src}`}
                className="flex h-[55px] shrink-0 items-center justify-center"
                style={{ width: `${item.width}px` }}
              >
                <img
                  src={item.src}
                  alt=""
                  className="block h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NoteHeading({ children, italic, variant = "strategic" }) {
  return (
    <p
      className={`absolute left-0 top-[-2px] m-0 text-[48px] font-medium leading-[60px] tracking-[-2.4px] text-[#fbfafc] ${
        variant === "personal" ? "w-[388px]" : "w-[386px]"
      }`}
    >
      On a{" "}
      <span className="font-['Baskerville'] font-normal italic leading-[62px] tracking-normal">
        {italic}
      </span>{" "}
      {children}
    </p>
  );
}

function SectionHeading({ children, width }) {
  return (
    <h2
      className="m-0 h-[35px] text-[28px] font-medium leading-[35px] tracking-[-1.12px] text-[#fbfafc]"
      style={{ width: `${width}px` }}
    >
      {children}
    </h2>
  );
}

function About() {
  return (
    <div className="about-page min-h-screen overflow-x-clip font-['Inter'] text-[#fbfafc]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="px-6 pt-[160px] text-center">
          <div className="relative mx-auto h-[225px] w-[1200px] max-w-full">
            <h1 className="absolute left-1/2 top-[-2px] m-0 w-[626.5px] max-w-full -translate-x-1/2 text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc]">
              <span className="block h-[88px]">
                Delivering Long-Term
              </span>

              <span className="block h-[91px] leading-[91px]">
                <span className="font-['Baskerville'] font-normal italic leading-[91px] tracking-normal">
                  Digital
                </span>{" "}
                <span>Value.</span>
              </span>
            </h1>

            <p className="absolute left-1/2 top-[197px] m-0 h-[50px] w-[1200px] max-w-full -translate-x-1/2 text-[20px] font-medium leading-[25px] tracking-[-0.4px] text-[#999]">
              From strategy to execution, we help ambitious brands create
              digital systems that drive visibility, engagement, and
              sustainable growth.
            </p>
          </div>
        </section>

        <BrandRail />

        {/* STRATEGIC */}
        <section className="mt-[140.78px] px-6">
          <div className="mx-auto grid h-[581.81px] w-[1200px] max-w-full grid-cols-[568px_568px] gap-[64px] max-[900px]:h-auto max-[900px]:grid-cols-1">
            <div className="h-[581.81px] w-[568px] overflow-hidden rounded-[12px] border border-white/[0.08] max-[900px]:h-auto max-[900px]:w-full">
              <img
                src={strategicImage}
                alt=""
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="relative h-[581.81px] w-[568px] max-w-full max-[900px]:h-auto max-[900px]:w-full">
              <NoteHeading italic="strategic">note</NoteHeading>

              {/* Intro */}
              <div className="absolute left-0 top-[90.59px] h-[160.41px] w-[568px] max-[900px]:static max-[900px]:mt-[90px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={509}>
                  We&apos;re passionate about digital excellence
                </SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[568px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  Our work is guided by a deep understanding of business
                  objectives and digital ecosystems. By combining insight-driven
                  strategy with thoughtful execution, we help brands build
                  digital foundations that are relevant, resilient, and
                  future-ready.
                </p>
              </div>

              {/* Mission */}
              <div className="absolute left-0 top-[283px] h-[133.41px] w-[568px] max-[900px]:static max-[900px]:mt-[40px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={148}>Our Mission</SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[568px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  To design and deliver impactful digital experiences that
                  connect brands with their audiences, enable growth, and
                  translate creative intent into measurable business outcomes.
                </p>
              </div>

              {/* Vision */}
              <div className="absolute left-0 top-[448.41px] h-[133.41px] w-[568px] max-[900px]:static max-[900px]:mt-[40px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={129}>Our Vision</SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[568px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  To empower global brands through strategic digital solutions
                  that are scalable, data-informed, and built to create
                  long-term value in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="mt-[140px] px-6 pb-[138.19px]">
          <div className="mx-auto grid h-[581.81px] w-[1200px] max-w-full grid-cols-[568px_568px] gap-[64px] max-[900px]:h-auto max-[900px]:grid-cols-1">
            <div className="relative h-[581.81px] w-[568px] max-w-full max-[900px]:h-auto max-[900px]:w-full">
              <NoteHeading italic="personal" variant="personal">
                note
              </NoteHeading>

              {/* Intro */}
              <div className="absolute left-0 top-[90.59px] h-[160.41px] w-[568px] max-[900px]:static max-[900px]:mt-[90px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={440}>
                  We care deeply about how we work
                </SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[568px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  We believe great work comes from healthy collaboration. Our
                  environment encourages open thinking, honest conversations,
                  and the space to explore ideas without friction—creating room
                  for creativity to thrive.
                </p>
              </div>

              {/* Built */}
              <div className="absolute left-0 top-[283px] h-[133.41px] w-[568px] max-[900px]:static max-[900px]:mt-[40px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={310}>
                  Built on trust and respect
                </SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[568px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  We work as a unified team, valuing accountability, empathy,
                  and mutual support. Every project is a shared responsibility,
                  and every success is collective.
                </p>
              </div>

              {/* Different */}
              <div className="absolute left-0 top-[448.41px] h-[133.41px] w-[569.45px] max-[900px]:static max-[900px]:mt-[40px] max-[900px]:h-auto max-[900px]:w-full">
                <SectionHeading width={487}>
                  Different perspectives, shared direction
                </SectionHeading>

                <p
                  className={`${bodyClass} absolute left-0 top-[54.41px] w-[569.45px] max-[900px]:static max-[900px]:mt-[19px] max-[900px]:w-full`}
                >
                  Each individual brings a unique way of thinking to the table.
                  By embracing diverse skills and viewpoints, we strengthen our
                  culture and elevate the quality of everything we create.
                </p>
              </div>
            </div>

            <div className="h-[581.81px] w-[568px] overflow-hidden rounded-[12px] border border-white/[0.08] max-[900px]:h-auto max-[900px]:w-full">
              <img
                src={personalImage}
                alt=""
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <SiteCTA />
      </main>

      <style>{`
        @media (min-width: 901px) {
          .about-page > header {
            top: 20px;
          }
        }

        .about-page {
          position: relative;
          isolation: isolate;
          background: #0a0a0a;
        }

        .about-page > main {
          position: relative;
          z-index: 1;
        }

        .about-page::before {
          content: "";
          position: absolute;
          top: -408px;
          left: calc(50% - 75px);
          width: 1534px;
          height: 873px;
          pointer-events: none;
          z-index: 0;
          border-radius: 50%;
          background: linear-gradient(90deg, #012a2c 0%, #008a89 100%);
          filter: blur(150px);
        }

        @keyframes aboutBrands {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[aboutBrands"] {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          .about-page .w-\\[1200px\\] {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default About;