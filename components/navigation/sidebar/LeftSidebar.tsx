import Link from "next/link";
import ROUTES from "@/constants/routes";
import NavLinks from "../navbar/NavLinks";
import { Button } from "../../ui/button";

const LeftSidebar = () => {
  return (
    <aside className="background-light900_dark200 no-scrollbar sticky top-21 hidden h-[calc(100vh-84px)] flex-col px-6 pt-10 pb-8 sm:flex">
      <div className="flex h-full flex-col gap-6">
        <NavLinks isMobileNav />
      </div>

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
    </aside>
  );
};

export default LeftSidebar;
