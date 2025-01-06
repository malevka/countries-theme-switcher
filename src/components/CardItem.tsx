interface IProps {
  title: string;
  children: React.ReactNode;
}

function CardItem({ title, children }: IProps) {
  return (
    <p className="mb-2">
      <span className="font-medium">{title}: </span>
      {children}
    </p>
  );
}

export default CardItem;
