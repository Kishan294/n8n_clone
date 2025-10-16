import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";
export const appRouter = createTRPCRouter({
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: { email: "kishan@test.com" },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
