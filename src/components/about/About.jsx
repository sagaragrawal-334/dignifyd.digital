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

function BrandRail() {
  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="mt-[57px] overflow-hidden bg-transparent">
      <div className="mx-auto w-[1200px] max-w-full overflow-hidden">
        <p className="m-0 text-center text-[14px] font-medium leading-[17px] tracking-[-0.28px] text-[#999]">
          Our designs are featured on:
        </p>

        <div className="relative mt-[13px] h-[55px] overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[90px] bg-gradient-to-r from-[#080909] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[90px] bg-gradient-to-l from-[#080909] to-transparent" />

          <div className="flex h-[55px] w-max items-center gap-[56px] animate-[aboutBrands_28s_linear_infinite]">
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

function NoteHeading({ children, italic }) {
  return (
    <p className="m-0 w-[386px] max-w-full text-[48px] font-medium leading-[60px] tracking-[-2.4px] text-[#fbfafc]">
      On a{" "}
      <span className="font-['Baskerville'] font-normal italic tracking-normal">
        {italic}
      </span>{" "}
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="m-0 text-[28px] font-medium leading-[35px] tracking-[-1.12px] text-[#fbfafc]">
      {children}
    </h2>
  );
}

function SectionBody({ children, large = false }) {
  return (
    <p
      className={
        large
          ? "m-0 text-[18px] font-medium leading-[27px] tracking-[-0.36px] text-[#999]"
          : "m-0 text-[16px] font-medium leading-[24px] tracking-[-0.15px] text-[#999]"
      }
    >
      {children}
    </p>
  );
}

function About() {
  return (
    <div className="about-page min-h-screen overflow-x-clip bg-[#080909] font-['Inter',Arial,sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        <section className="px-6 pt-[160px] text-center">
          <div className="mx-auto w-[1200px] max-w-full">
            <h1 className="mx-auto m-0 w-[626.5px] max-w-full text-[70px] font-medium leading-[88px] tracking-[-3.5px] text-[#fbfafc]">
              <span className="block h-[88px]">Delivering Long-Term</span>
              <span className="block h-[91px] leading-[91px]">
                <span className="font-['Baskerville'] font-normal italic tracking-normal">
                  Digital
                </span>{" "}
                <span>Value.</span>
              </span>
            </h1>

            <p className="mx-auto mt-[17px] h-[50px] w-[1200px] max-w-full text-[20px] font-medium leading-[25px] tracking-[-0.4px] text-[#999]">
              From strategy to execution, we help ambitious brands create digital systems that drive visibility, engagement, and sustainable growth.
            </p>
          </div>
        </section>

        <BrandRail />

        <section className="mt-[140px] px-6">
          <div className="mx-auto grid h-[581.81px] w-[1200px] max-w-full grid-cols-[568px_568px] gap-[64px] max-[900px]:h-auto max-[900px]:grid-cols-1">
            <div className="h-[581.81px] w-[568px] overflow-hidden rounded-[12px] max-[900px]:h-auto max-[900px]:w-full">
              <img
                src={strategicImage}
                alt=""
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="relative -top-[2px] w-[568px] max-w-full max-[900px]:top-0 max-[900px]:w-full">
              <NoteHeading italic="strategic">note</NoteHeading>

              <div className="mt-[16px]">
                <SectionHeading>We&apos;re passionate about digital excellence</SectionHeading>
              </div>

              <div className="mt-[12px]">
                <SectionBody large>
                  Our work is guided by a deep understanding of business objectives and digital ecosystems. By combining insight-driven strategy with thoughtful execution, we help brands build digital foundations that are relevant, resilient, and future-ready.
                </SectionBody>
              </div>

              <div className="mt-[20px]">
                <SectionHeading>Our Mission</SectionHeading>
                <div className="mt-[6px]">
                  <SectionBody>
                    To design and deliver impactful digital experiences that connect brands with their audiences, enable growth, and translate creative intent into measurable business outcomes.
                  </SectionBody>
                </div>
              </div>

              <div className="mt-[20px]">
                <SectionHeading>Our Vision</SectionHeading>
                <div className="mt-[6px]">
                  <SectionBody>
                    To empower global brands through strategic digital solutions that are scalable, data-informed, and built to create long-term value in an ever-evolving digital landscape.
                  </SectionBody>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[140px] px-6 pb-[138px]">
          <div className="mx-auto grid h-[581.81px] w-[1200px] max-w-full grid-cols-[568px_568px] gap-[64px] max-[900px]:h-auto max-[900px]:grid-cols-1">
            <div className="w-[568px] max-w-full max-[900px]:w-full">
              <NoteHeading italic="personal">note</NoteHeading>

              <div className="mt-[16px]">
                <SectionHeading>We care deeply about how we work</SectionHeading>
              </div>

              <div className="mt-[12px]">
                <SectionBody large>
                  We believe great work comes from healthy collaboration. Our environment encourages open thinking, honest conversations, and the space to explore ideas without friction—creating room for creativity to thrive.
                </SectionBody>
              </div>

              <div className="mt-[20px]">
                <SectionHeading>Built on trust and respect</SectionHeading>
                <div className="mt-[6px]">
                  <SectionBody>
                    We work as a unified team, valuing accountability, empathy, and mutual support. Every project is a shared responsibility, and every success is collective.
                  </SectionBody>
                </div>
              </div>

              <div className="mt-[20px]">
                <SectionHeading>Different perspectives, shared direction</SectionHeading>
                <div className="mt-[6px]">
                  <SectionBody>
                    Each individual brings a unique way of thinking to the table. By embracing diverse skills and viewpoints, we strengthen our culture and elevate the quality of everything we create.
                  </SectionBody>
                </div>
              </div>
            </div>

            <div className="h-[581.81px] w-[568px] overflow-hidden rounded-[12px] max-[900px]:h-auto max-[900px]:w-full">
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
          .about-page > header { top: 42px; }
        }

        .about-page {
          background:
            linear-gradient(180deg, #003f38 0%, #011b18 130px, #080909 320px) top / 100% 320px no-repeat,
            #080909;
        }

        @keyframes aboutBrands {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[aboutBrands"] {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          .about-page .w-\\[1200px\\] { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default About;
