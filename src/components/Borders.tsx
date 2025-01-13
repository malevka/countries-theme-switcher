import Border from "./Border";

interface IProps {
  borders: string[];
}
function Borders({ borders }: IProps) {
  if (borders.length <= 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-5 lg:gap-3">
      <div className="mb-2 w-full text-xl tracking-wide sm:mb-5 sm:text-3xl lg:mb-0 lg:w-auto lg:text-base lg:font-medium lg:tracking-normal">
        Border Countries:{" "}
      </div>
      {borders.map((name) => (
        <Border name={name} key={name} />
      ))}
    </div>
  );
}

export default Borders;
