import { GetServerSideProps, NextPage } from "next";
import { Session, SessionObject } from "../../types/session";
import { requireAuthentication } from "../../utils/requireAuthentication";
import { trpc } from "../../utils/trpc";

const Tickets: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  const { data } = trpc.useQuery(["ticketRouter.getAll"]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>TICKETS</div>
      {data?.map((ticket) => {
        return <div key={ticket.id}>{ticket.description}</div>;
      })}
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
