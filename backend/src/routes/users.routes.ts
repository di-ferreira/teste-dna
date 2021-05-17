import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

import { getRepository } from 'typeorm';

import User from '../models/User';
import UserDetails from '../models/UserDetails';

import verifyAuth from '../middlewares/verifyAuth';

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      birthdate,
      phone,
      website,
      address,
      status,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.saveUser({
      name,
      email,
      password,
      birthdate,
      phone,
      website,
      address,
      status,
    });

    // delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.get('/', verifyAuth, async (request, response) => {
  const users = getRepository(UserDetails);

  const getUsers = await users.find({ relations: ['user'] });

  return response.json(getUsers);
});

usersRoutes.get('/:id', verifyAuth, async (request, response) => {
  const userId = request.params.id;
  const user = getRepository(UserDetails);

  const getUser = await user.findOne({
    where: { userId },
    relations: ['user'],
  });

  delete getUser?.user.password;

  return response.json(getUser);
});

export default usersRoutes;
