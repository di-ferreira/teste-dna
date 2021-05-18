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
    api.post("/sessions", req).then(async (response: any) => {
      const data = await response.data;
      const token = data.token;
      const user = data.user;
      console.log(data);
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("@DNA:token", token);
      localStorage.setItem("@DNA:user", JSON.stringify(user));
      localStorage.setItem("@DNA:isLogged", "true");
    });
  };

  logoutUser = () => {
    api.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("@DNA:token");
    localStorage.removeItem("@DNA:user");
    localStorage.removeItem("@DNA:isLogged");
  };

  getUser = (idUser: number) => {
    const token = localStorage.getItem("@DNA:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    api.get(`/users/${idUser}`).then(async (response: any) => {
      const users = await response.data;
      return users;
    });
  };

  getUsers = () => {
    const token = localStorage.getItem("@DNA:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    api.get(`/users/`).then(async (response: any) => {
      const users = await response.data;
      console.log(users);
      return users;
    });
  };
}

export default createContext(new UserStore());
