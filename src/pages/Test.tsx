import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Test = (props: Props) => {
  const { userId } = useParams();
  return <div>Test {userId}</div>;
};

export default Test;
