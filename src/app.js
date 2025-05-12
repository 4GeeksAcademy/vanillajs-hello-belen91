import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let whos = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let actions = ['ate', 'peed', 'crushed', 'broke'];
  let whats = ['my homework', 'my phone', 'the car'];
  let whens = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function aleatorio(conjunto){
    let aleatorizar = conjunto[Math.floor(Math.random() * conjunto.length)]; 
    return aleatorizar; 
  }

  function generarExcusa(){
    let who = aleatorio(whos); 
    let action = aleatorio(actions);
    let what = aleatorio(whats); 
    let when = aleatorio(whens);  
    
    return `${who} ${action} ${what} ${when}`;  
  }

  document.getElementById("excuse").innerHTML = generarExcusa();
  console.log (generarExcusa); 
};

