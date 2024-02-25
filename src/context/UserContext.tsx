import { createContext, useState } from "react";
import { IUser, TypeDoc } from "../types.d";

type TUserContext = {
  user: IUser;
  updateUser: (user: Partial<IUser>) => void;
};

const defaultUser: IUser = {
  name: "",
  lastName: "",
  birthDay: "",
  phone: "",
  typeDoc: TypeDoc.DNI,
  nroDoc: "",
  plan: {
    name: "",
    price: 0,
  },
};

export const UserContext = createContext<TUserContext>({
  user: defaultUser,
  updateUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(defaultUser);
  const updateUser = (newUser: Partial<IUser>) =>
    setUser({
      ...user,
      ...newUser,
    });

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
