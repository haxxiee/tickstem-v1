// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const testar = await prisma.user.update({
    where: {
      id: "cl8jb3g440000lgutmzw1nsa0",
    },
    data: {
      tickets: {
        connect: {
          id: "cl8jcztwy00014gutvrlqsmln",
        },
      },
    },
  });

  res.status(200).json(testar);
};

export default examples;
