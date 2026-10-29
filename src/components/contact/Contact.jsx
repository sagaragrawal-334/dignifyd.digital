import { useState } from "react";
import Navbar from "../navbar/Navbar";
import SiteCTA from "../shared/SiteCTA";

import london from "../../assets/contact/London.svg";
import illinois from "../../assets/contact/Illinois.svg";
import calgary from "../../assets/contact/Calgary.svg";
import dubai from "../../assets/contact/Dubai.svg";
import delhiNcr from "../../assets/contact/Delhi NCR.svg";

const locations = [
  {
    city: "London",
    country: "United Kingdom",
    address: "4 Winsley Street London W1W 8HF",
    phone: "+44-738-030-7979",
    skyline: london,
  },
  {
    city: "Illinois",
    country: "U.S.A",
    address: "245 W Roosevelt Rd, West Chicago, IL 60185, USA",
    phone: "+1-877-735-0397",
    skyline: illinois,
  },
  {
    city: "Calgary",
    country: "Canada",
    address: "246, Stewart Green St. Calgary, T3H 3C8",
    phone: "+1-872-318-4555",
    skyline: calgary,
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Level 3, Convention Tower, World Trade Center",
    phone: "+971-501-599-266",
    skyline: dubai,
  },
  {
    city: "Delhi NCR",
    country: "India",
    address: "Ground Floor, F40, Sector 6, Noida 201301",
    phone: "+91-120-450-6748",
    skyline: delhiNcr,
  },
];

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const apiUrl = (import.meta.env.VITE_CONTACT_API_URL || "").trim();

    const payload = {
      firstName: String(formData.get("firstName") || "").trim(),
      lastName: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("mobile") || "").trim(),
      requirements: String(formData.get("requirements") || "").trim(),
    };

    setStatus({ type: "", message: "" });

    if (!payload.firstName || !payload.lastName || !payload.email) {
      setStatus({
        type: "error",
        message: "Please enter your first name, last name, and email address.",
      });
      return;
    }

    if (!apiUrl) {
      setStatus({
        type: "error",
        message: "The contact API URL is missing. Check VITE_CONTACT_API_URL in .env.local, then restart Vite.",
      });
      console.error("Contact API configuration error: VITE_CONTACT_API_URL is empty.");
      return;
    }

    if (!/^https?:\/\//i.test(apiUrl)) {
      setStatus({
        type: "error",
        message: "The contact API URL must start with https:// or http://.",
      });
      console.error("Contact API configuration error: invalid URL format.");
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      console.info("Contact form: sending request to configured API endpoint.");

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const responseText = await response.text();
      let result = null;
      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = { message: responseText };
        }
      }

      if (!response.ok) {
        const apiMessage =
          typeof result?.message === "string"
            ? result.message
            : typeof result?.error === "string"
              ? result.error
              : `The API returned HTTP ${response.status}.`;
        throw new Error(apiMessage);
      }

      setStatus({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully.",
      });
      form.reset();
      console.info(`Contact form: API returned HTTP ${response.status}.`);
    } catch (error) {
      console.error("Contact API error:", error);

      let message = "Unable to submit your enquiry. Please try again.";
      if (error?.name === "AbortError") {
        message = "The API took too long to respond. Please try again or contact the site team.";
      } else if (error instanceof TypeError) {
        message = "Could not connect to the contact API. Check the API URL, CORS settings, and browser Console/Network errors.";
      } else if (error?.message) {
        message = error.message;
      }

      setStatus({ type: "error", message });
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="top"
      className="
        contact-page
        min-h-screen
        overflow-x-clip
        bg-[#080909]
        font-['Inter',Arial,sans-serif]
        text-[#fbfafc]
      "
    >
      <Navbar />

      <main className="site-page-content w-full">
        <section
          aria-labelledby="contact-title"
          className="
            flex
            min-h-[913px]
            w-full
            flex-col
            items-center
            bg-[radial-gradient(ellipse_85%_48%_at_68%_0%,rgba(0,110,103,0.62),transparent_75%),#080909]
            px-6
            pb-[74px]
            pt-[160px]
            text-center

            max-[1100px]:pt-[170px]
            max-[760px]:min-h-0
            max-[760px]:px-5
            max-[760px]:pb-16
            max-[760px]:pt-[130px]
          "
        >
          <h1
            id="contact-title"
            className="
              m-0
              text-[70px]
              font-medium
              leading-[88px]
              tracking-[-3.5px]
              text-[#fbfafc]

              max-[760px]:text-[52px]
              max-[760px]:leading-[60px]
              max-[760px]:tracking-[-2.6px]
            "
          >
            Book a{" "}
            <em
              className="
                font-['Instrument_Serif','Baskerville',serif]
                font-normal
                italic
                tracking-normal
              "
            >
              <span className="font-['Baskerville',serif]">call</span>
              <span className="font-['Instrument_Serif',serif]">.</span>
            </em>
          </h1>

          <p
            className="
              mx-auto
              mt-[18px]
              max-w-[628px]
              text-[20px]
              font-medium
              leading-[30px]
              tracking-[-0.4px]
              text-[#999]

              max-[760px]:mt-5
              max-[760px]:text-base
              max-[760px]:leading-[25px]
            "
          >
            Ready to take the next step? Let’s schedule a call to discuss
            <br className="max-[760px]:hidden" /> how we can help your business
            grow and succeed online.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="
              mx-auto
              mt-[64px]
              grid
              w-full
              max-w-[800px]
              gap-6
              text-left

              max-[760px]:mt-10
              max-[760px]:gap-5
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-4

                max-[760px]:grid-cols-1
                max-[760px]:gap-5
              "
            >
              <label
                className="
                  grid
                  gap-2
                  text-xs
                  font-medium
                  leading-4
                  text-[#fbfafc]

                  max-[760px]:text-[13px]
                "
              >
                First Name

                <input
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Peter"
                  required
                  className="
                    h-[50px]
                    w-full
                    rounded-[13px]
                    border
                    border-white/10
                    bg-[#151515]
                    px-4
                    text-xs
                    font-normal
                    leading-[18px]
                    text-[#fbfafc]
                    outline-none
                    transition-colors
                    duration-200
                    placeholder:text-[#999]
                    focus:border-[#018d87]
                  "
                />
              </label>

              <label
                className="
                  grid
                  gap-2
                  text-xs
                  font-medium
                  leading-4
                  text-[#fbfafc]

                  max-[760px]:text-[13px]
                "
              >
                Last Name

                <input
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Parker"
                  required
                  className="
                    h-[50px]
                    w-full
                    rounded-[13px]
                    border
                    border-white/10
                    bg-[#151515]
                    px-4
                    text-xs
                    font-normal
                    leading-[18px]
                    text-[#fbfafc]
                    outline-none
                    transition-colors
                    duration-200
                    placeholder:text-[#999]
                    focus:border-[#018d87]
                  "
                />
              </label>
            </div>

            <label
              className="
                grid
                gap-2
                text-xs
                font-medium
                leading-4
                text-[#fbfafc]

                max-[760px]:text-[13px]
              "
            >
              Email

              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="peter@parker.com"
                required
                className="
                  h-[50px]
                  w-full
                  rounded-[13px]
                  border
                  border-white/10
                  bg-[#151515]
                  px-4
                  text-xs
                  font-normal
                  leading-[18px]
                  text-[#fbfafc]
                  outline-none
                  transition-colors
                  duration-200
                  placeholder:text-[#999]
                  focus:border-[#018d87]
                "
              />
            </label>

            <label
              className="
                grid
                gap-2
                text-xs
                font-medium
                leading-4
                text-[#fbfafc]

                max-[760px]:text-[13px]
              "
            >
              Mobile Number

              <input
                type="tel"
                name="mobile"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className="
                  h-[50px]
                  w-full
                  rounded-[13px]
                  border
                  border-white/10
                  bg-[#151515]
                  px-4
                  text-xs
                  font-normal
                  leading-[18px]
                  text-[#fbfafc]
                  outline-none
                  transition-colors
                  duration-200
                  placeholder:text-[#999]
                  focus:border-[#018d87]
                "
              />
            </label>

            <label
              className="
                grid
                gap-2
                text-xs
                font-medium
                leading-4
                text-[#fbfafc]

                max-[760px]:text-[13px]
              "
            >
              Tell us about your requirements?

              <textarea
                name="requirements"
                placeholder="What do you want your business to excel in?"
                rows={4}
                className="
                  min-h-[100px]
                  w-full
                  resize-y
                  rounded-[13px]
                  border
                  border-white/10
                  bg-[#151515]
                  px-4
                  py-[14px]
                  text-xs
                  font-normal
                  leading-[18px]
                  text-[#fbfafc]
                  outline-none
                  transition-colors
                  duration-200
                  placeholder:text-[#999]
                  focus:border-[#018d87]
                "
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex
                h-[52px]
                w-full
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border-0
                bg-[#018d87]
                text-base
                font-medium
                leading-5
                text-white
                transition-all
                duration-300
                ease-out
                hover:scale-[1.02]
                hover:bg-[#00A69F]
                hover:shadow-[0_0_30px_rgba(1,141,135,0.35)]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isSubmitting ? "Submitting..." : "Book a call"}
            </button>

            {status.message && (
              <p
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={
                  status.type === "success"
                    ? "text-sm text-emerald-400"
                    : "text-sm text-red-400"
                }
              >
                {status.message}
              </p>
            )}
          </form>
        </section>

        {/* LOCATIONS */}
        <section
          aria-label="Our locations"
          className="
            flex
            w-full
            justify-center
            bg-[#080909]
            px-6
            pb-[84px]
            pt-[100px]

            max-[760px]:px-5
            max-[760px]:pb-20
            max-[760px]:pt-12
          "
        >
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1200px]
              grid-cols-6
              gap-8

              max-[1100px]:max-w-[900px]
              max-[1100px]:gap-5

              max-[760px]:max-w-[520px]
              max-[760px]:grid-cols-1
              max-[760px]:gap-[18px]
            "
          >
            {locations.map((location, index) => {
              const isBottomRow = index >= 3;

              return (
                <article
                  key={location.city}
                  className={`
                    ${isBottomRow ? "col-span-3" : "col-span-2"}
                    flex
                    min-h-[300px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[20px]
                    border
                    border-white/45
                    bg-[linear-gradient(180deg,#080b0b_0%,#082321_100%)]
                    px-6
                    py-7
                    text-center
                    max-[1100px]:px-4
                    max-[760px]:col-span-1
                    max-[760px]:min-h-[270px]
                  `}
                >
                  <img
                    src={location.skyline}
                    alt={`${location.city} skyline`}
                    className="
                      mb-[15px]
                      block
                      h-auto
                      w-[300px]
                      max-w-full
                      object-contain
                      opacity-[0.82]
                    "
                  />

                  <h2
                    className="
                      mb-[14px]
                      text-[28px]
                      font-semibold
                      leading-[34px]
                      tracking-[-0.8px]
                      text-[#fbfafc]
                    "
                  >
                    {location.city}
                  </h2>

                  <p
                    className="
                      m-0
                      text-sm
                      font-medium
                      leading-[18px]
                      text-[#fbfafc]
                    "
                  >
                    <strong>{location.country}:</strong>
                    <br />
                    {location.address}
                    <br />
                    <a
                      href={`tel:${location.phone}`}
                      className="
                        text-inherit
                        no-underline
                        transition-opacity
                        duration-200
                        hover:opacity-70
                      "
                    >
                      {location.phone}
                    </a>
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteCTA />
    </div>
  );
}

export default Contact;
