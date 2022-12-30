import type { IconType } from 'react-icons';
import { Popover } from '@headlessui/react';

import { FaUserGraduate, FaProjectDiagram } from 'react-icons/fa/index';
import { HiBriefcase } from 'react-icons/hi2/index';

import DesktopHeader from './header/DesktopHeader';
import MobileHeader from './header/MobileHeader';

export type NavSubLink = NavLink & {
  icon: IconType;
  description?: string;
};

export type NavLink = {
  displayName: string;
  route?: string;
  links?: NavSubLink[];
};

export type NavButton = {
  displayName: string;
  route: string;
  icon: IconType;
};

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

const Header = () => (
  <Popover className="bg-gradient-to-b from-gray-900 to-zinc-800">
    <DesktopHeader navLinks={navLinks} />
    <MobileHeader navLinks={navLinks} />
  </Popover>
);

export default Header;
