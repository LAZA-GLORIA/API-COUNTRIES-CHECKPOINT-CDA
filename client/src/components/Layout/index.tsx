import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
