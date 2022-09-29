import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export const requireAuthentication = async (context: any, cb: any) => {
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

  return cb({ session });
};
