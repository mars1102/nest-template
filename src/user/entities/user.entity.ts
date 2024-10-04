import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Log } from '../../log/entities/log.entity';
import { Role } from '../../role/entities/role.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'users_roles',
  })
  roles: Role[];
}
