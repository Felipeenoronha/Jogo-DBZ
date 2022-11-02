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

    let down = parseInt(window.getComputedStyle(character).getPropertyValue("down"));
      top += 100;
      if (down < 500) {
        character.style.down = down + "px";
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
  let random = Math.floor(Math.random()* 15); 
  magic.style.top = random * 35 + 'px';

});
