import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="flex h-screen items-center justify-between">
        <LeftSidebar />
        {children}
        {/* TODO: Luego haremos crearemos el contenido para este componente */}
        {/* <RightSidebar /> */}
      </section>
    </main>
  );
};

export default RootLayout;
