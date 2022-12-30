import type { IconType } from "react-icons";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiTwitter,
} from "react-icons/si/index";

type FooterNavLink = {
  name: string;
  href: string;
};

type FooterSocialLink = FooterNavLink & {
  icon: IconType;
};

type FooterNavLinks = {
  main: FooterNavLink[];
  social: FooterSocialLink[];
};

const footerNavLinks: FooterNavLinks = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Formación", href: "/proximamente" },
    { name: "Tecnologías", href: "proximamente" },
    { name: "Experiencia", href: "proximamente" },
    { name: "Proyectos", href: "proximamente" },
    { name: "Blog", href: "/proximamente" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/sebastian.ignacioo",
      icon: SiFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sebaignacioo",
      icon: SiInstagram,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/sebaaignaciooo",
      icon: SiTwitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/sebaignacioo",
      icon: SiGithub,
    },
  ],
};

const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-900 to-black">
    <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap divide-x-2 divide-white/10 justify-center"
        aria-label="Footer"
      >
        {footerNavLinks.main.map((link) => (
          <div key={link.name} className="px-3 py-1">
            <a
              href={link.href}
              className="text-sm text-zinc-300 hover:text-gray-100"
            >
              {link.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        {footerNavLinks.social.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <span className="sr-only">{social.name}</span>
            <social.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} - Desarrollado con 💙 desde
        Valparaíso, Chile.
      </p>
    </div>
  </footer>
);

export default Footer;
