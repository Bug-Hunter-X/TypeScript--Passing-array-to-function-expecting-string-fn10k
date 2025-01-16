function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(person: string[]) {
    return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeter(user[0])); // Correct usage
console.log(greeterArray(user)); // Handles array input