import axios from "axios";
import { User } from "@/ts/accounts";

const accountUrl =
  "https://budol-shop-default-rtdb.asia-southeast1.firebasedatabase.app";

export const userAPI = {
  fetchById: async (userId: number) => {
    const response = await axios.get(`${accountUrl}/users/${userId}`);
    return response.data;
  },
  create: async (userData: User) => {
    const response = await axios.post(`${accountUrl}/users.json`, userData);
    return response.data;
  },
};
