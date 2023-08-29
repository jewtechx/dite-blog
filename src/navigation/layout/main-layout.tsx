import { Fragment, Suspense, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import classNames from "../../helpers/classNames";
import { CenterLoader } from "../../utils/loaders/index";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FC } from "react";
import { Dispatch } from "react";

import { NavLink, Link, useLocation } from "react-router-dom";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SearchNormal1, Setting2 } from "iconsax-react";

import { Outlet } from "react-router-dom";

import SideBar from "./sidebar/sidebar";
import navigation, { userNavigation } from "../navigation";
const LoadingComponent = () => {
  return (
    <>
      <CenterLoader />
    </>
  );
};

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen flex overflow-hidden bg-white">
      {/* for sidebar */}
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Search header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 xl:flex">
          {/* Static navbar for desktop */}
          <div className=" bg-slate-50 w-screen  px-4 md:px-6 xl:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-x-10">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      src="http://touchlili.com/wp-content/uploads/2020/06/logo.png"
                      alt="Touchlily"
                      className="max-w-[170px]"
                    />
                  </Link>
                </div>
                <div className="hidden xl:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-slate-700 hover:bg-blue-100/50 hover:text-slate-700",
                          "rounded-md px-3 py-2 text-md font-[600]"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 gap-x-6 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full  p-1 text-slate-700 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Search</span>
                    <SearchNormal1 className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <Link
                    to="jd"
                    type="button"
                    className="rounded-full  p-1 text-slate-700 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Settings</span>
                    <Setting2 className="h-6 w-6" aria-hidden="true" />
                  </Link>{" "}
                  <button
                    type="button"
                    className="rounded-full  p-1 text-slate-700 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          {/* mobile menu button */}
          <button
            className="px-4 bg-blue-100/70 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/50 xl:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <Suspense fallback={LoadingComponent()}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
