import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";
import SiteFooter from "../shared/SiteFooter";

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
    <div className="min-h-screen overflow-x-hidden bg-[#080909] font-['Inter',sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        <section className="px-6 pb-[69px] pt-[184px] max-[760px]:px-5 max-[760px]:pb-12 max-[760px]:pt-[132px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="text-center">
              <h1 className="mx-auto max-w-[810px] text-[70px] font-medium leading-[91px] tracking-[-3.5px] max-[1000px]:text-[56px] max-[1000px]:leading-[1.1] max-[760px]:text-[42px]">
                What we do,{" "}
                <em className="font-['Baskerville',serif] font-normal italic tracking-normal">
                  delivered well.
                </em>
              </h1>

              <p className="mx-auto mt-[23px] max-w-[807px] text-[20px] font-medium leading-[30px] tracking-[-0.4px] text-[#999] max-[760px]:text-[16px] max-[760px]:leading-[24px]">
                Our services combine strategic thinking, thoughtful design, and
                performance-driven execution to help brands build clarity,
                scale efficiently, and grow with purpose.
              </p>
            </div>

            <div className="mt-[64px] grid grid-cols-2 gap-[10px] max-[760px]:mt-10 max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group block min-w-0 no-underline"
                >
                  <div className="h-[334.67px] overflow-hidden rounded-[12px] bg-[#111] max-[760px]:h-auto max-[760px]:aspect-[595/335]">
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

      <SiteFooter />
    </div>
  );
}

export default Services;