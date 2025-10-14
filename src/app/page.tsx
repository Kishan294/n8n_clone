import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { trpc } from "@/trpc/server";

const HomePage = async () => {
  await requireAuth();

  const data = await trpc.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(data)}
      <h1 className="text-3xl font-bold">Hey</h1>
      {/* <Button onClick={() => signOut()}>Logout</Button> */}
    </div>
  );
};

export default HomePage;
