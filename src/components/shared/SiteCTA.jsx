import { useEffect, useRef } from "react";
import heroVideo from "../../assets/hero-video.mp4";
import SiteFooter from "./SiteFooter";

function SiteCTA() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.playbackRate = 1.55;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    const handleLoaded = () => {
      playVideo();
    };

    const handlePause = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("canplay", handleLoaded);
    video.addEventListener("pause", handlePause);
    document.addEventListener("visibilitychange", handleVisibility);

    playVideo();

    const retryTimer = window.setInterval(playVideo, 3000);

    return () => {
      window.clearInterval(retryTimer);
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("canplay", handleLoaded);
      video.removeEventListener("pause", handlePause);
      document.removeEventListener("visibilitychange", handleVisibility);
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
      <video
        ref={videoRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
          opacity-[0.52]
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

      {/* Main video blending layer */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(180deg,rgba(8,9,9,0.92)_0%,rgba(8,9,9,0.68)_42%,rgba(5,16,15,0.42)_72%,rgba(4,10,9,0.85)_100%)]
        "
      />

      {/* Top transition */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[2]
          h-[120px]
          bg-gradient-to-b
          from-[#0a0a0a]
          via-[#0a0a0a]/70
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
          z-[2]
          h-[130px]
          bg-gradient-to-t
          from-[#0a0a0a]
          via-[#0a0a0a]/65
          to-transparent
        "
      />

      <div className="relative z-10 my-auto flex flex-col items-center px-6 py-12 max-[760px]:px-5">
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
      </div>

      <SiteFooter />
    </section>
  );
}

export default SiteCTA;