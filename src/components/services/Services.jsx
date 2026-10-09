import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

import creativeContent from "../../assets/services/Creative Content That Builds Brands.svg";
import digitalMarketing from "../../assets/services/Digital Marketing That Drives Growth.svg";
import brandStrategy from "../../assets/services/Building Brands With Clear Purpose.svg";
import webDesign from "../../assets/services/Designing Websites That Perform.svg";
import influencerMarketing from "../../assets/services/Influencer Marketing.svg";

const services = [
  {
    title: "Creative Content That Builds Brands",
    image: creativeContent,
    href: "/creative-and-content",
  },
  {
    title: "Digital Marketing That Drives Growth",
    image: digitalMarketing,
    href: "/digital-marketing",
  },
  {
    title: "Building Brands With Clear Purpose",
    image: brandStrategy,
    href: "/brand-strategy",
  },
  {
    title: "Designing Websites That Perform",
    image: webDesign,
    href: "/web-and-ux-design",
  },
  {
    title: "Influencer Marketing",
    image: influencerMarketing,
    href: "/influencer-marketing",
  },
];

function Services() {
  return (
    <div className="services-page min-h-screen overflow-x-clip bg-[#0a0a0a] font-['Inter',sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        <section className="px-6 pt-[160px] max-[760px]:px-6 max-[760px]:pt-[150px]">
          <div className="mx-auto w-[1200px] max-w-full">
            {/* HERO */}
            <div className="relative h-[241px] w-full">
              <h1
                className="
                  absolute left-[204.14px] top-[-2px]
                  m-0 h-[91px] w-[810px]
                  text-center text-[70px] font-medium
                  leading-[88px] tracking-[-3.5px]
                  text-[#fbfafc]
                  max-[1000px]:left-1/2 max-[1000px]:w-[90%] max-[1000px]:-translate-x-1/2
                  max-[1000px]:text-[56px] max-[1000px]:leading-[1.1]
                  max-[760px]:top-0 max-[760px]:w-[262px]
                  max-[760px]:text-[54px] max-[760px]:leading-[64px]
                "
              >
                What we do,{" "}
                <span className="font-['Baskerville',serif] font-normal italic leading-[91px] tracking-normal">
                  delivered well.
                </span>
              </h1> 

              <p
                className="
                  absolute left-[196.36px] top-[114px]
                  m-0 h-[66px] w-[807.28px]
                  text-center text-[22px] font-medium
                  leading-[33px] tracking-[-0.44px]
                  text-[#999999]
                  max-[1000px]:left-1/2 max-[1000px]:w-[90%] max-[1000px]:-translate-x-1/2
                  max-[1000px]:text-[20px] max-[1000px]:leading-[30px]
                  max-[760px]:top-[105px] max-[760px]:h-auto max-[760px]:w-[262px]
                  max-[760px]:text-[16px] max-[760px]:leading-[24px]
                "
              >
                Our services combine strategic thinking, thoughtful design, and  <br /> performance-
                driven execution to help brands build clarity, scale efficiently, and <br /> grow with purpose.
              </p>
            </div>

            {/* SERVICE GRID */}
            <div
              className="
                grid h-[1153.02px] w-[1200px]
                grid-cols-[595px_595px]
                grid-rows-[377.67px_377.67px_377.67px]
                gap-[10px]
                max-[1000px]:h-auto
                max-[1000px]:w-full
                max-[1000px]:grid-cols-2
                max-[1000px]:grid-rows-none
                max-[760px]:mx-auto
                max-[760px]:max-w-[310px]
                max-[760px]:grid-cols-1
                max-[760px]:gap-[44px]
              "
            >
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="
                    block h-[377.67px] w-[595px]
                    min-w-0 no-underline
                    max-[1000px]:h-auto max-[1000px]:w-full
                  "
                >
                  <div
                    className="
                      h-[335.67px] w-[595px]
                      overflow-hidden rounded-[8px]
                      bg-[#111111]
                      max-[1000px]:h-auto
                      max-[1000px]:aspect-[595/335.67]
                      max-[1000px]:w-full
                    "
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="block h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-[15px] h-[27px] w-[595px] max-[1000px]:w-full">
                    <p
                      className="
                        m-0
                        text-[14px] font-medium
                        leading-[17px] tracking-[-0.28px]
                        text-[#999999]
                      "
                    >
                      {service.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SiteCTA />
      </main>

      <style>{`
        .services-page {
          position: relative;
          isolation: isolate;
        }

        @media (min-width: 901px) {
          .services-page > header {
            top: 20px !important;
          }
        }

        .services-page::before {
          content: "";
          position: absolute;
          top: -408px;
          left: calc(50% - 75px);
          width: 1534px;
          height: 873px;
          pointer-events: none;
          z-index: 0;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #012a2c 0%,
            #008a89 100%
          );
          filter: blur(150px);
        }

        .services-page > main {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1000px) {
          .services-page::before {
            width: 1100px;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 760px) {
          .services-page::before {
            width: 900px;
            height: 700px;
            top: -320px;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;