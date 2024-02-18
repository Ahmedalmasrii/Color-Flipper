const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  const btn = document.getElementById('btn') /*anropar knapp med hjälp av id */
  const color = document.querySelector('.color') /*anropar color med hjälp av class */

 /*Eventlistener som lyssnar på klick, vi ska göra en funktion som gör att den aggerar och ändrar färg vid intryck
 */
 btn.addEventListener('click', function(){
    /*Hämtar en random nummer mellan 0-3*/
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  })