export type Language = {
  id: string;
  name: string;
  code: string;
};

export interface User {
  name: string;
  id: number;
}

const user: User = {
  id: 0,
  name: "John Does",
};

const Me = {
  name: "tu",
};

Me.name = "tuna";
