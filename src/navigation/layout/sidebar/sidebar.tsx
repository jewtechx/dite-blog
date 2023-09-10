import { Fragment, SetStateAction, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Dialog,Tab, Transition } from "@headlessui/react";
import { FC } from "react";
import { Dispatch } from "react";
import classNames from "../../../helpers/classNames";

import { NavLink, Link, useLocation } from "react-router-dom";
import navigation, { userNavigation } from "../../navigation";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SearchNormal1, Setting2 } from "iconsax-react";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SideBar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 xl:hidden"
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-0 pb-4 bg-background">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

              {/*displaying sidenavlinks*/}
               {
                <Tab.Group>
                <Tab.List className='flex'>
                  <Tab 
                  className={({ selected }) =>
                  classNames(
                    "p-4 font-[600] w-full text-md text-slate-100 bg-slate-500/10",
                    selected
                      ? 'bg-background text-slate-100 shadow border-b-[0.2px] border-slate-500'
                      : ' bg-blue-950/90 hover:bg-blue-900/60 hover:text-slate-100'
                  )
                }
                   >MENU</Tab>
                  <Tab 
                  className={({ selected }) =>
                  classNames(
                    "p-4 font-[600] w-full text-md text-slate-100 bg-slate-500/10",
                    selected
                      ? 'bg-background text-slate-100 shadow border-b-[0.2px] border-slate-500'
                      : ' bg-blue-950/90 hover:bg-blue-900/60 hover:text-slate-100'
                  )
                  }
                  >USER</Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    {navigation.map((navLink,index) => (
                        <div key={navLink.name} className={`w-full p-4 border-b-[0.1px]  border-slate-300/10  capitalize`}>
                          <NavLink to={navLink.href} className={({isActive}) => isActive ? 'font-[600] text-lg capitalize !important text-active' : 'font-[600] text-slate-100 text-lg capitalize'}>{navLink.name}</NavLink>
                        </div>
                    ))}
                  </Tab.Panel>
                  <Tab.Panel>
                     {
                      userNavigation.map((user,index) => (
                        <div key={user.name} className={`w-full p-4 border-b-[0.1px] border-slate-300/10 capitalize`}>
                          <NavLink to={user.href} className={({isActive}) => isActive ? 'font-[600] text-lg capitalize !important text-active' : 'font-[600] text-slate-100 text-lg capitalize'}>{user.name}</NavLink>
                        </div>
                        ))
                     }
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
    }

            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SideBar;
