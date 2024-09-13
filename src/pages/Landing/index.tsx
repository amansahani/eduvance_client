import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div className="flex items-center justify-center flex-col cal-sans">
        <div
          className="mb-4 flex items-center
            border shadow-sm p-4 flex-row
          bg-amber-100 text-amber-700
            rounded-full uppercase"
        >
          <Medal className="h-6 w-6 mr-2" />
          No 1 Project Management Tool
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-white mb-4">
          Kanban helps you to work forward
        </h1>
        <div
          className="text-3xl md:text-6xl
            bg-gradient-to-r
          from-fuchsia-600 to-pink-600
          text-white  rounded-md
            px-4 p-2 pb-4 w-fit"
        >
          Never missed a opportunity
        </div>
      </div>

      <div className="text-sm md:text-xl  mt-4 max-w-xs md:max-w-2xl text-center mx-auto poppins">
        <p className=" text-white">
          Streamline your projects with Kanban. Whether your team works in a
          bustling office or remotely, Kanban can help you achieve peak
          productivity.
        </p>
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link to={"sign-up"}>Get Kanban for free</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
