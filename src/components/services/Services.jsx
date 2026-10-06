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
    <div className="services-page min-h-screen overflow-x-hidden bg-[#080909] font-['Satoshi',sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        <section className="px-6 pb-[66px] pt-[157px] max-[760px]:px-6 max-[760px]:pb-12 max-[760px]:pt-[160px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="text-center">
              <h1 className="mx-auto max-w-[810px] text-[70px] font-medium leading-[91px] tracking-[-3.5px] max-[1000px]:text-[56px] max-[1000px]:leading-[1.1] max-[760px]:max-w-[262px] max-[760px]:text-[54px] max-[760px]:leading-[64px]">
                What we do,{" "}
                <em className="font-['Instrument_Serif','Baskervville',serif] font-normal italic tracking-normal">
                  delivered well.
                </em>
              </h1>

              <p className="mx-auto mt-[23px] max-w-[807px] text-[22px] font-medium leading-[32px] tracking-[-0.44px] text-[#999] max-[760px]:mt-[27px] max-[760px]:max-w-[262px] max-[760px]:text-[16px] max-[760px]:leading-[24px]">
                Our services combine strategic thinking, thoughtful design, and
                performance-<br className="max-[760px]:hidden" />driven execution to help brands build clarity,
                scale efficiently, and grow with purpose.
              </p>
            </div>

            <div className="mt-[64px] grid grid-cols-2 gap-x-[10px] gap-y-[14px] max-[760px]:mx-auto max-[760px]:mt-16 max-[760px]:grid-cols-1 max-[760px]:gap-[44px] max-[760px]:max-w-[310px] max-[760px]:px-6">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group block min-w-0 no-underline"
                >
                  <div className="aspect-[595/335] overflow-hidden rounded-[12px] bg-[#111]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  </div>

                  <p className="mt-[16px] text-[18px] font-medium leading-[22px] tracking-[-0.36px] text-[#fbfafc] max-[760px]:text-[16px] max-[760px]:leading-[21px]">
                    {service.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SiteCTA />
      </main>

      <style>{`
        @media (min-width: 1101px) {
          .services-page > header { top: 24px; width: 412px; height: 56px; }
        }
        .services-page {
          background: linear-gradient(180deg, #003f38 0, #011b18 130px, #080909 320px) top / 100% 320px no-repeat, #080909;
        }
      `}</style>
    </div>
  );
}

export default Services;

