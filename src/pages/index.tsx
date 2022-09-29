import type { NextPage } from "next";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { data: tickets } = trpc.useQuery(["example.getAll"]);

  // const { data } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center text-center justify-center p-4 mt-60">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          TIC<span className="text-purple-300">KS</span>TEM
        </h1>
        <p className="text-2xl text-gray-700">A system for ticket reports!</p>
        <p className="text-xl text-gray-700">Sign in to report your problem</p>

        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3"></div>
        {/* <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}

        {/* {tickets?.map((ticket) => {
          return (
            <div key={ticket.id}>
              <div>{ticket.description}</div>
            </div>
          );
        })} */}
      </main>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session?.user) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } else {
    return { props: {} };
  }
}

export default Home;
