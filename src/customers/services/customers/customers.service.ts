import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [{
        id: 1,
        email: 'rubem@email.com',
        name: 'Rubem'
    },
    {
        id: 2,
        email: 'eslley@email.com',
        name: 'Eslley'
    },
    {
        id: 3,
        email: 'rocha@email.com',
        name: 'Rocha'
    },
];

    getAllCustomers() {
        return this.customers;
    }

    findCustomerById(id: number) {
        return this.customers.find(user => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }
}
