import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";
import SiteFooter from "../shared/SiteFooter";
import BrandMarquee from "../shared/BrandMarquee";

import strategicImage from "../../assets/gallery-06.png";
import personalImage from "../../assets/gallery-01.png";
import brand1 from "../../assets/brand-01.png";
import brand2 from "../../assets/brand-02.png";
import brand3 from "../../assets/brand-03.png";
import brand4 from "../../assets/brand-04.png";
import brand5 from "../../assets/brand-05.png";

const featuredBrands = [brand1, brand2, brand3, brand4, brand5];

const teamMembers = [
  { name: "Paavan Ahuja", role: "Chief Executive Officer", image: "https://framerusercontent.com/images/DCtW3lLtTM35ABrYoEuBt0qjC8.jpg?height=4032&width=2268" },
  { name: "Udaytanshu Aggarwal", role: "Financial & Growth Advisor", image: "https://framerusercontent.com/images/0fGrCd9nA2HPeC5F3r48EEU0hw.jpg?height=3867&width=2119" },
  { name: "Siddharth Chawla", role: "Design & Innovation Associate", image: "https://framerusercontent.com/images/6vQLKCrbJ5Zj4kEiUPzTSwWxmLQ.jpg?height=4032&width=2268" },
  { name: "Pratyush Jha", role: "SEO Specialist", image: "https://framerusercontent.com/images/OSU29EXIYnoRuF7xb9vx4RbgOQ.jpg?height=2949&width=3024" },
  { name: "Raj Yadav", role: "Senior Wordpress Developer", image: "https://framerusercontent.com/images/WtB42PjMwwwcc2MtNqkUWhziKk.jpg?height=4032&width=2268" },
  { name: "Akshita Malik", role: "Graphic Designer", image: "https://framerusercontent.com/images/lJNh5UBNMKTUklAVu5xj6ZuJIU.jpeg?height=1784&width=1402" },
  { name: "Rudraksh Verma", role: "Video Editor & Motion Graphics Designer", image: "https://framerusercontent.com/images/FLev0HsRek9LVpNHZUN4tYefraE.jpg?height=2742&width=3024" },
  { name: "Mohammad Sarfaraj", role: "Video Editor & Motion Graphics Designer", image: "https://framerusercontent.com/images/rT1eWK73UrDFw0njgkzynGWRA.jpg?height=2855&width=3024" },
  { name: "Shivani Sharma", role: "Influencer Marketing Manager", image: "https://framerusercontent.com/images/mFFRlWhgVC7sgoR4fzWY2MexTuE.jpg?height=4032&width=2268" },
  { name: "Ashish Tyagi", role: "Sales Executive", image: "https://framerusercontent.com/images/4KlqiGl4HOKtsLQXvVvDl90sMMw.jpg?height=4032&width=2268" },
  { name: "Peehu Gupta", role: "Growth Marketing Executive", image: "https://framerusercontent.com/images/ZnmU6KfWeNClmiFBYmEYSfaD6k.jpg?height=2611&width=2140" },
];

