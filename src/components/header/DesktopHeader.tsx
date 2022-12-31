import { Fragment } from 'react';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Popover, Transition } from '@headlessui/react';

import {
  HiOutlineNewspaper,
  HiOutlineShare,
  HiOutlineArrowDownOnSquare,
  HiChevronDown,
  HiBars3,
} from 'react-icons/hi2/index';

import type { NavButton, NavLink } from '@components/Header';
import f from '@lib/f'; // Funciones varias
import { FaCode } from 'react-icons/fa';

/**
 * Propiedades del componente DesktopHeader
 * @param navLinks Enlaces del navbar
 */
type DesktopHeaderProps = {
  navLinks: NavLink[];
};

/**
 * Botones del navbar, ubicados a la derecha
 */
const navButtons: NavButton[] = [
  {
    displayName: 'Contacto',
    route: '/proximamente',
    icon: HiOutlineShare,
  },
  {
    displayName: 'Blog',
    route: '/proximamente',
    icon: HiOutlineNewspaper,
  },
  {
    displayName: 'Descargar currículum',
    route: '/proximamente',
    icon: HiOutlineArrowDownOnSquare,
  },
];

/**
 * Componente del header para pantallas grandes
 * @param navLinks Enlaces del navbar
 * @returns Componente del header para pantallas grandes
 */
const DesktopHeader = ({ navLinks }: DesktopHeaderProps) => {
  return (
    <div className="px-6 sm:px-10">
      <div className="flex border-b border-zinc-900/20 px-10 py-4 dark:border-zinc-50/20 md:space-x-20">
        <div className="flex items-center justify-start">
          <a href="/">
            <div className="align-center flex gap-x-4 text-zinc-700 dark:text-zinc-200">
              <img
                className="h-10 w-auto rounded-full sm:h-12"
                src="https://github.com/sebaignacioo.png?size=100"
                alt=""
              />
              <div className="hidden flex-col sm:flex">
                <div className="flex space-x-2 align-middle">
                  <FaCode className="h-5 w-5" />
                  <span className="-my-1 text-lg">Sebastián García Delgadillo</span>
                </div>
                <span className="text-xs">Estudiante y desarrollador</span>
              </div>
            </div>
            <span className="sr-only">sgarciad.me</span>
          </a>
        </div>

        {/* Menu de navegación */}
        <Popover.Group
          as="nav"
          className="hidden space-x-10 divide-x divide-solid divide-white/50 lg:flex lg:items-center"
        >
          {navLinks.map((link) =>
            link.links ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={f.classNames(
                        open ? 'text-gray-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400',
                        'group inline-flex items-center text-sm font-light ring-transparent hover:text-gray-800 focus:outline-none dark:hover:text-gray-200'
                      )}
                    >
                      <span>{link.displayName}</span>
                      <HiChevronDown
                        className={f.classNames(
                          open ? 'text-gray-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400',
                          'ml-2 h-3 w-3 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -mx-2 mt-4 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-transparent">
                          <div className="relative grid gap-6 bg-primary-800 px-5 py-6 dark:bg-primary-900 sm:gap-8 sm:p-8">
                            {link.links?.map((sublink) => (
                              <a
                                key={sublink.displayName}
                                href={sublink.route}
                                className="-m-3 flex items-center rounded-lg p-3 hover:bg-primary-700 dark:hover:bg-primary-800"
                              >
                                <sublink.icon className="h-4 w-4 flex-shrink-0 text-primary-200" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="font-light text-white">{sublink.displayName}</p>
                                  <p className="text-xs text-primary-200">{sublink.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <a
                href={link.route}
                className="text-sm font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {link.displayName}
              </a>
            )
          )}
        </Popover.Group>

        {/* Botones */}
        <div className="flex flex-1 items-center justify-end">
          {navButtons.map((button) => (
            <a
              href={button.route}
              className="mx-3 text-base font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <div className="hidden w-10 items-center gap-y-1 text-center md:flex md:flex-col">
                <button.icon className="h-6 w-6" aria-hidden="true" />
                <span className="h-3 break-words text-2xs">{button.displayName}</span>
              </div>
            </a>
          ))}
          <div className="flex w-0 flex-1 items-center justify-end lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-zinc-100 p-2 text-gray-600 hover:bg-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
