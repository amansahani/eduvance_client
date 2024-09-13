import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div
      className="fixed top-0 w-full h-14
        px-2 md:px-14 border-b shadow-sm
      bg-white flex items-center"
    >
      <div className="md:max-w-screen-2xl w-full flex items-center justify-between mx-auto">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button asChild size={"sm"} variant={"outline"}>
            <Link to={"/sign-in"}>Login</Link>
          </Button>
          <Button asChild size={"sm"}>
            <Link to={"/sign-up"}>Get Kanban for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
