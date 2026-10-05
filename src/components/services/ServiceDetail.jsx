import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";
import SiteFooter from "../shared/SiteFooter";

import creativeContent from "../../assets/services/Creative Content That Builds Brands.svg";
import digitalMarketing from "../../assets/services/Digital Marketing That Drives Growth.svg";
import brandStrategy from "../../assets/services/Building Brands With Clear Purpose.svg";
import webDesign from "../../assets/services/Designing Websites That Perform.svg";
import influencerMarketing from "../../assets/services/Influencer Marketing.svg";
import gallery02 from "../../assets/gallery-02.jpeg";
import gallery05 from "../../assets/gallery-05.png";
import gallery06 from "../../assets/gallery-06.png";
import gallery09 from "../../assets/gallery-09.jpeg";

const pages = {
  "/creative-and-content": {
    title: "Creative & Content That Connects",
    description:
      "We craft compelling creative content that tells your brand story, captivates audiences, and drives engagement across digital platforms. From visual design to strategic storytelling, our approach blends creativity with purpose to make every piece of content meaningful and effective.",
    image: creativeContent,
    groupOne: "Creative Strategy & Execution",
    groupTwo: "Creative Systems That Scale",
    why: "Creative content isn’t just about looking good — it’s about communicating purposefully. The right creative strategy builds emotional connection, improves brand recall, and drives measurable engagement.",
    cardsOne: [
      ["Visual Storytelling", "We design eye-catching visuals — from graphics to videos — that communicate your message clearly and memorably."],
      ["Strategic Content Creation", "We produce written and multimedia content tailored to your audience — including social posts, blogs, website copy, and campaign materials — aligned with your goals."],
      ["Brand-Led Messaging", "We define and refine your brand voice to ensure every piece of content speaks with clarity, consistency, and impact."],
    ],
    cardsTwo: [
      ["Integrated Campaign Support", "Our creative output is designed to work seamlessly across platforms — social, web, email, and ads — for cohesive messaging."],
      ["Optimisation & Insights", "We leverage performance data to refine creative and content over time, ensuring better engagement and stronger results."],
      ["Multi-Format Content Delivery", "From static visuals and animations to long-form storytelling and short video clips — we support diverse formats based on your audience and channels."],
    ],
    sideImage: gallery02,
  },
  "/digital-marketing": {
    title: "Digital Marketing That Drives Growth",
    description:
      "We plan, execute, and optimise digital marketing strategies using data, creativity, and technology — helping brands increase visibility, attract qualified leads, and achieve measurable business growth.",
    image: digitalMarketing,
    groupOne: "Performance Led Marketing Strategy",
    groupTwo: "Optimisation & Long Term Growth",
    why: "Effective digital marketing helps you attract the right audience, build meaningful connections, and grow your business with measurable results and strategic insights.",
    cardsOne: [
      ["Audience Driven Targeting", "We identify and segment the right audiences using behavioural insights and data signals, ensuring campaigns reach users most likely to engage and convert."],
      ["Paid Media Campaigns", "From search to social and display, we design and optimise paid campaigns focused on relevance, performance and return on ad spend."],
      ["Content-Led Engagement", "We build tailored content strategies that educate, engage, and convert — strengthening brand presence and supporting campaign success across channels."],
    ],
    cardsTwo: [
      ["Search Engine Optimisation", "We enhance organic visibility through technical SEO, content optimisation, and on-page improvements — driving qualified traffic and sustainable long-term growth."],
      ["Analytics & Performance Tracking", "Using analytics and reporting tools, we measure campaign effectiveness, uncover optimisation opportunities and refine strategies for continued improvement."],
      ["Scalable Creative Growth", "Our marketing approach aligns your channels, budget, and goals, enabling sustainable growth and adaptability in competitive digital landscapes."],
    ],
    sideImage: gallery05,
  },
  "/brand-strategy": {
    title: "Building Brands With Clear Direction",
    description:
      "We help brands define who they are, what they stand for, and how they communicate. Our brand strategies bring clarity, consistency, and focus — so every touchpoint works toward long-term growth and recognition.",
    image: brandStrategy,
    groupOne: "What We Do",
    groupTwo: "Brand Expression",
    why: "A strong brand strategy aligns perception with purpose. It builds trust, improves recall, and ensures your brand communicates with clarity at every stage of growth.",
    cardsOne: [
      ["Brand Discovery", "We understand your business, audience, and market to uncover insights that shape a strong and authentic brand foundation."],
      ["Brand Positioning", "We define what makes your brand different and why it matters — helping you stand out clearly in competitive markets."],
      ["Brand Architecture", "We structure your brand, services, and offerings in a way that’s easy to understand and scalable as you grow."],
    ],
    cardsTwo: [
      ["Messaging & Voice", "We create clear messaging frameworks and brand voice guidelines to ensure consistency across all communication."],
      ["Visual Strategy Direction", "We define the visual direction that guides design decisions — ensuring your brand looks cohesive, confident, and recognizable everywhere."],
    ],
    sideImage: gallery06,
  },
  "/web-and-ux-design": {
    title: "Designing Websites That Perform",
    description:
      "We craft purposeful digital experiences that are visually stunning, intuitively usable, and strategically built to help brands convert visitors into loyal customers. Combining research-driven UX, beautiful UI, and modern technologies, our designs don’t just look great — they perform.",
    image: webDesign,
    groupOne: "Web Experiences Built With Purpose",
    groupTwo: "Design Systems That Scale",
    why: "A well-designed website is more than aesthetics — it’s an experience. Good design reduces frustration, simplifies decisions, and builds credibility.",
    cardsOne: [
      ["User-Centric Design Approach", "Our UX methodology starts with understanding your users and shaping experiences that feel natural and effortless. Clear navigation, meaningful interactions, and accessible layouts make digital experiences easier to engage with."],
      ["Conversion-Focused UX Strategy", "Every layout choice aims to guide visitors toward action — from lead generation and sales to deeper engagement."],
      ["Responsive Performance Design", "We ensure your site looks sharp and functions flawlessly across desktop, tablet, and mobile."],
    ],
    cardsTwo: [
      ["Scalable UI Foundations", "Our modular UI systems bring consistency and flexibility to your digital presence, so adding new pages, features, or products becomes faster and cleaner over time."],
      ["Brand-Aligned Digital Interfaces", "We blend brand personality with usability, using purposeful typography, colour systems, spacing, and intuitive interaction elements."],
      ["Collaboration-Ready Design Delivery", "Detailed documentation, component specs, and asset organisation help your vision transition smoothly from design to launch."],
    ],
    sideImage: gallery09,
  },
  "/influencer-marketing": {
    title: "Influencer Marketing That Feels Authentic",
    description:
      "We connect brands with the right creators to build trust, spark conversations, and drive real impact. Our influencer marketing strategies focus on authenticity, relevance, and measurable outcomes — not just reach.",
    image: influencerMarketing,
    groupOne: "What We Do",
    groupTwo: "Execution & Performance",
    why: "When done right, influencer marketing humanises your brand, strengthens credibility, and drives real engagement through voices your audience already believes in.",
    cardsOne: [
      ["Creator Discovery & Selection", "We identify influencers who genuinely align with your brand values, audience, and objectives — ensuring credibility and meaningful engagement."],
      ["Campaign Strategy & Planning", "From product launches to awareness and performance-led campaigns, we design influencer strategies tailored to your goals and platforms."],
      ["Content Collaboration", "We work closely with creators to co-create content that feels natural, engaging, and true to both the influencer’s voice and your brand."],
    ],
    cardsTwo: [
      ["Campaign Management", "We handle end-to-end coordination — onboarding, timelines, approvals, and delivery — ensuring smooth and timely execution."],
      ["Multi-Platform Activation", "We activate campaigns across Instagram, YouTube, short-form video platforms, and emerging channels based on audience behaviour."],
      ["Tracking & Reporting", "We track reach, engagement, and impact to evaluate performance and optimise future campaigns."],
    ],
    sideImage: gallery05,
  },
};

