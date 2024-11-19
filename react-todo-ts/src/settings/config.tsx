type Config = {};
type ConfigLanguage = {
  id: string;
  name: string;
  code: string;
};
export const GetLanguages = (): Array<ConfigLanguage> => {
  return Settings.languages.languageSupport;
};

const Settings = {
  languages: {
    languageSupport: [
      {
        id: "vn",
        name: "Vietnam",
        code: "vn",
      },
      {
        id: "en",
        name: "English",
        code: "en",
      },
    ],
  },
};

export default Settings;