function About() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#080909] font-['Inter',Arial,sans-serif] text-[#fbfafc]">
      <Navbar />

      <main>
        <section className="px-6 pb-[66px] pt-[155px] text-center max-[760px]:px-5 max-[760px]:pb-12 max-[760px]:pt-[125px]">
          <div className="mx-auto max-w-[1200px]">
            <h1 className="text-[70px] font-medium leading-[1.04] tracking-[-3.5px] max-[760px]:text-[46px] max-[760px]:tracking-[-2.3px]">
              Delivering Long-Term {" "}
              <span className="font-['Baskerville','Instrument_Serif',serif] italic font-normal tracking-[-1px]">Digital</span> Value.
            </h1>
            <p className="mx-auto mt-6 max-w-[980px] text-[20px] leading-[30px] tracking-[-0.4px] text-[#999] max-[760px]:text-base max-[760px]:leading-6">
              From strategy to execution, we help ambitious brands create digital systems that drive visibility, engagement, and sustainable growth.
            </p>
          </div>
        </section>

        <BrandMarquee brands={featuredBrands} label="Our designs are featured on:" />

        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-[56px] px-6 py-[86px] max-[900px]:grid-cols-1 max-[760px]:px-5 max-[760px]:py-14">
          <div className="overflow-hidden rounded-[12px]">
            <img src={strategicImage} alt="Team collaborating around a table" className="block aspect-[568/582] w-full object-cover" />
          </div>
          <div className="max-w-[540px] pt-[10px]">
            <p className="mb-[16px] text-[15px] text-[#999]">On a <em className="font-['Instrument_Serif','Baskerville',serif] text-white">strategic</em> note</p>
            <h2 className="text-[42px] font-medium leading-[1.02] tracking-[-2.1px] max-[760px]:text-[32px]">We&apos;re passionate about digital excellence</h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-[#999]">Our work is guided by a deep understanding of business objectives and digital ecosystems. By combining insight-driven strategy with thoughtful execution, we help brands build digital foundations that are relevant, resilient, and future-ready.</p>
            <div className="mt-7 space-y-6 text-[14px] leading-[1.6] text-[#999]">
              <div>
                <h3 className="mb-1 font-medium text-white">Our Mission</h3>
                <p>To design and deliver impactful digital experiences that connect brands with their audiences, enable growth, and translate creative intent into measurable business outcomes.</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Our Vision</h3>
                <p>To empower global brands through strategic digital solutions that are scalable, data-informed, and built to create long-term value in an ever-evolving digital landscape.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-[56px] px-6 py-[86px] max-[900px]:grid-cols-1 max-[760px]:px-5 max-[760px]:py-14">
          <div className="order-2 max-w-[540px] pt-[10px] max-[900px]:order-1">
            <p className="mb-[16px] text-[15px] text-[#999]">On a <em className="font-['Instrument_Serif','Baskerville',serif] text-white">personal</em> note</p>
            <h2 className="text-[42px] font-medium leading-[1.02] tracking-[-2.1px] max-[760px]:text-[32px]">We care deeply about how we work</h2>
            <div className="mt-5 space-y-6 text-[15px] leading-[1.6] text-[#999]">
              <div><p>We believe great work comes from healthy collaboration. Our environment encourages open thinking, honest conversations, and the space to explore ideas without friction—creating room for creativity to thrive.</p></div>
              <div><h3 className="mb-1 font-medium text-white">Built on trust and respect</h3><p>We work as a unified team, valuing accountability, empathy, and mutual support. Every project is a shared responsibility, and every success is collective.</p></div>
              <div><h3 className="mb-1 font-medium text-white">Different perspectives, shared direction</h3><p>Each individual brings a unique way of thinking to the table. By embracing diverse skills and viewpoints, we strengthen our culture and elevate the quality of everything we create.</p></div>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-[12px] max-[900px]:order-2">
            <img src={personalImage} alt="Creative collaboration" className="block aspect-[568/582] w-full object-cover" />
          </div>
        </section>

        <section className="py-[72px] text-center">
          <div className="mx-auto max-w-[1200px] px-6 max-[760px]:px-5">
            <span className="inline-flex rounded-full border border-white/10 bg-[#121313] px-4 py-2 text-[13px] font-medium">Team</span>
            <h2 className="mx-auto mt-4 max-w-[900px] text-[68px] font-medium leading-[1] tracking-[-3.4px] max-[760px]:text-[44px] max-[760px]:tracking-[-2.2px]">Our People are <em className="font-['Instrument_Serif','Baskerville',serif] font-normal italic">Our Brand.</em></h2>
            <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-[22px] text-[#999]">A multidisciplinary team collaborating across strategy, design, and technology to deliver meaningful digital outcomes.</p>
          </div>

          <div className="relative mx-auto mt-[44px] w-full max-w-[1200px] overflow-hidden px-6 max-[760px]:px-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-[#080909] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-[#080909] to-transparent" />
            <div className="flex w-max animate-[teamMarquee_46s_linear_infinite] gap-[14px]">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <article key={`${member.name}-${index}`} className="relative h-[320px] w-[289.5px] shrink-0 overflow-hidden rounded-[6px] bg-[#111] text-left">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-[18px] pb-[18px] pt-[70px]">
                    <h3 className="text-[17px] font-medium">{member.name}</h3>
                    <p className="mt-1 max-w-[235px] text-[13px] leading-[19px] text-[#ddd]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SiteCTA />
      </main>

      <SiteFooter />

      <style>{`
        @keyframes teamMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default About;
