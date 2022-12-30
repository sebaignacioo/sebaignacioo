import type { NavButton, NavLink } from "@components/Header";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiOutlineNewspaper,
  HiOutlineShare,
  HiOutlineArrowDownOnSquare,
  HiChevronDown,
  HiBars3,
} from "react-icons/hi2/index";

type DesktopHeaderProps = {
  navLinks: NavLink[];
};

const navButtons: NavButton[] = [
  {
    displayName: "Contacto",
    route: "/proximamente",
    icon: HiOutlineShare,
  },
  {
    displayName: "Blog",
    route: "/proximamente",
    icon: HiOutlineNewspaper,
  },
  {
    displayName: "Descargar currículum",
    route: "/proximamente",
    icon: HiOutlineArrowDownOnSquare,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DesktopHeader = ({ navLinks }: DesktopHeaderProps) => {
  return (
    <div className="px-6 sm:px-10">
      <div className="flex border-b px-10 border-zinc-50/20 py-4 md:space-x-20">
        <div className="flex items-center justify-start">
          <a href="/">
            <div className="text-zinc-200 flex align-center gap-x-4">
              <img
                className="rounded-full h-10 w-auto sm:h-12"
                src="https://github.com/sebaignacioo.png?size=100"
                alt=""
              />
              <div className="hidden justify-center flex-col sm:flex">
                <span className="text-base">Sebastián García Delgadillo</span>
                <span className="text-2xs -my-1">Desarrollador</span>
              </div>
            </div>
            <span className="sr-only">sgarciad.me</span>
          </a>
        </div>

        <Popover.Group
          as="nav"
          className="hidden space-x-10 lg:flex lg:items-center"
        >
          {navLinks.map((link) =>
            link.links ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-200" : "text-gray-400",
                        "group inline-flex items-center text-sm font-light hover:text-gray-200 ring-transparent focus:outline-none"
                      )}
                    >
                      <span>{link.displayName}</span>
                      <HiChevronDown
                        className={classNames(
                          open ? "text-gray-200" : "text-gray-400",
                          "ml-2 h-3 w-3 group-hover:text-gray-200"
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
                      <Popover.Panel className="absolute z-10 -ml-4 mt-4 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-transparent">
                          <div className="relative grid gap-6 bg-primary-900 px-5 py-6 sm:gap-8 sm:p-8">
                            {link.links?.map((sublink) => (
                              <a
                                key={sublink.displayName}
                                href={sublink.route}
                                className="-m-3 flex items-center rounded-lg p-3 hover:bg-primary-800"
                              >
                                <sublink.icon
                                  className="h-4 w-4 flex-shrink-0 text-primary-200"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="font-light text-primary-50">
                                    {sublink.displayName}
                                  </p>
                                  <p className="text-xs text-primary-300">
                                    {sublink.description}
                                  </p>
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
                className="text-sm font-light text-gray-400 hover:text-gray-200"
              >
                {link.displayName}
              </a>
            )
          )}
        </Popover.Group>
        <div className="items-center justify-end flex flex-1">
          {navButtons.map((button) => (
            <a
              href={button.route}
              className="mx-3 text-base font-medium text-gray-400 hover:text-gray-200"
            >
              <div className="hidden md:flex w-10 items-center text-center md:flex-col gap-y-1">
                <button.icon className="h-6 w-6" aria-hidden="true" />
                <span className="h-3 text-2xs break-words">
                  {button.displayName}
                </span>
              </div>
            </a>
          ))}
          <div className="flex flex-1 w-0 items-center justify-end lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
