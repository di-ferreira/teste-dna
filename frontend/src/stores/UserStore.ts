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

  logged: Boolean = false;

  constructor() {
    makeObservable(this, {
      users: observable,
      loginUser: action,
      logoutUser: action,
      getUser: action,
      isLogged: computed,
    });
  }

  loginUser = (req: UserLogin) => {
    api.post("/sessions", req).then(async (response) => {
      const user = await response.data;
      const token = user.token;
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      this.logged = true;
    });
  };

  logoutUser = () => {
    api.defaults.headers.common["Authorization"] = "";
    this.logged = false;
  };

  getUser = (idUser: number) => {
    api.get(`/users/${idUser}`).then(async (response) => {
      const users = await response.data;
      console.log(users);
    });
  };

  get isLogged() {
    return this.logged;
  }
}

export default createContext(new UserStore());
