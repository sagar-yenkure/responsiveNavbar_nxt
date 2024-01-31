"use client";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
// import { div } from "@headlessui/react";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { LuFileText } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GrCloudComputer } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
function SideNavbar() {

  
  const Nav_items = [
    { id: 1, icon: GoHome, name: "Dashbord" },
    { id: 2, icon: LuFileText, name: "Content" },
    { id: 3, icon: RiGroupLine, name: "Team" },
    { id: 4, icon: CgProfile, name: "User" },
    { id: 5, icon: GrCloudComputer, name: "App/Web" },
    { id: 6, icon: IoAnalytics, name: "Analytics" },
    { id: 7, icon: CiVideoOn, name: "Media" },
    { id: 8, icon: IoIosNotificationsOutline, name: "Notification" },
    { id: 9, icon: IoSettingsOutline, name: "settings" },
  ]
  const [Nav, setNav] = useState(false)

  return (
    <div>
      <div as="nav">
        <div className="absolute lg:hidden top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <button onClick={() => setNav(!Nav)}>

            <GiHamburgerMenu
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className={` ${Nav ? "hidden" : "block"} p-6 w-1/2 h-screen md:block bg-white z-20 fixed top-0 -left-5 md:-left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}>
          <div className="flex flex-col justify-center item-center">
            <div className=" my-4 border-b border-gray-100 pb-4">
              {Nav_items.map((item) => {
                return <div key={item.id} className="flex space-y-1  mb-2 justify-start items-center gap-4 pl-5 hover:bg-purple-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <span className=" text-4xl md:text-2xl text-gray-600 group-hover:text-white ">
                    <item.icon />
                  </span>
                  <h3 className="hidden md:block text-base text-gray-800 group-hover:text-white font-semibold ">
                    {item.name}
                  </h3>
                </div>
              })
              }
              <div className="flex mt-16 justify-start items-center gap-2 pl-5 bg-purple-300  00 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <span className=" text-4xl md:text-2xl text-gray-600 group-hover:text-white ">
                  <CiHeadphones />
                  </span>
                  <h3 className="hidden md:block text-base text-gray-800 group-hover:text-white font-semibold ">
                    Contact Support
                  </h3>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
