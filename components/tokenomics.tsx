import TokenChart from "./tokenchart";
import TokenPoints from "./tokenpoints";

const Tokenomics = () => {
  return (
    <div className="p-3 bg-white rounded-lg w-full">
      <div className="text-2xl font-bold">Tokenomics</div>
      <div className="flex gap-2">
        <TokenChart />
        <TokenPoints />
      </div>
      <div className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        reiciendis dicta facilis minima nam, provident sequi animi amet beatae
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
        vel molestias! Sint, ullam quia animi officia aut veritatis nam unde?
      </div>
    </div>
  );
};
export default Tokenomics;
