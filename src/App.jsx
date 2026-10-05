import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import ServiceDetail from "./components/services/ServiceDetail";
import Contact from "./components/contact/Contact";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/services") return <Services />;
  if (path === "/contact") return <Contact />;

  const servicePaths = {
    "/creative-and-content": "/creative-and-content",
    "/digital-marketing": "/digital-marketing",
    "/brand-strategy": "/brand-strategy",
    "/web-and-ux-design": "/web-and-ux-design",
    "/influencer-marketing": "/influencer-marketing",
    "/services/creative-content": "/creative-and-content",
    "/services/digital-marketing": "/digital-marketing",
    "/services/brand-strategy": "/brand-strategy",
    "/services/ui-ux-design": "/web-and-ux-design",
    "/services/influencer-marketing": "/influencer-marketing",
  };

  if (servicePaths[path]) return <ServiceDetail path={servicePaths[path]} />;

  return <Home />;
}

export default App;
