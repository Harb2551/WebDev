function select(){
  var x = (Math.floor((Math.random())*4)) + 1;
  console.log(x);
  switch (x) {
    case 1: return "green";
    case 2: return "red";
    case 3: return "yellow";
    case 4: return "blue";
  }
}

function animation(activeButton){
  activeButton.classList.add("pressed");
  setTimeout(function(){
     activeButton.classList.remove("pressed");
  },150);
}

function sound(target){
  var a = new Audio("sounds/" +  target.getAttribute("id") + ".mp3");
  a.play();
}

function generate(arr){
  var x = select();
  var target = document.querySelector("#" + x);
  animation(target);
  sound(target);
  arr.push(x);
}

function start(){
  document.querySelector("h1").innerHTML = "LEVEL " + 1;
  setTimeout(function(){
    generate(arr);
  },600);
  j=0;
}

var level = 0;
var j;
var play = true;
var arr = [];

document.addEventListener("keydown",function(){
  if(!play || !level){
    level = 1;
    play = true;
    arr = [];
    start();
  }
});

for(var i=0;i<document.querySelectorAll(".btn").length;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
    var activebutton = this;
    animation(activebutton);
    sound(activebutton);
    var col = this.getAttribute("id");
    if(col==arr[j]){
      j++;
      if(j==arr.length){
        j=0;
        document.querySelector("h1").innerHTML = "LEVEL " + level;
        level++;
        setTimeout(function(){
           generate(arr);
        },1000);
      }
    }
    else{
      var a = new Audio("sounds/wrong.mp3");
      a.play();
      var target = document.querySelector("body");
      document.querySelector("h1").innerHTML = "Game Over, Press Any Key to Restart";
      target.classList.add("game-over");
      setTimeout(function(){
        target.classList.remove("game-over");
      },200);
      play = false;
    }
  })
}
