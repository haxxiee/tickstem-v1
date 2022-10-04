import { FC } from "react";
import Link from "next/link";

interface Props {
  url: string;
}

const BackButton: FC<Props> = ({ url }) => {
  return (
    <Link href={url} className="mt-10">
      <button className="flex justify-center items-center w-20 border-2 border-gray-700 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
          />
        </svg>
        <p className="pl-1">Back</p>
      </button>
    </Link>
  );
};

export default BackButton;
