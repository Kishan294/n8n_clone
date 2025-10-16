"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { trpc } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";

const HomePage = () => {
  // await requireAuth();

  const data = trpc.testAi.useMutation();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* {JSON.stringify(data)} */}
      <h1 className="text-3xl font-bold">Hey</h1>
      <Button disabled={data.isPending} onClick={() => data.mutate()}>
        Test AI
      </Button>
      {/* <Button onClick={() => signOut()}>Logout</Button> */}
    </div>
  );
};

export default HomePage;
