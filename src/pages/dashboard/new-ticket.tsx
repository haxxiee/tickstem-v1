import { GetServerSideProps, NextPage } from "next";
import Loading from "../../../components/Loading";
import { Session, SessionObject } from "../../types/session";
import { requireAuthentication } from "../../utils/requireAuthentication";

const NewTicket: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  return (
    <div>
      <div>NEW TICKET {}</div>
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

export default NewTicket;
