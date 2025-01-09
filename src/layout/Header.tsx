import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <div className="shadow-md bg-white relative dark:bg-dark-light">
      <header className="container mx-auto py-12 lg:py-3 flex justify-between items-center ">
        <h1 className="text-3xl lg:text-2xl font-medium lg:font-semibold">
          Where in the world?
        </h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default Header;
