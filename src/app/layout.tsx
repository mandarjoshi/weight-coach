"use client";
import "@/app/globals.css";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  Squares2X2Icon,
  ArrowsRightLeftIcon,
  SparklesIcon,
  MapIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import Script from "next/script";


const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Community", href: "/community", icon: UsersIcon },
  {
    name: "GPL-1",
    href: "#",
    icon: FolderIcon,
    subMenu: [
      {
        name: "About",
        href: "/glp1/about",
        icon: ClipboardDocumentListIcon,
        mainMenu: false,
      },
      {
        name: "Medications",
        href: "/glp1/medications",
        icon: ClipboardDocumentListIcon,
        mainMenu: false,
      },
      {
        name: "Side-Effects",
        href: "/glp1/sideeffects",
        icon: DocumentDuplicateIcon,
        mainMenu: false,
      },
      { name: "Future", href: "/glp1/future", icon: ChartBarIcon, mainMenu: false },
    ],
  },
  {
    name: "Professional Help",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
    subMenu: [
      { name: "Nuitrition Support", href: "/professional/nutrition", icon: Squares2X2Icon },
      { name: "Meal Plans", href: "/professional/meal-plan", icon: Squares2X2Icon },
      { name: "Mental Health", href: "/professional/mental", icon: HeartIcon },
      { name: "Exercise", href: "/professional/trainer", icon: UserGroupIcon },
      {
        name: "GPL-1 Medications",
        href: "/professional/prescription",
        icon: ClipboardDocumentListIcon,
      },
      { name: "Insurance", href: "/professional/insurance", icon: UserGroupIcon },
    ],
  },
  { name: "Shop", href: "/shop", icon: ShoppingBagIcon },
  { name: "Serve and Earn", href: "/earn", icon: CurrencyDollarIcon },
  {
    name: "Alternatives",
    href: "#",
    icon: ArrowsRightLeftIcon,
    subMenu: [
      {
        name: "Natural Glp 1 Boosters",
        href: "#",
        icon: SparklesIcon,
      },
    ],
  },
  { name: "My Journey", href: "#", icon: MapIcon },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pageName = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Hello Title</title>
        <Script id="my-script">{
          `(function(w, d, x, id){
            s=d.createElement('script');
            s.src='https://greenleafs.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
            s.async=1;
            s.id=id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
            })(window, document, 'amazon_connect', 'd22e4f01-aab1-4a00-84a5-16c7e0aa78e4');
            amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456'} });
            amazon_connect('snippetId', 'QVFJREFIZ2ZYaENvQWJCb1ZtYmxRNlFMNVJYMlhab3BKY1p0RnRGQ2pJNGhxdnBvemdIa1VVbmFScDBpcG44SWVxYk9KQ1k1QUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNdHdCU3Q4UHNqclNrZDhDVUFnRVFnQ3VyVkdhTndPTTBtWEttbWM5NlZlNGlCNDJmaVBnTWpnMkRNUTFoNXBOTFhTNW5xZGVaS29UYStEVis6OnV2b01BeGZ3UEFUWnlRcktSaVU4VWhpUmFKVUVxTHBtMHpXZGdOd1lOeS9WTDJhaDVpbU5ocXJvNzI2ZlpNV3lNQkhzYVM1T0VLUlpyV09FT0F6bkp3a1dqRHM0ZFRaL1hYamtPUlpsQzgzcTZxQ2tTdzgydDlsRHk2MWdRNzFEU2dmM0l0M09YbVlla0tHSEYwUW9xUjRob0Iwd2g3dz0=');
            amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown', 'application/vnd.amazonaws.connect.message.interactive', 'application/vnd.amazonaws.connect.message.interactive.response' ]);
            `
        }
        </Script>
      </head>
      <body>
        <div>
          <Dialog
            open={sidebarOpen}
            onClose={setSidebarOpen}
            className="relative z-50 lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
            />

            <div className="fixed inset-0 flex">
              <DialogPanel
                transition
                className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                    <button
                      type="button"
                      onClick={() => setSidebarOpen(false)}
                      className="-m-2.5 p-2.5"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <h1 className="text-white text-2xl">
                      Weight Loss{" "}
                      <span className="text-green-400 uppercase">Coach</span>
                    </h1>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.href === pageName
                                    ? "bg-gray-800 text-green-400"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 shrink-0"
                                />
                                {item.name}
                              </a>
                              {item.subMenu && (
                                <ul className="ml-4 mt-1 space-y-1 pl-2 border-l border-gray-700">
                                  {item.subMenu.map((subItem) => (
                                    <li key={subItem.name}>
                                      <a
                                        href={subItem.href}
                                        className={classNames(
                                          item.href === pageName
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                          "group flex gap-x-3  text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-2 py-1 text-sm"
                                        )}
                                      >
                                        <subItem.icon
                                          aria-hidden="true"
                                          className="size-6 shrink-0"
                                        />
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                          <Cog6ToothIcon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </div>
          </Dialog>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <h1 className="text-white text-2xl">
                  Weight Loss{" "}
                  <span className="text-green-400 uppercase">Coach</span>
                </h1>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.href === pageName
                              ? "bg-gray-800 text-green-400"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-6 shrink-0"
                            />
                            {item.name}
                          </a>
                          {item.subMenu && (
                            <ul className="ml-4 mt-1 space-y-1 pl-2 border-l border-gray-700">
                              {item.subMenu.map((subItem) => (
                                <li key={subItem.name}>
                                  <a
                                    href={subItem.href}
                                    className={classNames(
                                      item.href === pageName
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                      "group flex gap-x-3  text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-2 py-1 text-sm"
                                    )}
                                  >
                                    <subItem.icon
                                      aria-hidden="true"
                                      className="size-6 shrink-0"
                                    />
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="lg:pl-72">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Separator */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-gray-900/10 lg:hidden"
              />

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form
                  action="#"
                  method="GET"
                  className="grid flex-1 grid-cols-1"
                >
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                  />
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                  />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>

                  {/* Separator */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img 
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full bg-gray-50"
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          aria-hidden="true"
                          className="ml-4 text-sm/6 font-semibold text-gray-900"
                        >
                          Mandar Joshi
                        </span>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="ml-2 size-5 text-gray-400"
                        />
                      </span>
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>

            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
