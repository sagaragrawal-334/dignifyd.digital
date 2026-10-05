function Hero() {
  return (
    <section className="hero">
      <h1>
        <span className="hero-serif">Digital</span>{" "}
        <span>Execution,</span>
        <br />
        <span>built for scale.</span>
      </h1>

      <p>
        Move beyond fragmented vendors with
        <br className="desktop-break" />
        integrated, growth-driven digital solutions.
      </p>

      <div className="hero-actions">
        <a
          className="button"
          href="mailto:hello@dignifyd.digital"
        >
          Start Your Digital Journey
        </a>

        <a
          className="button button-outline"
          href="mailto:hello@dignifyd.digital"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}

export default Hero;