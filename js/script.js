// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let km = prompt("Quanti Km vuole percorrere?");
let age = prompt("Qual'è la sua età");
let discountMinors = 0.2;
let discountOver65 = 0.4;
let priceStandard = (km * 0.21).toFixed(2);
let priceMinors = (priceStandard - (priceStandard * discountMinors)).toFixed(2);
let priceOver65 = (priceStandard - (priceStandard * discountOver65)).toFixed(2);

console.log("km " + km);
console.log("age " + age);
console.log("standard price " + priceStandard);
console.log("minors price " + priceMinors);
console.log("over65 price " + priceOver65);

if (isNaN(km + age)) {
    console.log("I valori inseriti potrebbero contenere dei caratteri diversi da numeri");
    document.getElementById("js-1").innerHTML = "<h1 style=\"color:red;\">I valori inseriti potrebbero contenere dei caratteri diversi da numeri</h1>";
}else if(!km || !age) {
    console.log("I campi non sono stati compilati correttamente");
    document.getElementById("js-1").innerHTML = "<h1 style=\"color:red;\">I campi non sono stati compilati correttamente</h1>";
}else if (age < 18){
    console.log(`Il prezzo Totale per comprare il biglietto è ${priceMinors} €`);
    document.getElementById("js-1").innerHTML = `<h1 style=\"color:green;\">Il prezzo Totale per comprare il biglietto è ${priceMinors} €</h1>`;
}else if (age > 65){
    console.log(`Il prezzo Totale per comprare il biglietto è ${priceOver65} €`);
    document.getElementById("js-1").innerHTML = `<h1 style=\"color:green;\">Il prezzo Totale per comprare il biglietto è ${priceOver65} €</h1>`;
}else {
    console.log(`Il prezzo Totale per comprare il biglietto è ${priceStandard} €`);
    document.getElementById("js-1").innerHTML = `<h1 style=\"color:green;\">Il prezzo Totale per comprare il biglietto è ${priceStandard} €</h1>`;
}