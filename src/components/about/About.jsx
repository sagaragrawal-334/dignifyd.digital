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
    <section className="overflow-hidden bg-transparent py-[34px]">
      <div className="mx-auto max-w-[1200px] overflow-hidden px-6 max-[760px]:px-5">
        <p className="text-center text-[14px] leading-[20px] text-[#999]">
          Our designs are featured on:
        </p>

        <div className="relative mt-[34px] overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-[#080909] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-[#080909] to-transparent" />

          <div className="flex w-max items-center gap-[56px] animate-[aboutBrands_28s_linear_infinite]">
            {items.map((item, index) => (
              <div
                key={`${index}-${item.src}`}
                className="flex h-[42px] shrink-0 items-center justify-center"
                style={{ width: `${item.width}px` }}
              >
                <img
                  src={item.src}
                  alt=""
                  className="block h-auto w-full object-contain opacity-[0.8]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="about-page min-h-screen overflow-x-clip bg-[#080909] font-['Inter',Arial,sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="px-6 pb-[32px] pt-[160px] text-center max-[760px]:px-6 max-[760px]:pb-[48px] max-[760px]:pt-[96px]">
          <div className="mx-auto max-w-[1200px]">
            <h1 className="mx-auto max-w-[900px] text-[70px] font-medium leading-[1.2] tracking-[-2px] max-[900px]:text-[58px] max-[900px]:tracking-[-1.8px] max-[760px]:text-[40px] max-[760px]:leading-[48px] max-[760px]:tracking-[-1px]">
              <span className="block max-[760px]:inline">Delivering Long-Term</span>
              <span className="block max-[760px]:inline">
                <span className="font-['Instrument_Serif','Baskervville',serif] font-normal italic tracking-[-1px]">Digital</span>{" "}
                <span>Value.</span>
              </span>
            </h1>

            <p className="mx-auto mt-[17px] max-w-[1200px] text-[18px] leading-[28px] tracking-[-0.2px] text-[#999] max-[760px]:mt-6 max-[760px]:text-[18px] max-[760px]:leading-[25px]">
              From strategy to execution, we help ambitious brands create
              digital systems that drive visibility, engagement, and
              sustainable growth.
            </p>
          </div>
        </section>

        <BrandRail />

        {/* STRATEGIC NOTE */}
        <section className="bg-[#080909] px-6 py-[100px] max-[760px]:px-5 max-[760px]:py-[56px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1fr] items-start gap-[64px] max-[900px]:grid-cols-1">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src={strategicImage}
                alt=""
                className="block h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[48px] font-normal leading-[1.2] tracking-[-1px] text-white max-[760px]:text-[32px]">
                On a{" "}
                <span className="font-['Instrument_Serif','Baskervville',serif] font-normal italic text-white">
                  strategic
                </span>{" "}
                note
              </p>

              <h2 className="mt-[32px] text-[28px] font-medium leading-[36px] tracking-[-1.12px]">
                We&apos;re passionate about digital excellence
              </h2>

              <p className="mt-[16px] text-[17px] font-normal leading-[26px] tracking-[-0.2px] text-[#999]">
                Our work is guided by a deep understanding of business
                objectives and digital ecosystems. By combining insight-driven
                strategy with thoughtful execution, we help brands build
                digital foundations that are relevant, resilient, and
                future-ready.
              </p>

              <div className="mt-[30px] space-y-[22px]">
                <div>
                  <h3 className="text-[28px] font-medium leading-[36px] tracking-[-1.12px] text-white">
                    Our Mission
                  </h3>
                  <p className="mt-[6px] text-[16px] font-normal leading-[24px] tracking-[-0.15px] text-[#999]">
                    To design and deliver impactful digital experiences that
                    connect brands with their audiences, enable growth, and
                    translate creative intent into measurable business
                    outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] font-medium leading-[36px] tracking-[-1.12px] text-white">
                    Our Vision
                  </h3>
                  <p className="mt-[6px] text-[16px] font-normal leading-[24px] tracking-[-0.15px] text-[#999]">
                    To empower global brands through strategic digital
                    solutions that are scalable, data-informed, and built to
                    create long-term value in an ever-evolving digital
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL NOTE */}
        <section className="bg-[#080909] px-6 pb-[86px] pt-[20px] max-[760px]:px-5 max-[760px]:pb-[60px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1fr] items-start gap-[64px] max-[900px]:grid-cols-1">
            <div className="max-[900px]:order-2">
              <p className="text-[48px] font-normal leading-[1.2] tracking-[-1px] text-white max-[760px]:text-[32px]">
                On a{" "}
                <span className="font-['Instrument_Serif','Baskervville',serif] font-normal italic text-white">
                  personal
                </span>{" "}
                note
              </p>

              <h2 className="mt-[24px] text-[28px] font-medium leading-[36px] tracking-[-1.12px]">
                We care deeply about how we work
              </h2>

              <p className="mt-[16px] text-[17px] font-normal leading-[26px] tracking-[-0.2px] text-[#999]">
                We believe great work comes from healthy collaboration. Our
                environment encourages open thinking, honest conversations,
                and the space to explore ideas without friction—creating room
                for creativity to thrive.
              </p>

              <div className="mt-[30px] space-y-[22px]">
                <div>
                  <h3 className="text-[28px] font-medium leading-[36px] tracking-[-1.12px] text-white">
                    Built on trust and respect
                  </h3>
                  <p className="mt-[6px] text-[16px] font-normal leading-[24px] tracking-[-0.15px] text-[#999]">
                    We work as a unified team, valuing accountability, empathy,
                    and mutual support. Every project is a shared
                    responsibility, and every success is collective.
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] font-medium leading-[36px] tracking-[-1.12px] text-white">
                    Different perspectives, shared direction
                  </h3>
                  <p className="mt-[6px] text-[16px] font-normal leading-[24px] tracking-[-0.15px] text-[#999]">
                    Each individual brings a unique way of thinking to the
                    table. By embracing diverse skills and viewpoints, we
                    strengthen our culture and elevate the quality of
                    everything we create.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[12px] max-[900px]:order-1">
              <img
                src={personalImage}
                alt=""
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <SiteCTA />
      </main>

      <style>{`
        @media (min-width: 1101px) {
          .about-page > header { top: 24px; width: 412px; height: 56px; }
        }
        .about-page {
          background: linear-gradient(180deg, #003f38 0, #011b18 130px, #080909 320px) top / 100% 320px no-repeat, #080909;
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
      `}</style>
    </div>
  );
}

export default About;
