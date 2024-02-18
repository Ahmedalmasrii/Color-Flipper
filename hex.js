const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/*En funktion som lyssnar på klick på knapp och agerar utifrån funtkion*/
btn.addEventListener("click", function () {
  /*Anledningen till att man har # är för att hex värdet kommer inte generera en färg utan det,Använder let för att kunna skapa en loop och ge de ett värde, med const så funkar det inte*/

  let hexColor = "#";
  /*Starta Loop från 0 och den ska loopa tills den når 6 gånger*/
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
 
function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
} 