import heroVideo from "../../assets/hero-video.mp4";
import logo from "../../assets/logo.png";

function VideoSection() {
  return (
    <section className="video-section">
      <video autoPlay muted loop playsInline aria-label="Dignifyd Digital brand film">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <img className="video-logo" src={logo} alt="Dignifyd Digital" />
    </section>
  );
}

export default VideoSection;
