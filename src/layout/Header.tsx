import ThemeToggle from "../components/ThemeToggle";

function Header() {
  return (
    <div className="shadow-md bg-white relative dark:bg-dark-light">
      <header className="container mx-auto px-7 py-6 flex justify-between items-center ">
        <h1 className="font-semibold">Where in the world?</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default Header;
