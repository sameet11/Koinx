import Image from "next/image";
const TeamCard = () => {
  return (
    <div className="mt-3">
      <div className="flex bg-blue-100 p-3 rounded-lg">
        <div className="w-1/5">
          <div className="text-center">
            <Image
              src={"/human.jpg"}
              alt="human"
              height={100}
              width={120}
              className="m-auto rounded-lg"
            />
          </div>
          <div className="text-lg font-semibold text-center">John Doe</div>
          <div className="text-gray-400 text-center">Designation Here</div>
        </div>
        <div className="w-4/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt atque
          vitae quasi maxime nobis assumenda officia dolorem similique expedita
          quibusdam quas accusamus aliquam voluptatibus consequatur, consectetur
          corrupti in saepe dignissimos iusto, quae eius quo rem, quam quia?
          Alias impedit, ipsum in corporis mollitia nulla ipsam ea voluptatum
          praesentium harum delectus? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aut iusto ullam deserunt provident error eveniet
          placeat doloremque, quam ducimus aliquam.
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
