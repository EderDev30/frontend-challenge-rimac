import { TUser } from "../types";

export const getUserData = async (): Promise<TUser> => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );
  const responseJson = await response.json();
  return responseJson;
};
