import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import classNames from "clsx";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Sale Analytics", href: "#", icon: UsersIcon, current: false },
  { name: "Products", href: "#", icon: FolderIcon, current: false },
  { name: "Orders", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Messages",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Customers", href: "#", icon: ChartPieIcon, current: false },
  { name: "Settings", href: "#", icon: ChartPieIcon, current: false },
];

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navigation({
  sidebarOpen,
  setSidebarOpen,
}: NavigationProps) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <Logo />
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul className="space-y-2">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-green text-white"
                                    : "text-gray-500 hover:bg-green hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : "text-gray-500 group-hover:text-white",
                                    "h-6 w-6 shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <div className="mt-auto space-y-2">
                        <div className="flex flex-col items-center justify-center space-y-3 rounded-2xl bg-green px-2 py-6 text-center text-white">
                          <CubeIcon
                            className="block h-6 w-6 shrink-0 text-center text-white"
                            aria-hidden="true"
                          />
                          <div>
                            <div>New Updates Available</div>
                            <div>Click to Update</div>
                          </div>
                          <button className="rounded-md bg-white px-2 py-1 text-green">
                            Update
                          </button>
                        </div>
                        <li>
                          <a
                            href="#"
                            className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-500"
                              aria-hidden="true"
                            />
                            Log Out
                          </a>
                        </li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-4 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="mr-4 flex grow flex-col gap-y-5 overflow-y-auto rounded-3xl bg-white px-6 pb-4">
          <Logo />
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-6">
              <li>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-green text-white"
                            : "text-gray-500 hover:bg-green hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-gray-500 group-hover:text-white",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <div className="mt-auto space-y-2">
                <div className="flex flex-col items-center justify-center space-y-3 rounded-2xl bg-green px-2 py-6 text-center text-white">
                  <CubeIcon
                    className="block h-6 w-6 shrink-0 text-center text-white"
                    aria-hidden="true"
                  />
                  <div>
                    <div>New Updates Available</div>
                    <div>Click to Update</div>
                  </div>
                  <button className="rounded-md bg-white px-2 py-1 text-green">
                    Update
                  </button>
                </div>
                <li>
                  <a
                    href="#"
                    className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-500"
                      aria-hidden="true"
                    />
                    Log Out
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <div className="flex h-24 shrink-0 items-center space-x-2 text-gray-800">
      <div className="rounded-md bg-green p-2">
        <LogoIcon />
      </div>
      <h1>GrowthView</h1>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 87.994 0 H 69.342 c -1.787 0 -2.682 2.16 -1.418 3.424 l 5.795 5.795 l -33.82 33.82 L 28.056 31.196 l -3.174 -3.174 c -1.074 -1.074 -2.815 -1.074 -3.889 0 L 0.805 48.209 c -1.074 1.074 -1.074 2.815 0 3.889 l 3.174 3.174 c 1.074 1.074 2.815 1.074 3.889 0 l 15.069 -15.069 l 14.994 14.994 c 1.074 1.074 2.815 1.074 3.889 0 l 1.614 -1.614 c 0.083 -0.066 0.17 -0.125 0.247 -0.202 l 37.1 -37.1 l 5.795 5.795 C 87.84 23.34 90 22.445 90 20.658 V 2.006 C 90 0.898 89.102 0 87.994 0 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 65.626 37.8 v 49.45 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 23.518 L 65.626 37.8 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 47.115 56.312 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 42.03 L 47.115 56.312 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 39.876 60.503 c -1.937 0 -3.757 -0.754 -5.127 -2.124 l -6.146 -6.145 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 59.844 C 41.952 60.271 40.933 60.503 39.876 60.503 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 22.937 46.567 L 11.051 58.453 c -0.298 0.298 -0.621 0.562 -0.959 0.8 V 87.25 c 0 1.519 1.231 2.75 2.75 2.75 h 8.782 c 1.519 0 2.75 -1.231 2.75 -2.75 V 48.004 L 22.937 46.567 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
