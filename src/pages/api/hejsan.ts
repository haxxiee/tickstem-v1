import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const hejsan = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.ticket.create({
    data: {
      userId: "cl8jb3g440000lgutmzw1nsa0",
      product: "Laptop",
      description: "Bluescreen 24/7",
    },
  });
  res.status(200).json(user);
};

export default hejsan;
