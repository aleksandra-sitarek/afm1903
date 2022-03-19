const sayHello = () => { return "Hello" }; //jak ne damy return to nic nie zwraca
const sayHello2 = () => "Hello"; //zwraca nam console.log
function sayHello3() {
    return "hello"
}


console.log(sayHello() + ", Marcin");
console.log(sayHello2() + ", Marcin");
console.log(sayHello3() + ", Marcin");

module.exports = {
    sayHello,
    sayHello2
};

console.log("plik został załadowany prawidłowo")