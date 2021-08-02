song1="";
song2="";
function preload(){
    song1=loadSound("Im_So_Sorry.mp3");
    song2=loadSound("master.mp3");
}
function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,250,250)
}