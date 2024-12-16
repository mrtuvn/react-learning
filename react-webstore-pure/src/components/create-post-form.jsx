import React, { useActionState, use, useRef } from "react";
import { createPost } from "@/actions/actions";
import SubmitBtn from "./ui/submit-btn";
import { AppContextProvider } from "../contexts/AppContextProvider";

const CreatePostForm = () => {
  const [error, action, isPending] = useActionState(createPost, "");

  const submitBtnRef = useRef(null);

  //   if (!submitBtnRef.current) {
  //     return null;
  //   }

  const { count, setCount } = use(AppContextProvider);

  return (
    <>
      <form action={action}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          disabled={isPending}
        />
        {error && <p>{error}</p>}
        <SubmitBtn ref={submitBtnRef} />
      </form>
      Count:
      <br />
      <button onClick={setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
};

export default CreatePostForm;
