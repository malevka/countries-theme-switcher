import Border from "./Border";

interface IProps {
  borders: string[];
}
function Borders({ borders }: IProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {borders.map((name) => (
        <Border name={name} key={name} />
      ))}
    </div>
  );
}

export default Borders;
