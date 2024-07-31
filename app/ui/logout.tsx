import { signOut } from "@/auth";
import React from "react";
import { Button } from "./button";
import { redirect } from "next/navigation";

const Logout = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
        redirect("/");
      }}
    >
      <Button variant="outline">Logout</Button>
    </form>
  );
};

export default Logout;
