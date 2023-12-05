"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Bharati',
    age: 24,
    id: 1234,
    email: 'bharati@gmail.com'
};
const empp = {
    name: 'Jane',
    id: 12,
    email: 'jane@gmail.com',
    salary: 3000
};
const [{ name, id }, user2, ...otherUsrrs] = [
    {
        name: 'John1', id: 1, email: ''
    },
    {
        name: 'John2', id: 2, email: ''
    },
    {
        name: 'John3', id: 3, email: ''
    }
];
