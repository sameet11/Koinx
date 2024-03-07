import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

interface InrRenderProps {
  inrvalue: number;
}

const InrRender: React.FC<InrRenderProps> = ({ inrvalue }) => {
  return (
    <div className="text-base text-gray-600 flex mt-1">
      <MdCurrencyRupee className="mt-1" />
      <div>{inrvalue.toLocaleString()}</div>
    </div>
  );
};

export default React.memo(InrRender);
