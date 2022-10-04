import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { requireAuthentication } from "../../utils/requireAuthentication";
import { SessionObject } from "../../types/session";
import Loading from "../../components/Loading";

interface Session {
  session: SessionObject[];
}

const Dashboard: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  if (!user) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <h1 className="text-5xl leading-normal font-extrabold text-gray-700">
        DASHBOARD<span className="text-purple-300">/</span>
      </h1>
      <h2 className="text-xl mb-20">Hi {user?.name}! Welcome to Tickstem.</h2>
      <Link href={"/dashboard/new-ticket"}>
        <button className="p-2 m-2 w-3/4 rounded-lg bg-slate-300">
          Create a ticket
        </button>
      </Link>

      <Link href={"/dashboard/tickets"}>
        <button className="p-2 m-2 w-3/4 rounded-lg bg-slate-300">
          View my tickets
        </button>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return requireAuthentication(context, ({ session }: Session) => {
    return {
      props: {
        currentSession: session,
      },
    };
  });
};

export default Dashboard;
