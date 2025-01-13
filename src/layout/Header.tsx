import { Link } from "react-router";
import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <div className="transition-bg relative bg-white shadow-md dark:bg-dark-light">
      <header className="flex items-center justify-between px-8 py-5 md:container sm:py-12 md:mx-auto md:px-4 lg:py-3">
        <Link to="/">
          <h1 className="text-xl font-medium sm:text-3xl lg:text-2xl lg:font-semibold">
            Where in the world?
          </h1>
        </Link>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default Header;
