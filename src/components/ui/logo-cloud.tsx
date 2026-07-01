import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  href?: string;
  darkBg?: boolean;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-3xl bg-gradient-to-r from-secondary via-transparent to-secondary py-6 md:border-x">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <InfiniteSlider gap={42} reverse duration={30} durationOnHover={60}>
        {logos.map((logo) => {
          const img = (
            <img
              alt={logo.alt}
              className="pointer-events-none h-8 select-none md:h-10"
              height="auto"
              loading="lazy"
              src={logo.src}
              width="auto"
            />
          );

          const wrapped = logo.darkBg ? (
            <div className="flex items-center rounded-xl bg-brand-900 px-4 py-2">
              {img}
            </div>
          ) : (
            img
          );

          return (
            <span key={`logo-${logo.alt}`} className="flex items-center">
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="pointer-events-auto"
                >
                  {wrapped}
                </a>
              ) : (
                wrapped
              )}
            </span>
          );
        })}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
