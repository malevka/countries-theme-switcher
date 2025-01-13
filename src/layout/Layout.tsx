import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  return (
    <div className="flex min-h-screen flex-col text-black dark:bg-dark-light dark:text-white">
      <Header />
      <div className="grow px-8 md:container md:mx-auto md:px-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
