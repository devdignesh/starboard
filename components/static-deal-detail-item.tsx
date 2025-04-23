import React from "react"; 
import { iconMap } from "@/utils/data";
import { StaticDealDetail } from "@/utils/types";



interface StaticDealDetailItemProps {
  item: StaticDealDetail;
  index: number;
}

const StaticDealDetailItem: React.FC<StaticDealDetailItemProps> = ({
  item,
  index,
}) => {
  const Icon = iconMap[item.iconName];

  return (
    <div
      key={index}
      className="flex items-center gap-x-2 min-w-40 text-neutral-600"
    >
      {Icon ? (
        <Icon size={22} />
      ) : (
        <div
          className="w-[22px] h-[22px] bg-red-100 rounded"
          title="Missing Icon"
        />
      )}
      <div className="flex flex-col">
        <span className="font-semibold">{item.value}</span>
        <span className="text-sm">{item.title}</span>
      </div>
    </div>
  );
};

export default StaticDealDetailItem;
