let character = document.getElementById('character');
let magic = document.getElementById("magic");
let counter = 0;






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
  counter++;
});


  setInterval(()=> {

   let magicLeft = parseInt(window.getComputedStyle(magic).getPropertyValue('left'));
   
   let magicTop = parseInt(window.getComputedStyle(magic).getPropertyValue('top'));

   let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

   if (magicTop === characterTop && magicLeft >= 0 && magicLeft <= 100){
  
    alert(`Game Over! Score: ${counter}.
          Freeeza, estou nervoso!!!`);
    location.reload();

    magic.style.animation = 'none';
   }
 },1)


