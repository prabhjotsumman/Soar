interface AvatarProps {
  name: string;
  designation: string;
  picture: string;
  selected?: boolean;
}

const AvatarCard = ({ name, designation, picture, selected }: AvatarProps) => {
  return (
    <div className="items-center justify-center text-center self-center place-items-center min-w-20">
      <img src={picture} alt="user" className="rounded-full" />
      <p className={`${selected ? "font-bold" : "font-normal"} text-base mt-4`}>
        {name}
      </p>
      <p
        className={`${
          selected ? "font-bold" : "font-normal"
        } text-base text-purple mb-8`}
      >
        {designation}
      </p>
    </div>
  );
};

export default AvatarCard;
