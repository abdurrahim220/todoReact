type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="h-screen w-full max-w-7xl mx-auto py-10">{children}</div>;
};

export default Container;
