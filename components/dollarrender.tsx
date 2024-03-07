import React from "react";

interface DollarRenderProps {
  dollarvalue: number;
}

const DollarRender: React.FC<DollarRenderProps> = ({ dollarvalue }) => {
  return (
    <div className="text-black font-bold text-2xl">
      ${dollarvalue.toLocaleString()}
    </div>
  );
};

export default DollarRender;
