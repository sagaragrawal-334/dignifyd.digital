import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

// Existing project assets are fallbacks only. The named exports are preferred
// when present because they match the image sections shown in the Figma file.
import creativeFallback from "../../assets/services/Creative Content That Builds Brands.svg";
import digitalFallback from "../../assets/services/Digital Marketing That Drives Growth.svg";
import brandFallback from "../../assets/services/Building Brands With Clear Purpose.svg";
import webFallback from "../../assets/services/Designing Websites That Perform.svg";
import influencerFallback from "../../assets/services/Influencer Marketing.svg";
import gallery02 from "../../assets/gallery-02.jpeg";
import gallery05 from "../../assets/gallery-05.png";
import gallery06 from "../../assets/gallery-06.svg";
import gallery09 from "../../assets/gallery-09.jpeg";

// Resolve the image exports the user saved in src/assets by exact filename.
// Keeping the fallbacks prevents a build failure if an export was renamed.
const assetUrls = import.meta.glob("../../assets/**/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const normalizeAssetName = (value) =>
  value.split("/").pop().replace(/[^a-z0-9]/gi, "").toLowerCase();

function findAsset(names, fallback) {
  const candidates = names.map(normalizeAssetName);
  const entries = Object.entries(assetUrls);

  for (const candidate of candidates) {
    const found = entries.find(([path]) => normalizeAssetName(path) === candidate);
    if (found) return found[1];
  }

  // Filename punctuation sometimes differs between local exports. Match only
  // when one candidate's normalized basename is contained in the full basename.
  for (const candidate of candidates) {
    const found = entries.find(([path]) =>
      normalizeAssetName(path).includes(candidate) || candidate.includes(normalizeAssetName(path)),
    );
    if (found) return found[1];
  }

  return fallback;
}

const serviceImages = {
  brandWhatWeDo: findAsset(["What We Do.png"], brandFallback),
  brandExpression: findAsset(["Brand Expression.png"], gallery06),
  creativeStrategy: findAsset(["Creative Strategy & Execution.png"], creativeFallback),
  creativeSystems: findAsset(["Creative Systems That Scale.png"], gallery02),
  digitalStrategy: findAsset(
    ["Performance Led Marketing Strategy.png", "Performance Led Marketing Strategy.jpg"],
    digitalFallback,
  ),
  digitalOptimisation: findAsset(
    ["Optimisation & Long Term Growth.png", "Optimisation & Long Term Growth.jpg"],
    gallery06,
  ),
  webExperiences: findAsset(["Web Experiences Built With Purpose.png"], webFallback),
  designSystems: findAsset(["Design Systems That Scale.png"], gallery09),
  influencerWhatWeDo: findAsset(["What We Do.im.png", "What We Do im.png"], influencerFallback),
  influencerPerformance: findAsset(["Execution & Performance.png"], gallery05),
};

const pages = {
  "/creative-and-content": {
    pageClass: "creative-content",
    title: "Creative & Content That Connects",
    titleLines: ["Creative &", "Content That", "Connects"],
    description:
      "We craft compelling creative content that tells your brand story, captivates audiences, and drives engagement across digital platforms. From visual design to strategic storytelling.",
    descriptionHeight: 60,
    imageOne: serviceImages.creativeStrategy,
    imageTwo: serviceImages.creativeSystems,
    imageOneHeight: 440.42,
    imageTwoHeight: 440.42,
    groupOne: "Creative Strategy & Execution",
    groupTwo: "Creative Systems That Scale",
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
    whyTitle: "Why Creative & Content Matters",
    why:
      "Creative content isn’t just about looking good — it’s about communicating purposefully. The right creative strategy builds emotional connection, improves brand recall, and drives measurable engagement in today’s noisy digital landscape.",
    whyTop: 1807.23,
    canvasHeight: 2058.43,
  },
  "/digital-marketing": {
    pageClass: "digital-marketing",
    title: "Digital Marketing That Drives Growth",
    titleLines: ["Digital Marketing", "That Drives", "Growth"],
    description:
      "We plan, execute, and optimise digital marketing strategies using data, creativity, and technology — helping brands increase visibility, attract qualified leads, and achieve measurable business growth.",
    descriptionHeight: 60,
    imageOne: serviceImages.digitalStrategy,
    imageTwo: serviceImages.digitalOptimisation,
    imageOneHeight: 440.42,
    imageTwoHeight: 440.42,
    groupOne: "Performance Led Marketing Strategy",
    groupTwo: "Optimisation & Long Term Growth",
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
    whyTitle: "Why Digital Marketing Matters",
    why:
      "In today’s digital world, visibility and engagement are essential. Effective digital marketing helps you attract the right audience, build meaningful connections, and grow your business with measurable results and strategic insights.",
    whyTop: 1807.23,
    canvasHeight: 2058.43,
  },
  "/brand-strategy": {
    pageClass: "brand-strategy",
    title: "Building Brands With Clear Direction",
    titleLines: ["Building Brands", "With Clear", "Direction"],
    description:
      "We help brands define who they are, what they stand for, and how they communicate. Our brand strategies bring clarity, consistency, and focus — so every touchpoint works toward long-term growth and recognition.",
    descriptionHeight: 60,
    imageOne: serviceImages.brandWhatWeDo,
    imageTwo: serviceImages.brandExpression,
    imageOneHeight: 440.42,
    imageTwoHeight: 308.02,
    groupOne: "What We Do",
    groupTwo: "Brand Expression",
    cardsOne: [
      ["Brand Discovery", "We understand your business, audience, and market to uncover insights that shape a strong and authentic brand foundation."],
      ["Brand Positioning", "We define what makes your brand different and why it matters — helping you stand out clearly in competitive markets."],
      ["Brand Architecture", "We structure your brand, services, and offerings in a way that’s easy to understand and scalable as you grow."],
    ],
    cardsTwo: [
      ["Messaging & Voice", "We create clear messaging frameworks and brand voice guidelines to ensure consistency across all communication."],
      ["Visual Strategy Direction", "We define the visual direction that guides design decisions — ensuring your brand looks cohesive, confident, and recognizable everywhere."],
    ],
    whyTitle: "Why Brand Strategy Matters",
    why:
      "A strong brand strategy aligns perception with purpose. It builds trust, improves recall, and ensures your brand communicates with clarity at every stage of growth — not just today, but in the long run.",
    whyTop: 1674.83,
    canvasHeight: 1926.03,
  },
  "/web-and-ux-design": {
    pageClass: "web-ux-design",
    title: "Designing Websites That Perform",
    titleLines: ["Designing", "Websites That", "Perform"],
    description:
      "We craft purposeful digital experiences that are visually stunning, intuitively usable, and strategically built to help brands convert visitors into loyal customers. Combining research-driven UX, beautiful UI, and modern technologies, our designs don’t just look great — they perform.",
    descriptionHeight: 90,
    imageOne: serviceImages.webExperiences,
    imageTwo: serviceImages.designSystems,
    imageOneHeight: 608,
    imageTwoHeight: 512,
    groupOne: "Web Experiences Built With Purpose",
    groupTwo: "Design Systems That Scale",
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
    extraTitle: "What You Get With Our Web & UX Design Service",
    extraItems: [
      ["Discovery & Strategy", "We start by understanding your audience, goals, and brand to define the right UX direction."],
      ["Wireframes & Prototypes", "We create skeletal frameworks for all key pages that map user journeys for maximum clarity and efficiency."],
      ["UI Design & Visual Brand Language", "Your website’s look & feel is crafted with care — ensuring emotional impact without sacrificing clarity or usability."],
      ["Responsive & Accessible Layouts", "We design to work beautifully on every device, while prioritising accessibility for all users."],
      ["UX Testing & Iteration", "Before launch, we test & refine based on real behaviour to make sure your users find what they need — quickly and successfully."],
      ["Developer-Ready Files", "We deliver organised, structured designs that make development faster and error-free."],
    ],
    whyTitle: "Why It Matters",
    why:
      "A well-designed website is more than aesthetics — it’s an experience. Good design reduces frustration, simplifies decisions, and builds credibility. It turns first-time visitors into advocates and long-term users into loyal customers. With purposeful UX and thoughtful UI, we ensure your brand delivers impactful digital experiences that last.",
    whyTop: 2927.21,
    canvasHeight: 3147.21,
  },
  "/influencer-marketing": {
    pageClass: "influencer-marketing",
    title: "Influencer Marketing That Feels Authentic",
    titleLines: ["Influencer", "Marketing That", "Feels Authentic"],
    description:
      "We connect brands with the right creators to build trust, spark conversations, and drive real impact. Our influencer marketing strategies focus on authenticity, relevance, and measurable outcomes.",
    descriptionHeight: 60,
    imageOne: serviceImages.influencerWhatWeDo,
    imageTwo: serviceImages.influencerPerformance,
    imageOneHeight: 440.42,
    imageTwoHeight: 440.42,
    groupOne: "What We Do",
    groupTwo: "Execution & Performance",
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
    whyTitle: "Why Influencer Marketing Matters",
    why:
      "Influencers build trust where ads often can’t. When done right, influencer marketing humanises your brand, strengthens credibility, and drives real engagement through voices your audience already believes in.",
    whyTop: 1807.23,
    canvasHeight: 2058.43,
  },
};

function DetailCards({ cards, topPositions, bodyHeights = [] }) {
  return cards.map(([heading, body], index) => (
    <article
      key={heading}
      className="service-detail-card"
      style={{ top: `${topPositions[index]}px` }}
    >
      <h3>{heading}</h3>
      <p style={{ height: `${bodyHeights[index] ?? 48}px` }}>{body}</p>
    </article>
  ));
}

function ServiceDetail({ path }) {
  const page = pages[path] ?? pages["/creative-and-content"];
  const isWebUx = path === "/web-and-ux-design";
  const rowOneTops = isWebUx ? [75.2, 275.2, 475.2] : [75.2, 207.61, 340.02];
  const rowTwoTops = isWebUx ? [75.2, 227.2, 379.2] : [75.2, 207.61, 340.02];
  const rowOneBodyHeights = isWebUx ? [72, 72, 72] : [48, 48, 48];
  const rowTwoBodyHeights = isWebUx ? [72, 48, 48] : [48, 48, 48];
  const rowTwoTop = isWebUx ? 1286.39 : 1118.81;

  return (
    <div className={`service-detail-page ${page.pageClass}`}>
      <Navbar />

      <main>
        <div className="service-detail-canvas" style={{ height: `${page.canvasHeight}px` }}>
          <div className="service-content-parent">
            <h1 className="service-detail-hero-title">
              {page.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <p
              className={`service-detail-hero-description ${isWebUx ? "is-three-lines" : ""}`}
              style={{ height: `${page.descriptionHeight}px` }}
            >
              {page.description}
            </p>

            <section className={`service-detail-row service-detail-row-one ${isWebUx ? "is-web-ux-row-one" : ""}`}>
              <div
                className="service-detail-image service-detail-image-one"
                style={{ height: `${page.imageOneHeight}px` }}
              >
                <img src={page.imageOne} alt="" />
              </div>

              <div className="service-detail-text service-detail-text-one">
                <h2 className="service-detail-section-heading">{page.groupOne}</h2>
                <DetailCards
                  cards={page.cardsOne}
                  topPositions={rowOneTops}
                  bodyHeights={rowOneBodyHeights}
                />
              </div>
            </section>

            <section className={`service-detail-row service-detail-row-two ${isWebUx ? "is-web-ux-row-two" : ""}`} style={{ top: `${rowTwoTop}px` }}>
              <div
                className="service-detail-image service-detail-image-two"
                style={{ height: `${page.imageTwoHeight}px` }}
              >
                <img src={page.imageTwo} alt="" />
              </div>

              <div className="service-detail-text service-detail-text-two">
                <h2 className="service-detail-section-heading">{page.groupTwo}</h2>
                <DetailCards
                  cards={page.cardsTwo}
                  topPositions={rowTwoTops}
                  bodyHeights={rowTwoBodyHeights}
                />
              </div>
            </section>
          </div>

          {isWebUx && (
            <section className="service-detail-extra-list">
              <h2>{page.extraTitle}</h2>
              {page.extraItems.map(([heading, body], index) => (
                <article
                  className="service-detail-extra-item"
                  key={heading}
                  style={{ top: `${54.41 + index * 112}px` }}
                >
                  <h3>{heading}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </section>
          )}

          <section className={`service-detail-why ${isWebUx ? "service-detail-why-web-ux" : ""}`} style={{ top: `${page.whyTop}px` }}>
            <div className="service-detail-why-inner">
              <h2>{page.whyTitle}</h2>
              <p>{page.why}</p>
            </div>
          </section>
        </div>

        <SiteCTA />
      </main>

      <style>{`
        .service-detail-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow-x: clip;
          background: #0a0a0a;
          color: #fbfafc;
          font-family: "Inter", Arial, sans-serif;
          isolation: isolate;
        }

        .service-detail-page > header {
          top: 42px !important;
        }

        .service-detail-page > main {
          position: relative;
          width: 100%;
          z-index: 1;
        }

        .service-detail-canvas {
          position: relative;
          width: 1440px;
          max-width: 100%;
          margin: 0 auto;
          overflow: visible;
          background: #0a0a0a;
          isolation: isolate;
        }

        /* Figma Ellipse 2 properties: 1480 × 1016, left -20, top -698, blur 150. */
        .service-detail-canvas::before {
          content: "";
          position: absolute;
          z-index: 0;
          pointer-events: none;
          top: -698px;
          left: -20px;
          width: 1480px;
          height: 1016px;
          border-radius: 50%;
          background: linear-gradient(90deg, #012a2c 0%, #008a89 100%);
          filter: blur(150px);
        }

        .service-content-parent {
          position: absolute;
          z-index: 1;
          top: 184px;
          left: 120px;
          width: 1200px;
          height: 1426.83px;
        }

        /* Figma title: 736 × 339, left 232, top -5, Baskerville 94/112.8 italic. */
        .service-detail-hero-title {
          position: absolute;
          top: -5px;
          left: 232px;
          width: 736px;
          height: 339px;
          margin: 0;
          padding: 0;
          color: #fbfafc;
          font-family: "Baskerville", serif;
          font-size: 94px;
          font-weight: 400;
          font-style: italic;
          line-height: 112.8px;
          letter-spacing: 0;
          text-align: center;
        }

        .service-detail-hero-title span {
          display: block;
          height: 112.8px;
          white-space: nowrap;
        }

        /* Figma description: 837 × 60, left 182, top 364, Inter 500 20/30/-0.4. */
        .service-detail-hero-description {
          position: absolute;
          top: 364px;
          left: 182px;
          width: 837px;
          margin: 0;
          padding: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: -0.4px;
          text-align: center;
        }

        .service-detail-hero-description.is-three-lines {
          height: 90px;
        }

        .service-detail-row {
          position: absolute;
          left: 0;
          width: 1200px;
          height: 440.42px;
        }

        .service-detail-row-one {
          top: 550.39px;
        }

        .service-detail-row-two {
          top: 1118.81px;
        }

        .service-detail-image,
        .service-detail-text {
          position: absolute;
          top: 0;
          width: 568px;
        }

        .service-detail-image {
          overflow: hidden;
          border-radius: 12px;
          background: #0a0a0a;
        }

        .service-detail-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-detail-image-one {
          left: 0;
        }

        .service-detail-image-two {
          left: 632px;
        }

        .service-detail-text-one {
          left: 632px;
          height: 608px;
        }

        .service-detail-text-two {
          left: 0;
          height: 512px;
        }

        .service-detail-section-heading {
          position: absolute;
          top: -2px;
          left: 0;
          width: 568px;
          height: 47px;
          margin: 0;
          padding: 0;
          color: #fbfafc;
          font-family: "Baskerville", serif;
          font-size: 36px;
          font-weight: 400;
          font-style: italic;
          line-height: 47px;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .service-detail-card {
          position: absolute;
          left: 0;
          width: 568px;
          height: 100.41px;
          margin: 0;
          padding: 0;
        }

        .service-detail-card h3 {
          width: max-content;
          max-width: 568px;
          height: 35px;
          margin: 0;
          padding: 0;
          color: #fbfafc;
          font-family: "Inter", Arial, sans-serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 35px;
          letter-spacing: -0.56px;
          white-space: nowrap;
        }

        .service-detail-card p {
          position: absolute;
          top: 54.41px;
          left: 0;
          width: 568px;
          margin: 0;
          padding: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.32px;
          overflow: hidden;
        }

        .service-detail-row-one.is-web-ux-row-one {
          height: 608px;
        }

        .service-detail-row-one.is-web-ux-row-one .service-detail-text-one {
          height: 608px;
        }

        .service-detail-row-two.is-web-ux-row-two {
          height: 512px;
        }

        .service-detail-row-two.is-web-ux-row-two .service-detail-text-two {
          height: 512px;
        }

        /* UI/UX cards have longer copy; these frames are deliberately taller. */
        .web-ux-design .service-detail-row-one .service-detail-card {
          height: 172px;
        }

        .web-ux-design .service-detail-row-one .service-detail-card p {
          height: 72px;
        }

        .web-ux-design .service-detail-row-two .service-detail-card {
          height: 152px;
        }

        .web-ux-design .service-detail-row-two .service-detail-card p {
          height: 48px;
        }

        .web-ux-design .service-detail-row-two .service-detail-card:first-of-type p {
          height: 72px;
        }

        .service-detail-extra-list {
          position: absolute;
          z-index: 1;
          top: 2110.39px;
          left: 120px;
          width: 1200px;
          height: 690px;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        /* Figma list heading: 786 × 47, left 208.5, top -2, Baskerville 36/47 italic. */
        .service-detail-extra-list > h2 {
          position: absolute;
          top: -2px;
          left: 208.5px;
          width: 786px;
          height: 47px;
          margin: 0;
          padding: 0;
          color: #ffffff;
          font-family: "Baskerville", serif;
          font-size: 36px;
          font-weight: 400;
          font-style: italic;
          line-height: 47px;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .service-detail-extra-item {
          position: absolute;
          left: 0;
          width: 1200px;
          height: 80px;
          margin: 0;
          padding: 0;
        }

        .service-detail-extra-item h3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 1200px;
          height: 35px;
          margin: 0;
          padding: 0;
          color: #fbfafc;
          font-family: "Inter", Arial, sans-serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 35px;
          letter-spacing: -0.56px;
          text-align: center;
        }

        /* Figma list-description frames: 900 × 20, left 150, top 54.41. */
        .service-detail-extra-item p {
          position: absolute;
          top: 54.41px;
          left: 150px;
          width: 900px;
          height: 20px;
          margin: 0;
          padding: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: -0.32px;
          text-align: center;
        }

        .service-detail-why {
          position: absolute;
          z-index: 1;
          left: 0;
          width: 1440px;
          height: 251.2px;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #0a0a0a;
          /* Figma properties: X 0, Y 32, Blur 64, Spread 24, color #0A0A0A. */
          box-shadow: 0 32px 64px 24px #0a0a0a;
        }

        .service-detail-why-inner {
          position: absolute;
          top: 64px;
          left: 120px;
          width: 1200px;
          height: 123.2px;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        .service-detail-why-inner h2 {
          position: absolute;
          top: -2px;
          left: 0;
          width: 1200px;
          height: 47px;
          margin: 0;
          padding: 0;
          color: #ffffff;
          font-family: "Baskerville", serif;
          font-size: 36px;
          font-weight: 400;
          font-style: italic;
          line-height: 47px;
          letter-spacing: 0;
          text-align: center;
        }

        .service-detail-why-inner p {
          position: absolute;
          top: 54.41px;
          left: 150px;
          width: 900px;
          height: 48px;
          margin: 0;
          padding: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.32px;
          text-align: center;
        }

        .service-detail-why-web-ux {
          height: 220px;
          box-shadow: none;
          background: #0a0a0a;
        }

        .service-detail-why-web-ux .service-detail-why-inner {
          top: 0;
          height: 147.2px;
        }

        .service-detail-why-web-ux .service-detail-why-inner p {
          top: 75.2px;
          height: 72px;
        }

        @media (min-width: 901px) and (max-width: 1439px) {
          .service-detail-canvas {
            width: 1440px;
            max-width: none;
            margin-left: calc((100vw - 1440px) / 2);
          }
        }

        @media (max-width: 900px) {
          .service-detail-page > header {
            top: 20px !important;
          }

          .service-detail-canvas {
            width: 100%;
            height: auto !important;
            padding: 150px 24px 64px;
            overflow: hidden;
          }

          .service-detail-canvas::before {
            top: -320px;
            left: 50%;
            width: 1000px;
            height: 700px;
            transform: translateX(-50%);
          }

          .service-content-parent {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
          }

          .service-detail-hero-title {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            font-size: 54px;
            line-height: 64px;
          }

          .service-detail-hero-title span {
            height: 64px;
            white-space: normal;
          }

          .service-detail-hero-description,
          .service-detail-hero-description.is-three-lines {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto !important;
            margin-top: 28px;
            font-size: 14px;
            line-height: 22px;
          }

          .service-detail-row,
          .service-detail-row-one,
          .service-detail-row-two {
            position: relative;
            top: auto !important;
            left: auto;
            display: flex;
            flex-direction: column;
            gap: 28px;
            width: 100%;
            height: auto !important;
            margin-top: 64px;
          }

          .service-detail-row-two {
            flex-direction: column-reverse;
          }

          .service-detail-image,
          .service-detail-image-one,
          .service-detail-image-two {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto !important;
            aspect-ratio: 568 / 440.42;
          }

          .web-ux-design .service-detail-image-one {
            aspect-ratio: 568 / 608;
          }

          .web-ux-design .service-detail-image-two {
            aspect-ratio: 568 / 512;
          }

          .service-detail-text,
          .service-detail-text-one,
          .service-detail-text-two {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
          }

          .service-detail-section-heading {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            white-space: normal;
          }

          .service-detail-card,
          .web-ux-design .service-detail-row-one .service-detail-card,
          .web-ux-design .service-detail-row-two .service-detail-card {
            position: relative;
            top: auto !important;
            left: auto;
            width: 100%;
            height: auto;
            margin-top: 28px;
          }

          .service-detail-card h3 {
            width: 100%;
            height: auto;
            white-space: normal;
            font-size: 22px;
            line-height: 29px;
          }

          .service-detail-card p,
          .web-ux-design .service-detail-row-one .service-detail-card p,
          .web-ux-design .service-detail-row-two .service-detail-card p {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto !important;
            margin-top: 12px;
            font-size: 15px;
            line-height: 23px;
          }

          .service-detail-extra-list {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            margin-top: 72px;
          }

          .service-detail-extra-list > h2 {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            font-size: 30px;
            line-height: 40px;
            white-space: normal;
          }

          .service-detail-extra-item {
            position: relative;
            top: auto !important;
            left: auto;
            width: 100%;
            height: auto;
            margin-top: 28px;
          }

          .service-detail-extra-item h3 {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            font-size: 22px;
            line-height: 29px;
          }

          .service-detail-extra-item p {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            margin-top: 10px;
            font-size: 14px;
            line-height: 21px;
          }

          .service-detail-why,
          .service-detail-why-web-ux {
            position: relative;
            top: auto !important;
            left: -24px;
            width: calc(100% + 48px);
            height: auto;
            min-height: 210px;
            margin-top: 72px;
          }

          .service-detail-why-inner {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            padding: 48px 24px;
          }

          .service-detail-why-inner h2 {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            font-size: 32px;
            line-height: 40px;
          }

          .service-detail-why-inner p,
          .service-detail-why-web-ux .service-detail-why-inner p {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            margin-top: 14px;
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>
    </div>
  );
}

export default ServiceDetail;
