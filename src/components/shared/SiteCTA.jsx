import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4";
import SiteFooter from "./SiteFooter";

function SiteCTA() {
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.playbackRate = 1.35;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => { });
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
    <section
      className="
        relative
        z-10
        flex
        min-h-[736px]
        w-full
        flex-col
        justify-between
        overflow-hidden
        bg-[#0a0a0a]
        pt-20
        text-center
        max-[760px]:min-h-[540px]
        max-[760px]:pt-14
      "
    >
      {/* Radiant emerald/teal ambient glow matching Figma & Live site */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(1,141,135,0.42)_0%,rgba(0,138,137,0.22)_40%,rgba(10,10,10,0.92)_72%)]"
      />

      <video
        ref={videoRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          object-cover
          object-center
          opacity-[0.68]
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle blend overlay so video glow is vivid yet text is crisp */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[linear-gradient(180deg,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.35)_45%,rgba(10,10,10,0.85)_100%)]"
      />

      {/* Top transition */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[3]
          h-[90px]
          bg-gradient-to-b
          from-[#0a0a0a]
          to-transparent
        "
      />

      {/* Bottom transition into footer */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-[100px]
          bg-gradient-to-t
          from-[#0a0a0a]
          to-transparent
        "
      />

      {/* Scroll-triggered reveal animation for CTA content */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 my-auto flex flex-col items-center px-6 py-12 max-[760px]:px-5"
      >
        <h2
          className="
            m-0
            text-[100px]
            font-medium
            leading-[1.25]
            tracking-[-5px]
            text-[#fbfafc]
            max-[1024px]:text-[64px]
            max-[760px]:text-[52px]
            max-[760px]:leading-[1.15]
            max-[760px]:tracking-[-2.6px]
            max-[374px]:text-[42px]
            max-[374px]:tracking-[-2.1px]
          "
        >
          Are you{" "}
          <em
            className="
              font-['Instrument_Serif','Baskerville',serif]
              font-normal
              italic
              tracking-normal
            "
          >
            ready?
          </em>
        </h2>

        <p
          className="
            mb-[26px]
            mt-2
            text-[22px]
            leading-[30px]
            tracking-[-0.44px]
            text-[#999]
            max-[760px]:text-base
            max-[760px]:leading-6
          "
        >
          This could be the start of something big.
        </p>

        <a
          href="/contact"
          className="
            flex
            h-[68px]
            w-[194px]
            items-center
            justify-center
            rounded-full
            bg-[#018d87]
            text-base
            font-medium
            text-white
            no-underline
            transition-all
            duration-300
            ease-out
            hover:scale-[1.02]
            hover:bg-[#00a69f]
            hover:shadow-[0_0_30px_rgba(1,141,135,0.35)]
            active:scale-[0.98]
            max-[760px]:h-[52px]
            max-[760px]:w-auto
            max-[760px]:px-[34px]
          "
        >
          Book a call
        </a>
      </motion.div>

      {/* Footer reveal animation */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      >
        <SiteFooter />
      </motion.div>
    </section>
  );
}

export default SiteCTA;