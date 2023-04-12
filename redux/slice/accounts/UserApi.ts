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
  checkLoginUser: async (email: string, password: string) => {
    const response = await axios.get(
      `${accountUrl}/users.json?orderBy="email"&equalTo="${email}"`
    );
    const data = response.data;

    if (data) {
      const userData: { password: string } = Object.values(data)[0] as {
        password: string;
      };
      if (userData.password === password) {
        return true;
      }
    }
    // Return false if either email or password does not match
    return false;
  },
  resetPassword: async (email: string, password: string) => {
    const response = await axios.get(
      `${accountUrl}/users.json?orderBy="email"&equalTo="${email}"`
    );

    const data = response.data;
    const user = data && Object.keys(data).length > 0;
    if (!user) {
      throw new Error('User not found');
    }

    // user.password = password;
    const id = Object.keys(data);
    const userData = data[id[0]];
    userData.password = password;

    console.log('yummy', password);

    await axios.put(`${accountUrl}/users/${id[0]}.json`, userData);
    console.log('Ok na gago');
    return 'Password updated';
  },
};
