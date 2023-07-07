import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import type { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

/**
 * Componente de fondo parallax
 * @param children Contenido del componente
 * @param className Clase tailwindcss del componente
 * @returns Componente de fondo parallax
 */
const ParallaxBackground = ({ children, className }: { children: React.ReactNode; className: string }) => {
  /**
   * Capa del fondo del banner
   */
  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  /**
   * Capa del título del banner
   */
  const headline: BannerLayer = {
    translateY: [-30, 20],
    scale: [1, 1.15, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className={className}>{children}</div>
      </div>
    ),
  };

  /**
   * Capa del primer plano del banner
   */
  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  /**
   * Capa del overlay del banner
   */
  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.95],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-primary-900" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-full w-full object-cover"
    />
  );
};

/**
 * Componente de fondo parallax
 * @param children Contenido del componente
 * @param className Clase tailwindcss del componente
 * @returns Componente de fondo parallax
 */
const Background = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <ParallaxProvider>
      <ParallaxBackground className={className ?? 'rounded-3xl border-2 border-white/30 bg-white/5 p-12'}>
        {children}
      </ParallaxBackground>
    </ParallaxProvider>
  );
};

export default Background;
