let character = document.getElementsByClassName("character");
let magic = document.getElementsByClassName("magic");


function moveTop() {

    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top -= 0;
      if (top >= 500) {
        character.style.top = top + "px";
     }
  }

  
function moveDown() {

    let down = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      top += 100;
      if (down < 0) {
        character.style.top = top + "px";
     }
  }

  
function keyDown(event) {
    if (event.key === "ArrowTop") {
      moveTop();
    }
    if (event.key === "ArrowDown") {
      moveDown();
    }
  }

  
document.addEventListener("keydown", keyDown);