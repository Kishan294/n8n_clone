"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import React from "react";

const HomePage = () => {
  const users = trpc.getUsers.useQuery();
  return (
    <div className="text-3xl font-bold">
      {JSON.stringify(users.data)}
      <Button>Click me</Button>
    </div>
  );
};

export default HomePage;
