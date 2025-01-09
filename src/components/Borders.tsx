import Border from "./Border";

interface IProps {
  borders: string[];
}
function Borders({ borders }: IProps) {
  return borders.length > 0 ? (
    <div className="flex flex-wrap items-center gap-5 lg:gap-3">
      <div className="mb-5 w-full text-3xl tracking-wide lg:mb-0 lg:w-auto lg:text-base lg:font-medium lg:tracking-normal">
        Border Countries:{" "}
      </div>
      {borders.map((name) => (
        <Border name={name} key={name} />
      ))}
    </div>
  ) : null;
}

export default Borders;
