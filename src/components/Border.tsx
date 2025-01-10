import { Button } from "@mui/base";
import { Link } from "react-router";

interface IProps {
  name: string;
}
function Border({ name }: IProps) {
  return (
    <Link to={`/country/${name}`}>
      <Button
        key={name}
        className="flex items-center gap-4 rounded bg-white px-5 py-3 text-base font-light shadow-custom-sm dark:bg-dark-light dark:text-white sm:px-14 sm:py-3 sm:text-2xl lg:px-5 lg:py-1 lg:text-sm lg:tracking-wider"
      >
        {name}
      </Button>
    </Link>
  );
}

export default Border;
