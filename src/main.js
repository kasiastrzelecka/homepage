//alert("Witaj na mojej pierwszej stronie.");

const firstName = "Kasia"
const age = "37"

console.log(`Tutaj Nazywam się ${firstName} i mam ${age}lat`);
    
const header = document.querySelector('.main__title-js');

const hamburger = document.querySelector(".hamburger__js");

hamburger.addEventListener('click', () => {
  const navigation = document.querySelector ('.navigation--js');
  navigation.classList.toggle('navigation--open')
})




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



const hello2 = (imie,wiek) => (`Witaj, nazywa się ${imie} i mam ${wiek}lat`)
console.log (hello2(firstName,age))

const hello = (imie,wiek) => ("Hello ${imie)${wiek}")
console.log ('Kasia',25)

