interface IProps {
  title: string;
  children: React.ReactNode;
  type: "card" | "detail";
}

const styles = {
  card: "mb-2 text-base lg:mb-0 lg:text-sm",
  detail: "mb-1 text-lg sm:mb-7 lg:mb-2 lg:text-base",
};
function InfoItem({ title, children, type }: IProps) {
  return children ? (
    <p className={`sm:text-3xl ${styles[type]} lg:font-semibold`}>
      <span className="lg:font-medium">{title}: </span>
      <span className="font-extralight">{children}</span>
    </p>
  ) : null;
}

export default InfoItem;
