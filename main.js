//alert("Witaj na mojej pierwszej stronie.");

const firstName = "Kasia"
const age = "37"

console.log(`Nazywam się ${firstName} i mam ${age}lat`);
    
const header = document.querySelector('.main__title-js');

if (header !=null){
header.innerHTML = 'Tytuł ze skryptu!'
}

const title = document.querySelector('.section__title-js');

if (title != null) {
  title.innerHTML = 'Tytuł tego akapitu jest zapisy w skrypcie js.'
}
