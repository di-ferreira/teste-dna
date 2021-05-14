import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface RequestUser {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}

class AuthUserService {
  public async execute({ email, password }: RequestUser): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Email or Password not find.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Email or Password not find.');
    }

    const token = sign({}, '10c8b5104d402915dcddc3e76cdf5681', {
      subject: user.id.toString(),
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthUserService;
