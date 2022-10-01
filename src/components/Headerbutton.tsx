import { FC } from "react";
import { signIn, signOut } from "next-auth/react";

interface Props {
  text: string;
  signed: boolean;
}

const Headerbutton: FC<Props> = ({ text, signed }) => {
  const handleClick = (signed: boolean) => {
    if (signed) {
      return signOut();
    } else {
      return signIn();
    }
  };
  return (
    <button
      className=" flex justify-center items-center p-2 px-3 rounded-md bg-slate-300"
      onClick={() => handleClick(signed)}
    >
      {text}
    </button>
  );
};

export default Headerbutton;
