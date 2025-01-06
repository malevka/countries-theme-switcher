interface IProps {
  title: string;
  children: React.ReactNode;
}

function CardItem({ title, children }: IProps) {
  return children ? (
    <p className="mb-2">
      <span className="font-medium">{title}: </span>
      {children}
    </p>
  ) : null;
}

export default CardItem;
