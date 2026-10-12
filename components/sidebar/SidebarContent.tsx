import { ReactNode } from "react";

const SidebarContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="background-light900_dark200 no-scrollbar hidden h-full flex-col justify-between px-6 pt-10 pb-8 sm:flex">
      {children}
    </div>
  );
};

export default SidebarContent;
