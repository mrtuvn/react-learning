type ConfigLanguage = {
  id: string;
  name: string;
  code: string;
  icon?: string;
};
export function GetLanguages(): Array<ConfigLanguage> {
  return Settings.languages.languageSupport;
}

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
