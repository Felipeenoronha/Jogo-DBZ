let character = document.getElementById('character');
let magic = document.getElementById("magic");


function moveTop() {

    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top -= 100;
      if (top >= 0) {
        character.style.top = top + "px";      
     }
  }

  
function moveDown() {

    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top += 100;
      if (top < 600) {
        character.style.top = top + "px";
     }

  }

  
function keyDown(event) {
    if (event.key === "ArrowUp") {
      moveTop();
    }
    if (event.key === "ArrowDown") {
      moveDown();
    }
  }

  
document.addEventListener("keydown", keyDown);



  magic.addEventListener('animationiteration', () => {
    console.log(magic.style)
  let random = Math.floor(Math.random()* 5); 
  magic.style.top = random * 100 + 'px';

});


  setInterval(()=> {

   let magicLeft = parseInt(window.getComputedStyle(magic).getPropertyValue('left'));
   console.log(magicLeft)
   let magicTop = parseInt(window.getComputedStyle(magic).getPropertyValue('top'));
   console.log(magicTop)
   let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
   if (magicTop === characterTop && magicLeft >= 0 && magicLeft <= 100){
    // if (window.confirm("Você realmente quer sair?")) {
    //   window.open("../index.html", "Obrigado pela visita!");
    // }
    
    
    magic.style.animation = 'none';
   }
 },1)


