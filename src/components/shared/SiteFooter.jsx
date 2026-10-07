import logo from "../../assets/logo.png";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Portfolio</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <p className="site-footer-created">
          <span>Created by</span>

          <img
            src={logo}
            alt="Dignifyd"
          />
        </p>
      </div>

      <style>{`
        .site-footer {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 224.62px;
          background: transparent;
          color: #999999;
        }

        .site-footer-inner {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 87px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 0 120px 32px;
        }

        .site-footer-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 276.19px;
          height: 17px;
        }

        .site-footer-nav a {
          display: block;
          margin: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: -0.28px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .site-footer-nav a:hover {
          color: #FBFAFC;
        }

        .site-footer-created {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 23px;
          margin: 0;
          color: #999999;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: -0.28px;
          white-space: nowrap;
        }

        .site-footer-created img {
          display: block;
          width: 78px;
          height: auto;
          filter: brightness(0) invert(1);
        }

        @media (max-width: 900px) {
          .site-footer {
            height: 180px;
          }

          .site-footer-inner {
            height: auto;
            padding: 0 24px 24px;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            gap: 18px;
          }

          .site-footer-nav {
            width: auto;
            max-width: 100%;
            height: 17px;
            gap: 18px;
          }

          .site-footer-nav a {
            font-size: 12px;
            line-height: 15px;
            letter-spacing: -0.24px;
          }

          .site-footer-created {
            font-size: 12px;
            line-height: 15px;
          }

          .site-footer-created img {
            width: 60px;
          }
        }
      `}</style>
    </footer>
  );
}

export default SiteFooter;