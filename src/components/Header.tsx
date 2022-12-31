import type { IconType } from 'react-icons';
import { Popover } from '@headlessui/react';

import { FaUserGraduate, FaProjectDiagram } from 'react-icons/fa/index';
import { HiBriefcase } from 'react-icons/hi2/index';

import DesktopHeader from './header/DesktopHeader';
import MobileHeader from './header/MobileHeader';

/**
 * Subenlaces del navbar
 * @param displayName Nombre del enlace
 * @param route Ruta del enlace
 * @param icon Icono del enlace
 * @param description Descripción del enlace
 */
export type NavSubLink = NavLink & {
  icon: IconType;
  description?: string;
};

/**
 * Enlaces del navbar
 * @param displayName Nombre del enlace
 * @param route Ruta del enlace
 * @param links Subenlaces del enlace
 */
export type NavLink = {
  displayName: string;
  route?: string;
  links?: NavSubLink[];
};

/**
 * Botones del navbar
 * @param displayName Nombre del enlace
 * @param route Ruta del enlace
 * @param icon Icono del enlace
 */
export type NavButton = {
  displayName: string;
  route: string;
  icon: IconType;
};

/**
 * Enlaces del navbar
 */
const navLinks: NavLink[] = [
  {
    displayName: 'Inicio',
    route: '/',
  },
  {
    displayName: 'Sobre mi',
    route: '/proximamente',
    links: [
      {
        displayName: 'Formación',
        route: 'proximamente',
        icon: FaUserGraduate,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        displayName: 'Tecnologías',
        route: '/proximamente',
        icon: FaProjectDiagram,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        displayName: 'Experiencia',
        route: '/proximamente',
        icon: HiBriefcase,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    displayName: 'Proyectos',
    route: '/proximamente',
  },
];

/**
 * Componente de header
 * @returns Componente de header
 */
const Header = () => (
  <Popover className="bg-gradient-to-b from-gray-900/20 to-zinc-800/20">
    <DesktopHeader navLinks={navLinks} />
    <MobileHeader navLinks={navLinks} />
  </Popover>
);

export default Header;
