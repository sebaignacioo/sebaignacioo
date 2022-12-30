import { ParallaxProvider } from "react-scroll-parallax";

type ParallaxProps = {
  children: React.ReactNode;
};

const Parallax = ({ children }: ParallaxProps) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Parallax;
