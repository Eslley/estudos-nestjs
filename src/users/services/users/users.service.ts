import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/Users';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'rubem',
      password: '1234',
    },
    {
      username: 'eslley',
      password: '12345',
    },
    {
      username: 'rubem1',
      password: '1111',
    },
    {
      username: 'eslley1',
      password: '2222',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
