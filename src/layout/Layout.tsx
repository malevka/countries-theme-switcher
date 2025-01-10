import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  return (
    <div className="flex h-screen flex-col text-black dark:text-white">
      <Header />
      <div className="grow px-8 md:container md:mx-auto md:px-0">
        {children}
      </div>
    </div>
  );
}

export default Layout;
