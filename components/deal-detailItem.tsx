
import React from "react"; 
import { DealDetail } from "@/utils/types";
import { iconMap } from "@/utils/data";

interface DealDetailItemProps {
  item: DealDetail;
  index: number;
}

const  DealDetailItem: React.FC<DealDetailItemProps> = ({ item, index }) => {
  const Icon = iconMap[item.iconName];
  return (
    <div key={index} className="flex items-center gap-x-2 min-w-40 text-neutral-600">
      <Icon size={22} />
      <div className="flex flex-col">
        <span className="font-semibold ">{item.value}</span>
        <span className="text-sm">{item.title}</span>
      </div>
    </div>
  );
};

export default DealDetailItem;
