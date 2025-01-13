import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";

interface IProps {
  isError: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}
function ContentWrapper({ children, isLoading, isError }: IProps) {
  return isLoading ? <LoadingSpinner /> : isError ? <Error /> : <>{children}</>;
}

export default ContentWrapper;
