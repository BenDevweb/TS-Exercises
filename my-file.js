var age = 10;
function addition(x, y) {
    return x + y;
}
var result = addition(10, 20);
console.log(result);
function damage(characterDamage, amount) {
    characterDamage.life -= amount;
    return characterDamage;
}
var result2 = damage({ life: 100 }, 20);
console.log(result2);
function sayHello(target) {
    return "Hello ".concat(target.firstName, ", you've ").concat(target.money, " on your bank account.");
}
var msg = sayHello({ firstName: 'world', money: 123 });
console.log(msg);
// On définit une fonction qui s'attend à recevoir un Age (et donc un nombre)
function checkAge(ageToCheck) { }
// On appelle la fonction en lui donnant de l'argent (et donc aussi un nombre !)
var lotOfMoney = 500000;
checkAge(lotOfMoney); // Money étant un nombre comme Age, TS ne voit pas d'erreur
