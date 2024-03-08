import TeamCard from "./teamcard";

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-lg">
      <div className="text-xl font-bold">Team</div>
      <div className="mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
        excepturi distinctio quod unde ex temporibus dolor soluta, quasi ad in.
      </div>
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </div>
  );
};
export default Team;
