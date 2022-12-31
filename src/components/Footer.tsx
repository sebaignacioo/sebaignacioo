import type { IconType } from 'react-icons';
import { SiFacebook, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si/index';

/**
 * Enlaces del navbar del Footer
 * @param name Nombre del enlace
 * @param href Ruta del enlace
 */
type FooterNavLink = {
  name: string;
  href: string;
};

/**
 * Enlaces sociales del navbar del Footer
 * @param name Nombre del enlace
 * @param href Ruta del enlace
 * @param icon Icono del enlace
 */
type FooterSocialLink = FooterNavLink & {
  icon: IconType;
};

/**
 * Enlaces del navbar del Footer
 * @param main Enlaces principales
 * @param social Enlaces sociales
 */
type FooterNavLinks = {
  main: FooterNavLink[];
  social: FooterSocialLink[];
};

/**
 * Enlaces del navbar del Footer
 */
const footerNavLinks: FooterNavLinks = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Formación', href: '/proximamente' },
    { name: 'Tecnologías', href: 'proximamente' },
    { name: 'Experiencia', href: 'proximamente' },
    { name: 'Proyectos', href: 'proximamente' },
    { name: 'Blog', href: '/proximamente' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/sebastian.ignacioo',
      icon: SiFacebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sebaignacioo',
      icon: SiInstagram,
    },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com/sebaaignaciooo',
      icon: SiTwitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sebaignacioo',
      icon: SiGithub,
    },
  ],
};

/**
 * Componente del footer
 * @returns Componente del footer
 */
const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
    <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center divide-x-2 divide-black/10 dark:divide-white/10" aria-label="Footer">
        {footerNavLinks.main.map((link) => (
          <div key={link.name} className="px-3 py-1">
            <a href={link.href} className="text-sm text-zinc-600 hover:text-gray-800 dark:text-zinc-300 dark:hover:text-gray-100">
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
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <span className="sr-only">{social.name}</span>
            <social.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} - Desarrollado con 💙 desde Valparaíso, Chile.
      </p>
    </div>
  </footer>
);

export default Footer;
