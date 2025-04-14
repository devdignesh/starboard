import React from "react";
import CardTitle from "./card-title";
import Link from "next/link";
import { ArrowUpRight, CalendarArrowUp, Heart, Warehouse } from "lucide-react";
import { Gridview } from "./GridView";
import ExportOptions from "./export-options";

const Overview = () => {
  return (
    <>
      <section className="py-1 flex justify-between">
        <CardTitle>Overview</CardTitle>

        <div className="flex sm:gap-x-4">
          <Link
            href={
              "https://drive.google.com/file/d/1VuVMe_hIpwQOQnzylBl_G4XgZ9d2wk0I/view"
            }
            target="_blank"
            className="text-sm flex items-center text-zinc-500 hover:text-zinc-800"
          >
            View OM Source <ArrowUpRight size={14} />
          </Link>
          <button className="bg-zinc-500/40 rounded-full p-2 cursor-pointer hover:bg-zinc-500/80">
            <Heart size={18} />
          </button>
        </div>
      </section>

      <section className="flex max-lg:flex-col ">
        <div className="xl:min-w-4xl min-h-[420px]">
          <Gridview />
        </div>
        <div className="min-lg:ml-4 flex flex-col  p-2 rounded-2xl gap-y-2">
          <span className="font-semibold md:text-2xl text-xl">
            280 Richards, Brooklyn, NY
          </span>
          <span className="flex gap-x-2 items-center text-zinc-600">
            <CalendarArrowUp size={18} />
            11/06/2024
          </span>
          <span className="flex gap-x-2 items-center text-zinc-600">
            <Warehouse size={18} />
            Warehouse
          </span>
          <ExportOptions />
        </div>
      </section>
    </>
  );
};

export default Overview;
