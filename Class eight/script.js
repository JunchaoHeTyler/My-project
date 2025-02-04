function greet() {
    console.log("Hello, world!");
}
greet(); // Outputs: Hello, world!

let user = {
    name: "Amy",
    sayHello: function() {
        return `Hello, I'm ${this.name}!`;
    }
};
console.log(user.sayHello());

let skills = ["Wireframing", "Prototyping", "User Research"];
console.log(skills[0]);