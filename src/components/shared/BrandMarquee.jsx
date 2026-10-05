function BrandMarquee({
  brands = [],
  label = "Our designs are featured on:",
}) {
  if (!brands.length) return null;

  const brandWidths = [79, 187, 172, 206, 202];

  return (
    <section
      aria-label={label}
      className="overflow-hidden py-[8px] text-center"
    >
      <p className="mb-[34px] text-[13px] font-medium text-[#999]">
        {label}
      </p>

      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[180px] bg-gradient-to-r from-[#080909] via-[#080909]/80 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[180px] bg-gradient-to-l from-[#080909] via-[#080909]/80 to-transparent" />

        <div className="flex w-max animate-[brandMarquee_34s_linear_infinite] will-change-transform">
          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              className="flex h-[55px] shrink-0 items-center gap-[64px] pr-[64px]"
              aria-hidden={copy !== 0}
            >
              {brands.map((brand, index) => (
                <div
                  key={`${copy}-${index}`}
                  className="flex h-[55px] shrink-0 items-center justify-center"
                  style={{
                    width: `${brandWidths[index] ?? 202}px`,
                  }}
                >
                  <img
                    src={brand}
                    alt={copy === 0 ? `Brand ${index + 1}` : ""}
                    className="block h-auto max-h-[36px] w-full object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  );
}

export default BrandMarquee;