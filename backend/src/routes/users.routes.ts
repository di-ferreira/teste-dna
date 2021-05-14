import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

import { getRepository } from 'typeorm';
import User from '../models/User';
import verifyAuth from '../middlewares/verifyAuth';

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.get('/', verifyAuth, async (request, response) => {
  const users = getRepository(User);

  const getUsers = await users.find({ select: ['id', 'name', 'email'] });

  return response.json(getUsers);
});

export default usersRoutes;
