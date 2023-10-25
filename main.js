//alert("Witaj na mojej pierwszej stronie.");

const firstName = "Kasia"
const age = "37"

console.log(`Tutaj Nazywam się ${firstName} i mam ${age}lat`);
    
const header = document.querySelector('.main__title-js');

if (header !=null){
header.innerHTML = 'Tytuł ze skryptu!'
}

const title = document.querySelector('.section__title-js');

if (title != null) {
  title.innerHTML = 'Tytuł tego akapitu jest zapisy w skrypcie js.'
}

const calculate = myNumber =>(myNumber+3)*7 
 
const result = calculate (2);
console.log(result)

let y = {"sdasd": "aaa"};
const x = 1;
console.log(y.sdasd)

function hello (imie, wiek) {
  return 'hello ' + imie + wiek;
}
console.log(hello('Kasia',37))

console.log(hello('Dorka',37))

const hello2 = (imie,wiek) => (`Witaj, nazywa się ${imie} i mam ${wiek}lat`)
console.log (hello2(firstName,age))
