export interface IUserApi {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface IResultPlanes {
  list: Plan[];
}

export interface IPlan {
  name: string;
  price: number;
  description: string[];
  age: number;
}
