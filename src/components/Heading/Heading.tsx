interface HeadingProps {
  name: string;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ name, className, type = "h1", ...props }: HeadingProps) => {
  const fontSize = {
    h1: "text-1xl",
    h2: "text-xl",
    h3: "text-xl",
    h4: "text-xl",
    h5: "text-xl",
    h6: "text-xs",
  };
  const fontSizeSelected = fontSize[type];
  return (
    <h4
      className={`font-semibold leading-6 ${fontSizeSelected} ${className}`}
      {...props}
    >
      {name}
    </h4>
  );
};

export default Heading;
