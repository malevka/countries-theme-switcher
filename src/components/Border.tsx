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
        className="flex items-center gap-5 mb-4  bg-white shadow-md py-4 px-12 text-base rounded tracking-wider font-light"
      >
        {name}
      </Button>
    </Link>
  );
}

export default Border;
