import { FC } from "react";

import Bar from "./bar";

interface HighLowProps {
  lowtext: string;
  lowValue: string;
  hightext: string;
  highvalue: string;
}
const HighLow: FC<HighLowProps> = ({
  lowtext,
  lowValue,
  hightext,
  highvalue,
}) => {
  return (
    <div className="flex">
      <div className="w-1/6">
        <div className="text-gray-500">{lowtext}</div>
        <div className="mt-2">{lowValue}</div>
      </div>
      <Bar />
      <div className="w-1/6 text-right">
        <div className="text-gray-500">{hightext}</div>
        <div className="mt-2">{highvalue}</div>
      </div>
    </div>
  );
};
export default HighLow;
