import React from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";

interface PercentageChangeProps {
  dollarchange: number;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({
  dollarchange,
}) => {
  const absoluteValue = Math.abs(dollarchange).toFixed(2);

  return (
    <div>
      {dollarchange >= 0 ? (
        <div className="p-1 bg-green-200 text-green-500 flex gap-1 rounded-lg">
          <VscTriangleUp className="mt-1" />
          <div>{absoluteValue}</div>
        </div>
      ) : (
        <div className=" p-1 bg-red-200 text-red-500 flex gap-1 rounded-lg">
          <VscTriangleDown className="mt-1" />
          <div>{absoluteValue}</div>
        </div>
      )}
    </div>
  );
};

export default PercentageChange;
