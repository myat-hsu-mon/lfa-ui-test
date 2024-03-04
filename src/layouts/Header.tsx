import { Dispatch, SetStateAction } from "react";
import {
  Bars3Icon,
  BellAlertIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/20/solid";

interface HeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <div className="card sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 rounded-3xl shadow-sm">
      <button
        type="button"
        className="-m-2.5 p-2.5 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
        <div>
          <h2>Hello Gokul</h2>
          <h6>Welcome back!</h6>
        </div>
        <SearchInput />
        <button className="flex flex-col items-center">
          <LightModeToggleIcon />
          <span className="mt-1 text-xs text-gray-500">Light Mode</span>
        </button>
        <div className="rounded-md bg-blue-600/10 p-2">
          <ChatBubbleOvalLeftEllipsisIcon
            className="h-6 w-6 text-blue-600"
            aria-hidden="true"
          />
        </div>
        <div className="rounded-md bg-green-dark/10 p-2">
          <BellAlertIcon
            className="h-6 w-6 text-green-dark"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center">
          <img className="avatar" src="indian-flag.png" alt="Indian flag" />
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-2 text-sm font-medium leading-6 "
              aria-hidden="true"
            >
              Eng (IND)
            </span>
            <ChevronDownIcon className="ml-1 h-5 w-5 " aria-hidden="true" />
          </span>
        </div>
        <div className="flex items-center">
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="hidden lg:flex lg:items-center">
            <ChevronDownIcon className="ml-1 h-5 w-5 " aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="relative mx-4 flex-1 rounded-lg  shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-6 w-6 text-green"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-xl border-0 py-2.5 pl-12 pr-12 text-gray-900 outline-none ring-2 ring-inset ring-green placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
        placeholder="Search here..."
        aria-describedby="search"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span id="search">
          <MicrophoneIcon className="h-6 w-6 text-green" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function LightModeToggleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 256.04"
      fill="#2563EB"
      width="50"
    >
      <path d="M128.02 0h.18c22.03 0 42.83 5.66 61 15.6h210.38c30.89 0 59 12.65 79.38 33.04C499.35 68.99 512 97.1 512 128.02c0 30.92-12.66 59.03-33.02 79.4l-.42.38c-20.34 20.15-48.29 32.64-78.98 32.64H189.24c-18.17 9.93-38.98 15.6-61.04 15.6h-.18c-35.2 0-67.22-14.41-90.42-37.6C14.41 195.25 0 163.24 0 128.02s14.4-67.24 37.59-90.43l.91-.83C61.65 14.05 93.29 0 128.02 0zm-5.95 54.42c0-1.95.8-3.73 2.08-5 2.74-2.77 7.27-2.76 10.02-.01l.14.16a7.042 7.042 0 0 1 1.94 4.85v12.95c0 1.95-.8 3.73-2.08 5.01-2.75 2.75-7.27 2.75-10.02 0a7.084 7.084 0 0 1-2.08-5.01V54.42zm6.05 31.17c11.72 0 22.32 4.75 30 12.43 7.67 7.68 12.43 18.29 12.43 30 0 11.72-4.75 22.32-12.43 30s-18.28 12.43-30 12.43c-11.72 0-22.32-4.75-30.01-12.43-7.67-7.68-12.43-18.28-12.43-30 0-11.72 4.76-22.32 12.43-30 7.69-7.67 18.3-12.43 30.01-12.43zm-56.33-5.34a7.114 7.114 0 0 1-2.07-5.01c0-3.9 3.18-7.09 7.09-7.09 1.81 0 3.62.69 5 2.07l9.16 9.16a7.065 7.065 0 0 1 2.08 5.01c0 1.8-.7 3.62-2.08 5.01a7.057 7.057 0 0 1-5.01 2.08c-1.8 0-3.61-.7-5-2.07l-9.17-9.16zm-17.28 53.81c-1.95 0-3.73-.8-5-2.08-2.77-2.74-2.76-7.27-.01-10.01l.15-.14a7.04 7.04 0 0 1 4.86-1.94h12.94a7.082 7.082 0 0 1 7.09 7.09c0 1.95-.8 3.73-2.07 5.01a7.099 7.099 0 0 1-5.02 2.07H54.51zm25.82 50.28a7.049 7.049 0 0 1-5 2.07c-3.91 0-7.09-3.16-7.09-7.08 0-1.81.68-3.62 2.07-5.01l9.31-9.29a7.02 7.02 0 0 1 4.86-1.94 7.09 7.09 0 0 1 7.09 7.09c0 1.79-.69 3.6-2.08 4.99l-9.16 9.17zm53.82 17.29c0 1.94-.8 3.73-2.08 5-2.74 2.76-7.27 2.75-10.02 0l-.13-.15a7.033 7.033 0 0 1-1.94-4.85v-12.95c0-1.96.8-3.73 2.07-5.01 2.76-2.75 7.27-2.75 10.03 0a7.1 7.1 0 0 1 2.07 5.01v12.95zm50.28-25.83a7.055 7.055 0 0 1 2.07 5.01c0 3.89-3.18 7.09-7.08 7.09-1.81 0-3.63-.69-5.01-2.07l-9.16-9.16a7.095 7.095 0 0 1-2.07-5.02c0-3.9 3.18-7.09 7.08-7.09 1.8 0 3.61.7 5 2.08l9.17 9.16zm17.29-53.82c1.93 0 3.73.81 5 2.08 2.76 2.75 2.75 7.27 0 10.02l-.15.14a7.098 7.098 0 0 1-4.85 1.94h-12.95c-1.96 0-3.74-.8-5.01-2.08-2.76-2.75-2.76-7.27 0-10.02a7.049 7.049 0 0 1 5.01-2.08h12.95zM175.89 71.7a7.074 7.074 0 0 1 5-2.07c3.9 0 7.1 3.19 7.1 7.09 0 1.81-.69 3.62-2.07 5l-9.32 9.31a7.12 7.12 0 0 1-4.86 1.93c-3.91 0-7.09-3.18-7.09-7.09 0-1.8.7-3.61 2.08-5l9.16-9.17zm34.17-41.87c2.96 2.47 5.81 5.07 8.53 7.8 23.22 23.15 37.63 55.17 37.63 90.39s-14.42 67.23-37.6 90.42a130.2 130.2 0 0 1-8.5 7.77h189.46c26.83 0 51.24-10.91 69.02-28.5l.32-.35c17.79-17.79 28.85-42.35 28.85-69.34 0-26.99-11.06-51.55-28.85-69.35-17.77-17.8-42.33-28.84-69.34-28.84H210.06zm-82.04-14.71h.18c62.09 0 112.89 50.81 112.89 112.9 0 62.1-50.86 112.9-112.89 112.9h-.18c-62.03 0-112.9-50.8-112.9-112.9 0-62.09 50.81-112.9 112.9-112.9z" />
    </svg>
  );
}
