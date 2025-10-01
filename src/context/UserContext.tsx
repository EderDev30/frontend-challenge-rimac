import { createContext, useEffect, useState } from "react";
import { IUser, TypeDoc } from "../types.d";

type TUserContext = {
  user: IUser | null;
  updateUser: (user: Partial<IUser>) => void;
  resetUser: () => void;
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
  resetUser: () => {},
});

function getInitialState(): IUser | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(getInitialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const updateUser = (newUser: Partial<IUser>) => {
    if (user) {
      setUser({
        ...user,
        ...newUser,
      });
    } else {
      setUser({
        ...defaultUser,
        ...newUser,
      });
    }
  };

  const resetUser = () => setUser(null);

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
