import * as Interfaces from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: number
}

class Employee implements Interfaces.Login {
    #id: number;
    name: string;
    address: Address;
    protected extId: number;

    // can have either default or parameterized constructor
    constructor(id: number, name: string, address: Address, extId: number) {
        this.#id = id;
        this.name = name;
        this.address = address;
        this.extId = extId;
    }

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    getNameWithAddress(): string {
        return `${this.name}, ${this.address}`;
    }

    login(): Interfaces.User {
        return {
            name: 'Bharati',
            age: 24,
            id: 1234,
            email: 'bharati@gmail.com'
        }
    }
}

let emp = new Employee(1, 'John', {
    street: 'ABC',
    city: "Bangalore",
    state: 'Karnataka',
    pin: 543214
}, 1234);
console.log(emp);
console.log(emp.getNameWithAddress());
// console.log(emp.#id); // cannot access private variables

class Manager extends Employee {
    branch: string;
    constructor(id: number, name: string, address: Address, extId: number, branch: string) {
        super(id, name, address, extId);
        this.branch = branch;
    }

    getExternalId() {
        return this.extId;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address} and is manager for ${this.branch}`
    }
}

const manager = new Manager(1, "jane", {
    street: 'ABC',
    city: "Bangalore",
    state: 'Karnataka',
    pin: 543214
}, 1224, "Branch 1234");
// manager.#id // cannot access private variables
// to allow access of variables even within the child classes use 'protected'
// console.log(manager.extId); // not available outside
console.log(manager.getExternalId());
console.log(manager.getNameWithAddress());
console.log(manager.empId);
manager.empId = 100;
console.log(manager.empId);
