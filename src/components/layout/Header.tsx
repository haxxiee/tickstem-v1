import { FC } from "react";
import { useSession } from "next-auth/react";
import Headerbutton from "./Headerbutton";
import Link from "next/link";

const Header: FC<unknown> = () => {
  const { data } = useSession();

  return (
    <div className="flex justify-between items-center my-5">
      <Link href="/">
        <a>
          <div className="text-xl font-extrabold text-slate-600">TICKSTEM</div>
        </a>
      </Link>

      {data ? (
        <Headerbutton text={"Log out"} signed={true} />
      ) : (
        <Headerbutton text={"Sign in"} signed={false} />
      )}
    </div>
  );
};

export default Header;
