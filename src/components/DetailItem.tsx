interface IProps {
  title: string;
  children: React.ReactNode;
}

function DetailItem({ title, children }: IProps) {
  return children ? (
    <p className="mb-7 text-3xl lg:mb-2 lg:text-base">
      <span className="lg:font-medium">{title}: </span>
      <span className="font-extralight">{children}</span>
    </p>
  ) : null;
}

export default DetailItem;
