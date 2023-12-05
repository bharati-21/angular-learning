"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // can have either default or parameterized constructor
    constructor(id, name, address, extId) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
        this.extId = extId;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name}, ${this.address}`;
    }
    login() {
        return {
            name: 'Bharati',
            age: 24,
            id: 1234,
            email: 'bharati@gmail.com'
        };
    }
}
_Employee_id = new WeakMap();
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
    constructor(id, name, address, extId, branch) {
        super(id, name, address, extId);
        this.branch = branch;
    }
    getExternalId() {
        return this.extId;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address} and is manager for ${this.branch}`;
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
