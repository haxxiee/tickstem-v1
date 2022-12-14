import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const ticketRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        session: ctx.session,
      },
    });
  })
  .query("getAll", {
    async resolve({ ctx }) {
      const userId = ctx.session.user?.id;
      const user = await ctx.prisma.ticket.findMany({
        where: {
          userId: userId,
        },
      });
      return user;
    },
  })
  .query("getSingle", {
    input: z.object({
      ticketId: z.string(),
      userId: z.string(),
    }),
    async resolve({ input, ctx }) {
      const ticket = await ctx.prisma.ticket.findFirst({
        where: {
          AND: {
            id: input.ticketId,
            userId: input.userId,
          },
        },
      });
      return ticket;
    },
  })
  .mutation("createTicket", {
    input: z.object({
      userId: z.string(),
      product: z.string(),
      description: z.string(),
    }),
    async resolve({ input, ctx }) {
      const ticket = await ctx.prisma.ticket.create({
        data: {
          userId: input.userId,
          product: input.product,
          description: input.description,
        },
      });
      return ticket;
    },
  })
  .mutation("closeTicket", {
    input: z.object({
      ticketId: z.string(),
    }),
    async resolve({ input, ctx }) {
      const ticket = await ctx.prisma.ticket.update({
        where: {
          id: input.ticketId,
        },
        data: {
          status: "CLOSED",
        },
      });
      return ticket;
    },
  });
