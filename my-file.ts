//const age : number = 10;

function addition(x: number, y: number): number {
    return x + y;
}
const result : number = addition(10, 20);
console.log(result);

function  damage(characterDamage: {life : number}, amount: number) {
    characterDamage.life -= amount;
    return characterDamage;

}
const result2 = damage({life: 100}, 20);
console.log(result2);

function sayHello(target: {firstName: string, money: number}) {
    return `Hello ${target.firstName}, you've ${target.money} on your bank account.`;
}
const msg: string = sayHello({firstName : 'world', money: 123});
console.log(msg);

/*  
** Creation de type personnalisé
type myType = AnotherType;
*/

type Age = number;
type Personne = {
    name : string,
    email: string
}
type LastName = string;

//Parlons des alias en TypeScript
// On définit deux alias Money et Age, pour qu’ils soient identiques à 'number'
type Money = number;
type Age = number;
// On définit une fonction qui s'attend à recevoir un Age (et donc un nombre)
function checkAge(ageToCheck: Age) {/*...*/}
// On appelle la fonction en lui donnant de l'argent (et donc aussi un nombre !)
const lotOfMoney: Money = 500000;
checkAge(lotOfMoney); // Money étant un nombre comme Age, TS ne voit pas d'erreur
console.log(lotOfMoney);

//Un alias peut faire reference a plusieurs types
type Id = string | number; // Ce petit | represente l'union, c'est à dire que Id peut être soit une string, soit un number
const code1: Id = "abc123"; // Ok, c'est une string
const code2: Id = 456; // Ok, c'est un number
// const code3: Id = true; // Erreur, ce n'est ni une string ni un number

type Ten = 10; // Un alias peut aussi faire référence à une valeur littérale
const myTen: Ten = 10; // Ok, c'est bien la valeur 10
// const notTen: Ten = 5; // Erreur, ce n'est pas la valeur 10

type Fruits = "apple" | "banana" | "orange"; // Un alias peut aussi faire référence à un ensemble de valeurs littérales
function sortOfFruits(fruit: Fruits) {}
sortOfFruits("apple"); // Ok, c'est une des valeurs autorisées
// sortOfFruits("grape"); // Erreur, ce n'est pas une des valeurs autorisées
console.log(sortOfFruits("apple"));

//Creation des objets complexes avec types ou interfaces
type user ={
    name : string,
    age : number,
    email : string
};

interface ville {
    name: string;
    population: number;
}; 

type Hero = {
    life : number
};

function dommage(caractere: Hero, montant : number){
    return caractere.life - montant;
}
const hero1 : Hero = { life: 100 };
const damageResult = dommage(hero1, 20);
console.log(damageResult);

/* Pet = {
    name: string;
    life: number;
    attack: number;
    defense: number;
};*/
type Warrior = {
    name: string;
    life: number;
    attack: number;
    defense: number;
    pet?: Pet;// Le ? indique que la propriété pet est optionnelle. Donc un objet Hero  sera ainsi valide, qu’il ait ou non un animal de compagnie.
};

type caractere = {
    name: string;
    life: number;
    attack: number;
    defense: number
};
type Pet = caractere;

type Heroes = caractere & {
    pet?: Pet;
};// L’opérateur & permet de combiner les propriétés de plusieurs types en un seul type. Ici, le type Heroes aura toutes les propriétés du type caractere, plus la propriété pet qui est optionnelle.

interface Character {
    name: string;
    life: number;
    attack: number;
    defense: number;
};

type pet = Character;
interface heroes extends Character {
    pet?: pet;
};

//Donnez des paramètres à vos types
//Les génériques sont probablement l’un des concepts les plus puissants de TypeScript. 
//Malheureusement, il n’est pas évident de bien comprendre leur intérêt 
// lorsqu’on débute avec TypeScript.

/*type shopOfFruits = {
    name: string;
    items: Array<number>;
};

type shopOfSneakers = {
    name: string;
    items: Array<string>;
};

type shopOfNotes = {
    name: string;
    items: Array<boolean>;
};
**/

//Comme vous pouvez le voir, les trois types sont très similaires, à part le type des éléments du tableau items.
//Avec les génériques, on peut créer un type plus flexible qui peut s’adapter à différents types d’items, sans avoir à dupliquer le code pour chaque type de boutique.

type shop<ItemType> = {
    name: string;
    items: Array<ItemType>;
};

//Maintenant, nous pouvons utiliser ce type générique pour créer des types spécifiques pour chaque type de boutique, sans avoir à dupliquer le code.

type shopOfFruits = shop<number>;
type shopOfSneakers = shop<string>;
type shopOfNotes = shop<boolean>;

//Avec ce type générique, nous pouvons créer des boutiques pour n’importe quel type d’items, simplement en spécifiant le type d’items que nous voulons utiliser.
type Shop = {
    name: string;
    owner: Character; // Le même "Character" qu'on a vu au chapitre précédent
    items: Array<unknown>;
};

//Note: unknown  fait partie de ces types. Il s’agit du type “inconnu” : il est utilisé lorsqu’on ne sait pas exactement quel type on attend.
//Note : Sachez qu’il existe un type similaire, que je me dois d’évoquer ici : any  . La première chose à savoir sur cet autre type est très simple : je vous déconseille de l’utiliser !
//Note : Tout comme unknown  , le rôle de any  est de servir de joker : il est utile lorsqu’on ne sait pas typer quelque chose. Si on ne sait pas quel type d’argument va recevoir notre fonction, any  permet de dire à TypeScript qu’il doit s’attendre à recevoir n’importe quel type.




