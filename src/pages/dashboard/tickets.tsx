import { GetServerSideProps, NextPage } from "next";
import { Session, SessionObject } from "../../types/session";
import { requireAuthentication } from "../../utils/requireAuthentication";

const Tickets: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  console.log(user);
  return (
    <div>
      <div>TICKETS</div>
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
