import "./Icon.css";

interface IconProps {
  icon: string;
  altName: string;
  className?: string;
}
const Icon = ({ icon, altName, className, ...props }: IconProps) => {
  return (
    <div className={`p-2 rounded-full ${className}`} {...props}>
      <img src={icon} className=" fill-green hover:text-black" alt={altName} />
    </div>
  );
};

export default Icon;