function ContentGroup({ title, cards }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-[92px] max-[760px]:px-5 max-[760px]:py-16">
      <div className="mb-[46px] flex items-end justify-between gap-8 max-[760px]:mb-8 max-[760px]:block">
        <h2 className="max-w-[620px] text-[54px] font-medium leading-[1.03] tracking-[-2.7px] max-[760px]:text-[38px] max-[760px]:tracking-[-1.9px]">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[12px] max-[900px]:grid-cols-1">
        {cards.map(([heading, body]) => (
          <article key={heading} className="rounded-[24px] border border-white/10 bg-[#0d0d0d] p-[28px] max-[760px]:p-6">
            <h3 className="text-[20px] font-medium leading-[26px] tracking-[-0.4px]">{heading}</h3>
            <p className="mt-4 text-[15px] leading-[23px] text-[#999]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceDetail({ path }) {
  const page = pages[path] ?? pages["/creative-and-content"];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#080909] font-['Inter',Arial,sans-serif] text-[#fbfafc]">
      <Navbar />
      <main>
        <section className="px-6 pb-[82px] pt-[184px] text-center max-[760px]:px-5 max-[760px]:pb-14 max-[760px]:pt-[132px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-[#111212] px-4 py-2 text-[13px] font-medium text-[#fbfafc]">Services</p>
            <h1 className="mx-auto max-w-[980px] text-[76px] font-medium leading-[1.02] tracking-[-3.8px] max-[760px]:text-[48px] max-[760px]:tracking-[-2.4px]">
              {page.title}
            </h1>
            <p className="mx-auto mt-7 max-w-[860px] text-[21px] leading-[31px] text-[#999] max-[760px]:text-base max-[760px]:leading-6">
              {page.description}
            </p>

            <div className="mx-auto mt-[70px] h-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-[#101111] max-[760px]:h-[280px]">
              <img src={page.image} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <ContentGroup title={page.groupOne} cards={page.cardsOne} />

        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-center gap-[64px] px-6 py-[20px] max-[900px]:grid-cols-1 max-[760px]:px-5">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101111]">
            <img src={page.sideImage} alt="" className="block h-[520px] w-full object-cover max-[760px]:h-[360px]" />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.18em] text-[#999]">Why it matters</p>
            <p className="text-[38px] leading-[1.12] tracking-[-1.9px] max-[760px]:text-[28px] max-[760px]:tracking-[-1.4px]">
              {page.why}
            </p>
          </div>
        </section>

        <ContentGroup title={page.groupTwo} cards={page.cardsTwo} />

        <SiteCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

export default ServiceDetail;
