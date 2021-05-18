import { createContext } from "react";
import { action, makeObservable, observable } from "mobx";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  phone: string;
  website: string;
  address: string;
  status: string;
}

class UsersStore {
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      getUsers: action,
      getUser: action,
    });
  }

  getUsers = () => {
    api.get("/users").then(async (response) => {
      const users = await response.data;
      console.log(users);
    });
  };

  getUser = (idUser: any) => {
    api.get(`/users/${idUser}`).then(async (response) => {
      const users = await response.data;
      console.log(users);
    });
  };
}

export default createContext(new UsersStore());
