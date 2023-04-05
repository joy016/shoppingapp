import axios from 'axios';
import { User, UserLogIn } from '@/ts/accounts';

const accountUrl = 'https://my-project-19b8b-default-rtdb.firebaseio.com/';

export const userAPI = {
  fetchLogin: async (userLogins: UserLogIn) => {
    const response = await axios.get(`${accountUrl}/users/${userLogins}`);
    return response.data;
  },
  create: async (userData: User) => {
    const response = await axios.post(`${accountUrl}/users.json`, userData);
    return response.data;
  },
  checkIfEmailExists: async (email: string) => {
    const response = await axios.get(
      `${accountUrl}/users.json?orderBy="email"&equalTo="${email}"`
    );
    const data = response.data;
    const emailExists = data && Object.keys(data).length > 0;
    return emailExists;
  },
};
