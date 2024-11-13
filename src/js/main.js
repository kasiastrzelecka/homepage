import * as nowaNazwa from "./calculate";

import { differenceInDays } from "date-fns";

const firstName = "Kasia"
const age = "37"

console.log(`Tutaj Nazywam się ${firstName} i mam ${age}lat`);
    
const header = document.querySelector('.main__title-js');

console.log(nowaNazwa.tax);

const calculate = () => 'hej hej obliczam' 

console.log(calculate());

const result = (nowaNazwa.calculate (2));
console.log(result)


const hello2 = (imie,wiek) => (`Witaj, nazywa się ${imie} i mam ${wiek}lat`)
console.log (hello2(firstName,age))

const hello = (imie,wiek) => ("Hello ${imie)${wiek}")
console.log ('Kasia',25)

const resultDays = differenceInDays(
    new Date(2024, 5, 25, 0, 0),
    new Date(2024, 4, 29, 0, 0)
  )
  console.log(resultDays);
