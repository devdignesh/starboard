import React from "react";
import { ChevronLeft } from "lucide-react";
import { NavItems } from "@/utils/data";
import NavItem from "./nav-item";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="flex justify-between py-3 items-center">
            <Link
              href={"/"}
              className="group flex hover:cursor-pointer gap-x-1 items-center"
            >
              <ChevronLeft />
              <span className="underline">Back</span>
            </Link>
          
          <div className="flex gap-x-2 items-center max-md:hidden">
            {NavItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                label={item.label}
                active={"Deal Overview"}
              />
            ))}
          </div>
          <div className="flex gap-x-3 ">
            <input type="text" name="search" id="search"  className="border border-gray-300 rounded-l-xl rounded-tr-xl text-sm px-3 placeholder:text-zinc-500 focus:outline-none "  placeholder="Ask me anything!"/>
            <Image src={"/images/avatar/user.png"} className="w-8 h-8 object-cover" height={50} width={50} alt="image user"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
