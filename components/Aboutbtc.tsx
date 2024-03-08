import AboutFooter from "./aboutfooter";
import AboutHeader from "./aboutheader";
import AboutMain from "./aboutmain";

const About = () => {
  return (
    <div className="p-3 bg-white rounded-lg w-full">
      <div className="font-bold text-2xl mb-4">About Bitcoin</div>
      <AboutHeader />
      <hr />
      <AboutMain />
      <hr />
      <AboutFooter />
    </div>
  );
};
export default About;
