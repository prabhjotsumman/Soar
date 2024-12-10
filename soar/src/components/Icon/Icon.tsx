import "./Icon.css";

interface IconProps {
  icon: string;
  altName: string;
  className?: string;
}
const Icon = ({ icon, altName, className, ...props }: IconProps) => {
  return (
    <div className={`p-2 rounded-full ${className}`} {...props}>
      <img src={icon} className="w-7 h-7 fill-green hover:text-black" alt={altName} />
    </div>
  );
};

export default Icon;
