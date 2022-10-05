import { GetServerSideProps, NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { User } from "../../../types/session";
import Loading from "../../../components/Loading";

interface Props {
  id: string;
  user: User;
}

const TicketIdPage: NextPage<Props> = ({ id, user }) => {
  const { data, refetch } = trpc.useQuery([
    "ticketRouter.getSingle",
    { ticketId: id, userId: user.id },
  ]);

  const closeTicket = trpc.useMutation(["ticketRouter.closeTicket"]);

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    closeTicket
      .mutateAsync({
        ticketId: id,
      })
      .then(() => {
        refetch();
      });
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-20 max-w-3xl">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg font-bold">Ticket ID: {data?.id}</h2>
        <span
          className={`px-4 rounded-xl text-white font-bold ${
            data.status === "NEW" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {data?.status}
        </span>
      </div>

      <h3 className="w-full font-semibold border-b border-gray-400 py-2">
        Date Submitted:{" "}
        {data?.createdAt && new Date(data?.createdAt).toLocaleString("en-US")}
      </h3>

      <div className="w-full bg-slate-200 rounded-md p-4 my-5 shadow-sm">
        <h3 className="font-bold">Description of Issue:</h3>
        <p>{data?.description}</p>
      </div>

      <button
        disabled={data.status === "CLOSED"}
        className={`bg-red-500 w-full rounded-lg text-white font-semibold ${
          data.status === "CLOSED" && "bg-red-200"
        }`}
        onClick={buttonHandler}
      >
        Close Ticket
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session?.user)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  const user = session?.user;
  const id = context.params?.id?.toString();

  return { props: { id, user } };
};

export default TicketIdPage;
