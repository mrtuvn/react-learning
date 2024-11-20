import React, { useEffect } from "react";
import { GetLanguages } from "../settings/config";

const LanguageList = () => {
  const [langs, setLangs] = React.useState([]);

  useEffect(() => {
    let getDataLangs = GetLanguages();
    setLangs(getDataLangs);
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

export default LanguageList;
