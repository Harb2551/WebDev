var foreimage=null
var backimage=null
var dd1=null
var dd2=null

function uploadfore(){
dd1=document.getElementById("p");
var fore=document.getElementById("fore");
foreimage= new SimpleImage(fore);
foreimage.drawTo(dd1);}

function uploadback() {
dd2=document.getElementById("q");
var back=document.getElementById("back");
backimage=new SimpleImage(back);
backimage.drawTo(dd2);}


function greenscreen() {
if (foreimage==null || !foreimage.complete()){
alert("Foreground Image not loaded");}
if (backimage==null || !backimage.complete()){
alert("Background Image not loaded");}
alert("continue");
foreimage.setSize(backimage.getWidth(),backimage.getHeight());
var output= new SimpleImage(foreimage.getWidth(),foreimage.getHeight());
for (var pixel of foreimage.values()) {
var x=pixel.getX();
var y=pixel.getY();
if (pixel.getGreen()>240) {
output.setPixel(x,y,backimage.getPixel(x,y));
}
else {
output.setPixel(x,y,pixel);
}
var ctx1=dd1.getContext("2d")
ctx1.clearRect(0,0,dd1.width,dd1.height);
var ctx2=dd2.getContext("2d")
ctx2.clearRect(0,0,dd2.width,dd2.height)
output.drawTo(dd1);
}
}

function grayscale() {
for (var pixel of foreimage.values()) {
x=pixel.getRed();
y=pixel.getGreen();
z=pixel.getBlue();
avg=(x+y+z)/3
foreimage.setRed(avg);
foreimage.setBlue(avg);
foreimage.setGreen(avg);}
foreimage.drawTo(dd1);}

