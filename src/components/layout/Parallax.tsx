import { ParallaxProvider } from 'react-scroll-parallax';

/**
 * Propiedades del componente Parallax
 * @param children Contenido del componente
 */
type ParallaxProps = {
  children: React.ReactNode;
};

/**
 * Componente de proveedor de parallax
 * @param children Contenido del componente
 */
const Parallax = ({ children }: ParallaxProps) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Parallax;
