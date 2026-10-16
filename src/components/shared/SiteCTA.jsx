import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4";
import SiteFooter from "./SiteFooter";

function SiteCTA() {
  const videoRef = useRef(null);
  const spacerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // The spacer is normal-flow content after the page's <main>. As the final
  // spacer scrolls through the viewport, it exposes the fixed CTA underneath.
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "end end"],
  });

  // This is a subtle enhancement to the physical layered reveal. It reverses
  // naturally because it is tied to scroll progress, not a one-way in-view trigger.
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [0.62, 0.88, 1],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [28, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.playbackRate = 1.35;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    };

    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);
    playVideo();

    const handleInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <>
      {/* Keeps the document scrollable for the full height of the hidden CTA. */}
      <div
        ref={spacerRef}
        className="site-cta-spacer"
        aria-hidden="true"
      />

      {/* Fixed behind the page content; the preceding content uncovers it. */}
      <section
        className="site-cta-layer flex w-full flex-col justify-between overflow-hidden bg-[#0a0a0a] pt-20 text-center max-[760px]:pt-14"
        aria-label="Ready to work with Dignifyd Digital?"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(1,141,135,0.42)_0%,rgba(0,138,137,0.22)_40%,rgba(10,10,10,0.92)_72%)]" />

        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover object-center opacity-[0.68]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.35)_45%,rgba(10,10,10,0.85)_100%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[90px] bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[100px] bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : { opacity: contentOpacity, y: contentY }
          }
          className="relative z-10 my-auto flex flex-col items-center px-6 py-12 max-[760px]:px-5"
        >
          <h2 className="m-0 text-[100px] font-medium leading-[1.25] tracking-[-5px] text-[#fbfafc] max-[1024px]:text-[64px] max-[760px]:text-[52px] max-[760px]:leading-[1.15] max-[760px]:tracking-[-2.6px] max-[374px]:text-[42px] max-[374px]:tracking-[-2.1px]">
            Are you{" "}
            <em className="font-['Instrument_Serif','Baskerville',serif] font-normal italic tracking-normal">
              ready?
            </em>
          </h2>

          <p className="mb-[26px] mt-2 text-[22px] leading-[30px] tracking-[-0.44px] text-[#999] max-[760px]:text-base max-[760px]:leading-6">
            This could be the start of something big.
          </p>

          <a
            href="/contact"
            className="flex h-[68px] w-[194px] items-center justify-center rounded-full bg-[#018d87] text-base font-medium text-white no-underline transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#00a69f] hover:shadow-[0_0_30px_rgba(1,141,135,0.35)] active:scale-[0.98] max-[760px]:h-[52px] max-[760px]:w-auto max-[760px]:px-[34px]"
          >
            Book a call
          </a>
        </motion.div>

        <SiteFooter />
      </section>

      <style>{`
        /* The fixed CTA is uncovered as the page-content layer scrolls away. */
        .site-cta-spacer {
          display: block;
          width: 100%;
          height: min(736px, 100svh);
          pointer-events: none;
        }

        .site-cta-layer {
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
          height: min(736px, 100svh);
        }

        /* Apply this class to each route's main content wrapper. */
        .site-page-content {
          position: relative;
          z-index: 10;
          background: #0a0a0a;
        }

        @media (max-width: 760px) {
          .site-cta-spacer,
          .site-cta-layer {
            height: min(540px, 100svh);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-cta-layer * {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}

export default SiteCTA;
