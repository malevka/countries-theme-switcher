import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <div className="relative bg-white shadow-md dark:bg-dark-light">
      <header className="flex items-center justify-between px-8 py-5 md:container sm:py-12 md:mx-auto md:px-0 lg:py-3">
        <h1 className="text-xl font-medium sm:text-3xl lg:text-2xl lg:font-semibold">
          Where in the world?
        </h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default Header;
