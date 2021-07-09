import { createContext } from "react";
import { action, makeObservable, observable, computed } from "mobx";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  birthdate?: Date;
  phone?: string;
  website?: string;
  address?: string;
  status: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

class UserStore {
  users: User = {
    id: 0,
    name: "string",
    email: "",
    birthdate: new Date(),
    phone: "",
    website: "",
    address: "",
    status: "unemployed",
  };

  constructor() {
    makeObservable(this, {
      users: observable,
      loginUser: action,
      logoutUser: action,
      getUser: action,
      getUsers: action,
      isLogged: computed,
    });
  }

  get isLogged() {
    return Boolean(localStorage.getItem("@DNA:isLogged"));
  }

  loginUser = (req: UserLogin) => {
    api.get("/users").then(async (response: any) => {
      const data = await response.data;

      const user: any = data.filter((u: UserLogin) => {
        return u.email === req.email && u.password === req.password;
      });

      if (user !== [] || user !== undefined || user !== "") {
        localStorage.setItem("@DNA:user", JSON.stringify(user));
        localStorage.setItem("@DNA:isLogged", "true");
      }
    });
  };

  logoutUser = () => {
    localStorage.removeItem("@DNA:user");
    localStorage.removeItem("@DNA:isLogged");
  };

  getUser = (idUser: number) => {
    api.get(`/users/${idUser}`).then(async (response: any) => {
      const users = await response.data;
      return users;
    });
  };

  getUsers = () => {
    api.get(`/users/`).then(async (response: any) => {
      const users = await response.data;
      console.log(users);
      return users;
    });
  };
}

export default createContext(new UserStore());
