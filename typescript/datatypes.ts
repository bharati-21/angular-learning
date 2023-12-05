/* --- strings --- */
let fname: string;
fname = "Bharati";

const newName = fname.toUpperCase();
console.log(newName);

/* --- numbers --- */
let age: number;
age = 24;
// age = "25"; // error
console.log(age.toLocaleString());

/* --- boolean --- */
let isAdult: boolean;
// console.log(isAdult); // strict mode in TS throws an error when using a variable that is undefined
isAdult = true;

/* --- arrays --- */
const emptyList = [];
let colors: string[];
let numbers: Array<number>; // generics

colors = ['Red', 'Yellow', 'Green'];
numbers = [1, 2, 3, 4, 5]
console.log(numbers.filter(num => num > 2));

/* --- enum --- */
const enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
} // an anon function is generated corressponding to this in JS
// adding a const removes the anon function from code

console.log(Color.Red);

/* --- tuple --- */
let swapNums: [first: number, second: number];
const swapNumbers = (n1: number, n2: number): [number, number] => [n2, n1];

swapNums = swapNumbers(1, 2);
console.log(swapNums)

let dept: any = "IT";
dept = 123;
dept = false;

/* --- functions --- */
function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(add(2, 3));

const sub = (n1: number, n2: number): number => n1 - n2;
console.log(sub(2, 3));

const mult = function (n1: number, n2: number): number {
    return n1 * n2;
}
console.log(mult(2, 3));

const addAllNums = (n1: number, n2: number, ...nums: number[]): number => {
    return n1 + n2 + nums.reduce((acc, curr) => acc + curr);
}
console.log(addAllNums(1, 2, ...[3, 4, 5, 6, 7, 8, 9, 10]))
console.log(addAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const addThreeNums = (n1: number, n2: number, n3?: number) => n3 ? n1 + n2 + n3 : n1 + n2;
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(1, 2));

const requiredParams = (n1: number, n2: number, n3 = 3) => n1 + n2 + n3;
console.log(requiredParams(1, 2, 4));
console.log(requiredParams(1, 2));

/* --- Generic Functions --- */
// can use anything else instead of T
function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

console.log(getItems([1, 2, 3, 4, 5, 6]));
console.log(getItems(['a', 'b', 'c', 'd', 'e']));