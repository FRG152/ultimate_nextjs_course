import Link from "next/link";
import ROUTES from "@/constants/routes";
import NavLinks from "../navigation/navbar/NavLinks";
import { Button } from "../ui/button";
import SidebarContent from "./SidebarContent";

const LeftSidebar = () => {
  return (
    <SidebarContent>
      <section className="flex h-full flex-col gap-6 pt-16">
        <NavLinks isMobileNav />
      </section>

      <div className="flex flex-col gap-3">
        <Link href={ROUTES.SIGN_IN}>
          <Button className={"small-medium btn-secondary min-h-10.25] w-full rounded-lg px-4 py-3 shadow-none"}>
            <span className="primary-text-gradient">Log In</span>
          </Button>
        </Link>

        <Link href={ROUTES.SIGN_IN}>
          <Button
            className={
              "small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg border px-4 py-3 shadow-none"
            }
          >
            <span>Sign Up</span>
          </Button>
        </Link>
      </div>
    </SidebarContent>
  );
};

export default LeftSidebar;
