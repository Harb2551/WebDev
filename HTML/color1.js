function changecolor(){
var dd1=document.getElementById("color");
var pp1=document.getElementById("p");
var color=dd1.value;
pp1.style.backgroundColor=color;}
function slider() {
var dd2=document.getElementById("slide");
var pp1=document.getElementById("p");
var size=dd2.value;
var ctx=pp1.getContext("2d");
ctx.clearRect(0,0,pp1.width,pp1.height);
ctx.fillStyle="yellow";
ctx.fillRect(10,10,size,size);
}





