import { GetServerSideProps, NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { User } from "../../../types/session";

interface Props {
  id: string;
  user: User;
}

const TicketIdPage: NextPage<Props> = ({ id, user }) => {
  const { data } = trpc.useQuery([
    "ticketRouter.getSingle",
    { ticketId: id, userId: user.id },
  ]);

  return (
    <div>
      <div>{data?.id}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  const user = session?.user;

  const id = context.params?.id?.toString();

  return { props: { id, user } };
};

export default TicketIdPage;
