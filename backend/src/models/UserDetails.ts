import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('users_details')
class UserDetails {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  birthdate: Date;

  @Column()
  phone: string;

  @Column()
  website: string;

  @Column()
  address: string;

  @Column()
  status: string;

  @Column()
  userId: number;

  @OneToOne(() => User, user => user.id, { cascade: ['insert', 'remove'] })
  @JoinColumn({ name: 'userId' })
  user: User;
}

export default UserDetails;
