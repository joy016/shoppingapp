export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserLogIn {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export interface resetLogin {
  email: string;
  password: string;
  confirmPassword: string;
}
