import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className=" justify-center items-center flex-row hidden md:flex">
      <p className="text-lg text-neutral-700 pb-1 cal-sans">KANBAN</p>
    </div>
  );
};

export default Logo;
