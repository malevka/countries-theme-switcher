import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  return (
    <div className="h-screen flex flex-col text-black dark:text-white">
      <Header />
      <div className="container mx-auto grow px-7">{children}</div>
    </div>
  );
}

export default Layout;
