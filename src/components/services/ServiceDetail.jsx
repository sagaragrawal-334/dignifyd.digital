import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

import creativeContent from "../../assets/services/Creative Content That Builds Brands.svg";
import digitalMarketing from "../../assets/services/Digital Marketing That Drives Growth.svg";
import brandStrategy from "../../assets/services/Building Brands With Clear Purpose.svg";
import webDesign from "../../assets/services/Designing Websites That Perform.svg";
import influencerMarketing from "../../assets/services/Influencer Marketing.svg";
import gallery02 from "../../assets/gallery-02.jpeg";
import gallery05 from "../../assets/gallery-05.png";
import gallery06 from "../../assets/gallery-06.svg";
import gallery09 from "../../assets/gallery-09.jpeg";

const pages = {
  "/creative-and-content": {
    title: "Creative & Content That Connects",
    description:
      "We craft compelling creative content that tells your brand story, captivates audiences, and drives engagement across digital platforms. From visual design to strategic storytelling, our approach blends creativity with purpose to make every piece of content meaningful and effective.",
    image: creativeContent,
    groupOne: "Creative Strategy & Execution",
    groupTwo: "Creative Systems That Scale",
    featureImageHeight: 464,
    secondaryImageHeight: 440,
    whyTitle: "Why Creative & Content Matters",
    why: "Creative content isn’t just about looking good — it’s about communicating purposefully. The right creative strategy builds emotional connection, improves brand recall, and drives measurable engagement in today’s noisy digital landscape.",
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
    featureImageHeight: 440,
    secondaryImageHeight: 464,
    whyTitle: "Why Digital Marketing Matters",
    why: "In today’s digital world, visibility and engagement are essential. Effective digital marketing helps you attract the right audience, build meaningful connections, and grow your business with measurable results and strategic insights.",
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
    featureImageHeight: 440,
    secondaryImageHeight: 308,
    whyTitle: "Why Brand Strategy Matters",
    why: "A strong brand strategy aligns perception with purpose. It builds trust, improves recall, and ensures your brand communicates with clarity at every stage of growth — not just today, but in the long run.",
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
    gridTitle: "What You Get With Our Web & UX Design Service",
    featureImageHeight: 608,
    secondaryImageHeight: 512,
    whyTitle: "Why It Matters",
    why: "A well-designed website is more than aesthetics — it’s an experience. Good design reduces frustration, simplifies decisions, and builds credibility. It turns first-time visitors into advocates and long-term users into loyal customers. With purposeful UX and thoughtful UI, we ensure your brand delivers impactful digital experiences that last.",
    cardsOne: [
      ["User-Centric Design Approach", "Your website should speak to your audience — not confuse them. Our UX methodology starts with understanding your users and shaping experiences that feel natural and effortless. By creating clear navigation, meaningful interactions, and accessible layouts across devices, we make digital experiences that engage, retain, and build trust."],
      ["Conversion-Focused UX Strategy", "Design for your business goals. Every layout choice we make aims to guide visitors toward action — whether it’s lead generation, sales, inquiry submissions, or deeper engagement. Through strategic user flows, visual hierarchy, and behaviour-driven layouts, we help your website become a growth engine."],
      ["Responsive Performance Design", "In today’s multi-device world, responsiveness isn’t optional — it’s foundational. We ensure your site looks sharp and functions flawlessly across desktop, tablet, and mobile. Fast load times, seamless interactions, and adaptive layouts create a consistent brand experience that keeps users coming back."],
    ],
    cardsTwo: [
      ["Scalable UI Foundations", "Build once, update quickly. Our modular UI systems bring consistency and flexibility to your digital presence, so adding new pages, features, or products becomes faster and cleaner over time."],
      ["Brand-Aligned Digital Interfaces", "Your visual identity should be unmistakable. We blend brand personality with usability, using purposeful typography, colour systems, spacing, and intuitive interaction elements — creating interfaces that feel like you."],
      ["Collaboration-Ready Design Delivery", "Design shouldn’t slow development. Our handoff includes detailed documentation, component specs, and asset organization that developers will appreciate — ensuring your vision transitions smoothly from design to launch."],
    ],
    gridCards: [
      ["Discovery & Strategy", "We start by understanding your audience, goals, and brand to define the right UX direction."],
      ["Wireframes & Prototypes", "We create skeletal frameworks for all key pages that map user journeys for maximum clarity and efficiency."],
      ["UI Design & Visual Brand Language", "Your website’s look & feel is crafted with care — ensuring emotional impact without sacrificing clarity or usability."],
      ["Responsive & Accessible Layouts", "We design to work beautifully on every device, while prioritising accessibility for all users."],
      ["UX Testing & Iteration", "Before launch, we test & refine based on real behaviour to make sure your users find what they need — quickly and successfully."],
      ["Developer-Ready Files", "We deliver organised, structured designs that make development faster and error-free."],
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
    featureImageHeight: 440,
    secondaryImageHeight: 440,
    groupHeadingItalic: false,
    whyTitle: "Why Influencer Marketing Matters",
    why: "Influencers build trust where ads often can’t. When done right, influencer marketing humanises your brand, strengthens credibility, and drives real engagement through voices your audience already believes in.",
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

function ContentGroup({ title, cards, image, imageHeight, italic = true, imageRight = false }) {
  if (image) {
    return (
      <section className={`mx-auto grid w-full max-w-[1248px] grid-cols-2 items-start gap-16 px-6 ${imageRight ? "pb-[92px]" : "pb-[129px]"} max-[900px]:grid-cols-1 max-[760px]:px-6`}>
        <div className={`h-[var(--feature-height)] overflow-hidden rounded-[12px] max-[900px]:aspect-[8/5] max-[900px]:h-auto ${imageRight ? "order-2 max-[900px]:order-1" : "order-1"}`} style={{ "--feature-height": `${imageHeight}px` }}>
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className={imageRight ? "order-1 max-[900px]:order-2" : "order-2"}>
          <h2 className={`font-['Instrument_Serif','Baskervville',serif] text-[34px] font-normal leading-[43px] tracking-[-0.7px] max-[760px]:text-[36px] ${italic ? "italic" : ""}`}>
            {title}
          </h2>
          <div className="mt-8 space-y-8">
            {cards.map(([heading, body]) => (
              <article key={heading}>
                <h3 className="text-[28px] font-medium leading-[36px] tracking-[-0.56px] max-[760px]:text-[22px]">
                  {heading}
                </h3>
                <p className="mt-4 text-[16px] leading-6 text-[#999]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-[92px] max-[760px]:px-5 max-[760px]:py-16">
      <div className="mb-[46px] flex items-end justify-between gap-8 max-[760px]:mb-8 max-[760px]:block">
        <h2 className="max-w-[720px] text-[48px] font-medium leading-[1.1] tracking-[-2px] max-[760px]:text-[32px] max-[760px]:tracking-[-1px]">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[16px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {cards.map(([heading, body]) => (
          <article key={heading} className="rounded-[16px] border border-white/10 bg-[#0d0d0d] p-[28px] max-[760px]:p-6">
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
    <div className="service-detail-page min-h-screen overflow-x-clip bg-[#080909] font-['Satoshi',Arial,sans-serif] text-[#fbfafc]">
      <Navbar />
      <main>
        <section className="px-6 pb-[128px] pt-[160px] text-center max-[760px]:px-6 max-[760px]:pb-16 max-[760px]:pt-[160px]">
          <div className="mx-auto max-w-[1200px]">
            <h1 className="mx-auto max-w-[736px] font-['Instrument_Serif','Baskervville',serif] text-[94px] font-normal italic leading-[1.2] max-[760px]:max-w-[262px] max-[760px]:text-[54px] max-[760px]:leading-[1.2]">
              {page.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[1200px] text-[20px] font-medium leading-[30px] tracking-[-0.4px] text-[#999] max-[760px]:mt-[27px] max-[760px]:max-w-[262px] max-[760px]:text-[14px] max-[760px]:leading-[22px]">
              {page.description}
            </p>
          </div>
        </section>

        <ContentGroup title={page.groupOne} cards={page.cardsOne} image={page.sideImage} imageHeight={page.featureImageHeight} italic={page.groupHeadingItalic} />

        <ContentGroup title={page.groupTwo} cards={page.cardsTwo} image={page.image} imageHeight={page.secondaryImageHeight} imageRight />

        {page.gridCards && page.gridTitle && (
          <ContentGroup title={page.gridTitle} cards={page.gridCards} />
        )}

        <section className="mx-auto w-full max-w-[1000px] px-6 pb-[120px] pt-[36px] text-center max-[760px]:px-5 max-[760px]:pb-20">
          <div>
            <h2 className="font-['Instrument_Serif','Baskervville',serif] text-[36px] italic leading-[43px] max-[760px]:text-[30px]">
              {page.whyTitle ?? "Why it matters"}
            </h2>
            <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-6 text-[#999]">
              {page.why}
            </p>
          </div>
        </section>

        <SiteCTA />
      </main>

      <style>{`
        @media (min-width: 1101px) {
          .service-detail-page > header { top: 24px; width: 412px; height: 56px; }
        }
        .service-detail-page {
          background: linear-gradient(180deg, #003f38 0, #011b18 130px, #080909 320px) top / 100% 320px no-repeat, #080909;
        }
      `}</style>
    </div>
  );
}

export default ServiceDetail;

