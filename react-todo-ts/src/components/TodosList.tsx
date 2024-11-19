import React, { useEffect } from "react";
import GetLanguages from "@settings/config";

const TodosList = () => {
  const [langs, setLangs] = React.useState();
  useEffect(() => {
    let getLangs = GetLanguages();
    setLangs(getLangs);
    console.log("first run after mount");
  }, []);

  return (
    <div>
      <p>Select languages:</p>
      <ul>
        {langs?.map((lang) => (
          <li key={lang.id}>{lang.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
