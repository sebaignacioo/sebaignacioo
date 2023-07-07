import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2/index';

import type { NavLink } from '@components/Header';

/**
 * Propiedades del componente MobileHeader
 * @param navLinks Enlaces del navbar
 */
type MobileHeaderProps = {
  navLinks: NavLink[];
};

/**
 * Componente del header para dispositivos móviles
 * @param navLinks Enlaces del navbar
 * @returns Componente del header para dispositivos móviles
 */
const MobileHeader = ({ navLinks }: MobileHeaderProps) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
        <div className="rounded-lg bg-primary-900 shadow-lg">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-primary-900 p-2 text-zinc-200 hover:bg-primary-700 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Close menu</span>
                  <HiXMark className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.displayName}
                    href={link.route}
                    className="-m-3 flex items-center rounded-md p-3 text-zinc-200 hover:bg-primary-700 hover:text-zinc-100"
                  >
                    <span className="ml-3 text-base font-medium">{link.displayName}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileHeader;
