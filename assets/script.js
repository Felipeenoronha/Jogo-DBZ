let character = documente.getElementById('character');
let magic = document.getElementById("magic");


function moveTop() {

    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top -= 100;
      if (top >= 0) {
        character.style.top = top + "px";      
     }
  }

  
function moveDown() {

    let down = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top += 100;
      if (down < 500) {
        character.style.top = down + "px";
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