import AboutCard from "./aboutcard";

const AboutFooter = () => {
  return (
    <div className="mt-3">
      <div className="font-semibold text-2xl">Already Holding BTC?</div>
      <div className="lg:flex-row flex flex-col w-full gap-10 mb-3">
        <AboutCard classname="bg-gradient-to-br from-green-400 to to-blue-400" />
        <AboutCard classname="bg-gradient-to-br from-orange-400 to to-orange-700" />
      </div>
      <hr />
      <div className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates
        tempore dolore dolorem, saepe culpa soluta illum. Quia, laborum quos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        laboriosam vero voluptate ea est, ipsam velit aspernatur exercitationem
        minima repellat?
      </div>
    </div>
  );
};
export default AboutFooter;
