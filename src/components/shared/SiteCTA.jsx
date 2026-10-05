import { useEffect, useRef } from "react";
import heroVideo from "../../assets/hero-video.mp4";

function SiteCTA() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Browser may briefly defer autoplay; retry when media is ready.
      }
    };

    const handleLoaded = () => {
      playVideo();
    };

    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("canplay", handleLoaded);
    document.addEventListener("visibilitychange", handleVisibility);

    playVideo();

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("canplay", handleLoaded);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-[736px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
        text-center
        max-[760px]:min-h-[500px]
        max-[760px]:px-5
        max-[760px]:py-16
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
          opacity-80
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

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(90deg,rgba(8,9,9,0.64),rgba(8,9,9,0.18)_72%),linear-gradient(0deg,rgba(2,3,3,0.48),transparent_32%)]
        "
      />

      <div className="relative z-10 flex flex-col items-center">
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
    </section>
  );
}

export default SiteCTA;
