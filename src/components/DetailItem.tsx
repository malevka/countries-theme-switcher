interface IProps {
  title: string;
  children: React.ReactNode;
}

function DetailItem({ title, children }: IProps) {
  return children ? (
    <p className="mb-1 text-lg sm:mb-7 sm:text-3xl lg:mb-2 lg:text-base">
      <span className="lg:font-medium">{title}: </span>
      <span className="font-extralight">{children}</span>
    </p>
  ) : null;
}

export default DetailItem;
