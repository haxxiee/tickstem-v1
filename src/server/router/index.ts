// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { protectedExampleRouter } from "./protected-example-router";
import { ticketRouter } from "./ticketRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("ticketRouter.", ticketRouter)
  .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
