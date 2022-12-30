import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import type { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

const EquisDe = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const background: BannerLayer = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [-30, 20],
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className={className}>{children}</div>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.95],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-primary-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-full w-full object-cover"
    />
  );
};

const Background = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ParallaxProvider>
      <EquisDe
        className={
          className ?? "p-12 rounded-3xl bg-white/5 border-2 border-white/30"
        }
      >
        {children}
      </EquisDe>
    </ParallaxProvider>
  );
};

export default Background;
