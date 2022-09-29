import { NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Loading from "../../components/Loading";

const Dashboard: NextPage = ({ currentSession: { user } }: any) => {
  if (!user) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <h1 className="text-5xl leading-normal font-extrabold text-gray-700">
        DASHBOARD<span className="text-purple-300">/</span>
      </h1>
      <h2 className="text-xl mb-20">Hi {user?.name}!</h2>
      <button className="p-2 m-2 w-3/4 rounded-lg bg-slate-300">
        Create a ticket
      </button>
      <button className="p-2 m-2 w-3/4 rounded-lg bg-slate-300">
        View my tickets
      </button>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  console.log(session?.user);

  if (session?.user) {
    return {
      props: { currentSession: session },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Dashboard;
