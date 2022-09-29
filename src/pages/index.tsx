import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { data: tickets } = trpc.useQuery(["example.getAll"]);

  const { data } = useSession();

  const testar = () => {
    if (data) {
      return (
        <>
          <button className="border-2" onClick={() => signOut()}>
            SIGN OUT
          </button>
        </>
      );
    }
    return (
      <>
        <button className="border-2" onClick={() => signIn()}>
          SIGN IN
        </button>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        {testar()}
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3"></div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>

        {tickets?.map((ticket) => {
          return (
            <>
              <div>{ticket.description}</div>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Home;
