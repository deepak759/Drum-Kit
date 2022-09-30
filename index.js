var len = document.querySelectorAll(".drum").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makeSound(this.innerHTML)
    ButtonAnimation(this.innerHTML)
  }
  );
}

document.addEventListener('keydown',function(e){
  makeSound(e.key)
  ButtonAnimation(e.key)

})

function makeSound(event){
  switch(event){
    case 'w':{
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case 'a':{
        var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case 's':{
        var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case 'd':{
        var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }
    case 'j':{
        var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
    case 'k':{
        var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case 'l':{
        var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    default:
            console.log("Wrong button pressed")
      }

}


function ButtonAnimation(currentKey){
  var pressedButton=document.querySelector("."+currentKey)
  pressedButton.classList.add("pressed")

   setTimeout(function(){
    pressedButton.classList.remove("pressed")
   }, 300);

}



