import { FC } from "react";
import { useSession } from "next-auth/react";
import Headerbutton from "../Headerbutton";

const Header: FC<unknown> = () => {
  const { data } = useSession();

  return (
    <div className="flex justify-between items-center my-5">
      <div className="text-xl font-extrabold text-slate-600">TICKSTEM</div>

      {data ? (
        <Headerbutton text={"Sign out"} signed={true} />
      ) : (
        <Headerbutton text={"Sign in"} signed={false} />
      )}
    </div>
  );
};

export default Header;
