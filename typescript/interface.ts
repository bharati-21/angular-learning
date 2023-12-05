export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

const user: User = {
    name: 'Bharati',
    age: 24,
    id: 1234,
    email: 'bharati@gmail.com'
}

interface Employees extends User {
    salary: number;
}
const empp: Employees = {
    name: 'Jane',
    id: 12,
    email: 'jane@gmail.com',
    salary: 3000
}

export interface Login {
    login(): User;
}

const [{ name, id }, user2, ...otherUsrrs]: User[] = [
    {
        name: 'John1', id: 1, email: ''
    },
    {
        name: 'John2', id: 2, email: ''
    },
    {
        name: 'John3', id: 3, email: ''
    }
]