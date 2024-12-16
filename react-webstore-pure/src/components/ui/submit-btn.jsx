import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = ({ ref }) => {
  const { pending } = useFormStatus();
  return <div ref={ref}>{pending ? "Creating post...." : "Create Post"}</div>;
};

export default SubmitBtn;
