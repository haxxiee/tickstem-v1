import { GetServerSideProps, NextPage } from "next";
import TicketItem from "../../../components/TicketItem";
import { Session, SessionObject } from "../../../types/session";
import { requireAuthentication } from "../../../utils/requireAuthentication";
import { trpc } from "../../../utils/trpc";

const Tickets: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  const { data } = trpc.useQuery(["ticketRouter.getAll"]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mt-10">TICKETS</h1>
      <table className="w-full text-sm mt-10 text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              Product
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ticket) => {
            return <TicketItem key={ticket.id} ticket={ticket} />;
          })}
        </tbody>
      </table>
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

export default Tickets;
