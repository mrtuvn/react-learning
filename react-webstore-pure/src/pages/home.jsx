import React, { use, Suspense, useMemo } from "react";
import Demo from "../components/cart/demo";
//import CreatePostForm from "@/components/create-post-form";

const HomePage = () => {
  //   const fetchPosts = (async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=4"
  //     );

  //     return response.json();
  //   })();

  //   const posts = use(fetchPosts);

  //   const sortedPosts = useMemo(
  //     () => posts.sort((a, b) => a.title.localeCompare(b.title)),
  //     [posts]
  //   );

  return (
    <>
      {/* <Suspense fallback={<div>Loading</div>}>
        <ul>
          {sortedPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Suspense> */}

      <div className="sf">{/* <CreatePostForm /> */}</div>

      <div>
        <Demo />
      </div>
    </>
  );
};

export default HomePage;
