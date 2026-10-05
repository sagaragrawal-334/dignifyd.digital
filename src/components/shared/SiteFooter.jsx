import logo from "../../assets/logo.png";

function SiteFooter() {
  return (
    <footer className="mx-auto flex min-h-[87px] w-full max-w-[1200px] items-center justify-between px-6 text-[#999] max-[760px]:min-h-0 max-[760px]:flex-col max-[760px]:gap-5 max-[760px]:px-5 max-[760px]:py-[26px]">
      <nav className="flex gap-[22px] text-sm max-[760px]:gap-4 max-[760px]:text-xs" aria-label="Footer navigation">
        <a href="/" className="transition-colors hover:text-[#fbfafc]">Home</a>
        <a href="/about" className="transition-colors hover:text-[#fbfafc]">About</a>
        <a href="/services" className="transition-colors hover:text-[#fbfafc]">Portfolio</a>
        <a href="/contact" className="transition-colors hover:text-[#fbfafc]">Contact Us</a>
      </nav>

      <p className="m-0 flex items-center gap-[7px] text-sm max-[760px]:text-xs">
        Created by
        <img src={logo} alt="Dignifyd" className="w-[78px] brightness-0 invert max-[760px]:w-[60px]" />
      </p>
    </footer>
  );
}

export default SiteFooter;
