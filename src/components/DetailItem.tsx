interface IProps {
  title: string;
  children: React.ReactNode;
}

function DetailItem({ title, children }: IProps) {
  return children ? (
    <p className="mb-11 lg:mb-5">
      <span className="font-medium">{title}: </span>
      {children}
    </p>
  ) : null;
}

export default DetailItem;
