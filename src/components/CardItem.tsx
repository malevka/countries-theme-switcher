interface IProps {
  title: string;
  children: React.ReactNode;
}

function CardItem({ title, children }: IProps) {
  return children ? (
    <p className="mb-2 text-base sm:text-3xl lg:mb-0 lg:text-sm">
      <span className="lg:font-medium">{title}: </span>
      <span className="font-extralight">{children}</span>
    </p>
  ) : null;
}

export default CardItem;
