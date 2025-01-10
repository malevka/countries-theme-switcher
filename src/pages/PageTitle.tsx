import { useEffect } from "react";
import { useLocation } from "react-router";

interface IProps {
  title: string;
}
function PageTitle({ title }: IProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
}

export default PageTitle;
