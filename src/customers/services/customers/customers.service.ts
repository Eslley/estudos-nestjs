import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    private users = [{
        id: 1,
        email: 'rubem@email.com',
        createdAt: new Date(),
    },
    {
        id: 2,
        email: 'eslley@email.com',
        createdAt: new Date(),
    },
    {
        id: 3,
        email: 'rocha@email.com',
        createdAt: new Date(),
    },
];

    getAllCustomer() {
        return this.users;
    }

    findCustomerById(id: number) {
        return this.users.find(user => user.id === id);
    }
}
