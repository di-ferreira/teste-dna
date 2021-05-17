import { getRepository, getConnection as connection } from 'typeorm';
import User from '../models/User';
import UserDetails from '../models/UserDetails';
import { hash } from 'bcryptjs';

interface RequestUser {
  name: string;
  email: string;
  password: string;
  birthdate: Date;
  phone: string;
  website: string;
  address: string;
  status: string;
}

interface RequestIdUser {
  idUser: string;
}

interface UserFull {
  name: string;
  email: string;
  birthdate: Date;
  phone: string;
  website: string;
  address: string;
  status: string;
}
class CreateUserService {
  public async saveUser({
    name,
    email,
    password,
    birthdate,
    phone,
    website,
    address,
    status,
  }: RequestUser): Promise<UserDetails> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const user = new User();
    const usersDetails = new UserDetails();

    const passwordHashed = await hash(password, 8);

    user.name = name;
    user.email = email;
    user.password = passwordHashed;

    await connection().manager.save(user);

    usersDetails.birthdate = birthdate;
    usersDetails.phone = phone;
    usersDetails.website = website;
    usersDetails.address = address;
    usersDetails.status = status;
    usersDetails.user = user;

    await connection().manager.save(usersDetails);

    delete usersDetails.user.password;

    return usersDetails;
  }
}

export default CreateUserService;
