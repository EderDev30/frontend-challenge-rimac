export enum TypeDoc {
  DNI = "DNI",
  RNU = "RUC",
}

export interface IUserApi {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface IUser extends IUserApi {
  phone: string;
  typeDoc: string;
  nroDoc: string;
  plan: Omit<IPlan, "description" | "age">;
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
