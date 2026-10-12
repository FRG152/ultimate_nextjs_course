import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/sidebar/LeftSidebar";
import RightSidebar from "@/components/navigation/sidebar/RightSidebar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100">
      <Navbar />
      <section className="flex min-h-screen justify-between">
        <LeftSidebar />
        {children}
        <RightSidebar />
      </section>
    </main>
  );
};

export default RootLayout;
