import { FC } from "react";
interface GridElementsProps {
  name: string;
  value: string;
}
const GridElements: FC<GridElementsProps> = ({ name, value }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <div className="text-gray-400">{name}</div>
        <div>{value}</div>
      </div>
      <div className="mt-4 border border-gray-400"></div>
    </div>
  );
};
export default GridElements;
