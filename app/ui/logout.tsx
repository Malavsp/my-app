import React from "react";
import { Button } from "./button";
import { logOut } from "@/lib/action/form";

const Logout = () => {
  return (
    <form action={logOut}>
      <Button variant="outline">Logout</Button>
    </form>
  );
};

export default Logout;
