//const age : number = 10;
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
console.log(lotOfMoney);
var code1 = "abc123"; // Ok, c'est une string
var code2 = 456; // Ok, c'est un number
var myTen = 10; // Ok, c'est bien la valeur 10
function sortOfFruits(fruit) { }
sortOfFruits("apple"); // Ok, c'est une des valeurs autorisées
// sortOfFruits("grape"); // Erreur, ce n'est pas une des valeurs autorisées
console.log(sortOfFruits("apple"));
;
function dommage(caractere, montant) {
    return caractere.life - montant;
}
var hero1 = { life: 100 };
var damageResult = dommage(hero1, 20);
console.log(damageResult);
;
;
//Note: unknown  fait partie de ces types. Il s’agit du type “inconnu” : il est utilisé lorsqu’on ne sait pas exactement quel type on attend.
//Note : Sachez qu’il existe un type similaire, que je me dois d’évoquer ici : any  . La première chose à savoir sur cet autre type est très simple : je vous déconseille de l’utiliser !
//Note : Tout comme unknown  , le rôle de any  est de servir de joker : il est utile lorsqu’on ne sait pas typer quelque chose. Si on ne sait pas quel type d’argument va recevoir notre fonction, any  permet de dire à TypeScript qu’il doit s’attendre à recevoir n’importe quel type.
//Cela peut être pratique, mais cela est aussi très dangereux : contrairement à unknown  , TypeScript ne vérifie rien du tout sur les variables any  , et il peut donc laisser passer des bugs potentiels !
function sayHi(target) { return "Hello ".concat(target.firstName); }
sayHello(123); // À cause de "any", TypeScript ne remonte aucune erreur ici !
;
// Une fonction générique
function createShop(name, owner, items) {
    return { name: name, owner: owner, items: items };
}
// Appel de la fonction générique
var armory = createShop('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2 }, []);
// Une fonction qui retourne simplement ce qu'elle reçoit en paramètre
function returnParameter(x) {
    return x;
}
// Ceci fonctionne, c'est ce que nous avons vu jusque-là
var a = returnParameter(1);
// Mais puisque le type "T" est utilisé pour typer le paramètre "x",
// il n'est pas nécessaire de le préciser en appelant la fonction.
// Avec la ligne ci-dessous, TypeScript devine tout seul que "T" est "number" !
var a2 = returnParameter(1);
