import { MAX_SHOW_PLANS } from "@/constants";
import { API_URL } from "../config";
import { IPlan, IResultPlanes, IUserApi } from "../types.d";

export const getUserData = async (): Promise<IUserApi> => {
  const response = await fetch(`${API_URL}/api/user.json`);
  const responseJson = await response.json();
  return responseJson;
};

export const getPlanes = async (age: number): Promise<IPlan[]> => {
  const response = await fetch(`${API_URL}/api/plans.json`);
  const responseJson = (await response.json()) as IResultPlanes;

  const filteredPlanes = responseJson.list
    .filter((plan) => plan.age > age)
    .slice(0, MAX_SHOW_PLANS);

  return filteredPlanes;
};
