import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="fixed bottom-0 w-full h-14
        px-2 md:px-14 border-t
        bg-slate-100 flex items-center
        "
    >
      <div className="md:max-w-screen-2xl w-full flex items-center justify-between my-auto mx-auto">
        <div className=" flex items-center justify-between w-full">
          <Button asChild size={"sm"} variant={"ghost"}>
            <Link to={"/sign-in"}>Privacy Policy</Link>
          </Button>
          <Button asChild size={"sm"} variant={"ghost"}>
            <Link to={"/sign-up"}>Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
