import logo from "../../assets/logo.png";

function SiteFooter() {
  return (
    <footer
      className="
        relative
        z-20
        -mt-[87px]
        flex
        min-h-[87px]
        w-full
        bg-transparent
        text-[#999]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          items-end
          justify-between
          px-6
          pb-[26px]
          pt-[26px]

          max-[760px]:flex-col
          max-[760px]:items-center
          max-[760px]:justify-center
          max-[760px]:gap-4
          max-[760px]:px-5
        "
      >
        <nav
          className="
            flex
            gap-[22px]
            text-sm

            max-[760px]:gap-4
            max-[760px]:text-xs
          "
          aria-label="Footer navigation"
        >
          <a
            href="/"
            className="transition-colors duration-200 hover:text-[#fbfafc]"
          >
            Home
          </a>

          <a
            href="/about"
            className="transition-colors duration-200 hover:text-[#fbfafc]"
          >
            About
          </a>

          <a
            href="/services"
            className="transition-colors duration-200 hover:text-[#fbfafc]"
          >
            Portfolio
          </a>

          <a
            href="/contact"
            className="transition-colors duration-200 hover:text-[#fbfafc]"
          >
            Contact Us
          </a>
        </nav>

        <p
          className="
            m-0
            flex
            items-center
            gap-[7px]
            text-sm

            max-[760px]:text-xs
          "
        >
          Created by

          <img
            src={logo}
            alt="Dignifyd"
            className="
              block
              w-[78px]
              brightness-0
              invert

              max-[760px]:w-[60px]
            "
          />
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;