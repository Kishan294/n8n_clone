import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(() => {
    return {
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane.doe@example.com",
        },
      ],
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
