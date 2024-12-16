import React from "react";

const actions = () => {
  return <div>actions</div>;
};

export const createPost = async (formData) => {
  console.log(formData);
  console.log("wtf");
  const title = formData.get("title");
  console.log("create post with title", title);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "we cannot create post";
};

export default actions;
