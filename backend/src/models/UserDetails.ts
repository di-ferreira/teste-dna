import {
  Column,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

class UserDetails {
  @PrimaryColumn()
  id: number;

  @Column()
  birthdate: Date;

  @Column()
  phone: string;

  @Column()
  website: string;

  @Column()
  adress: string;

  @Column()
  status: string;

  @Column()
  avatar: string;

  @Column()
  userId: number;

  @OneToOne(() => User, user => user.id, { cascade: ['insert', 'remove'] })
  @JoinColumn({ name: 'userId' })
  user: User;
}

export default UserDetails;
