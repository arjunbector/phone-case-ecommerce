import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/configure/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-[#1E293A]">
      <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps/>
      {children}
    </MaxWidthWrapper>
    </div>
  );
};

export default Layout;
