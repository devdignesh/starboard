import Link from "next/link";
import React from "react";

const NavItem = ({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: string;
}) => {
  return (
    <>
      <Link href={href} className={`${active === label ? 'bg-black text-white rounded-full px-4' : ''} px-2 py-1 text-[15px]`}>
        <span>{label}</span>
      </Link>
    </>
  );
};

export default NavItem;
