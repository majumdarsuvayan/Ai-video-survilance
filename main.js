song="";
video="";
status="";
objects=[];
objectDetector="";
function preload()
{
song=loadSound('c418_minecraft.mp3');
video=createVideo('video.mp4');
}
function setup()
{
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}
function draw()
{
image(video,0,0,480,380);
}
function start()
{
song.play();
song.setVolume(1);
song.rate(1);
song.loop();
objectDetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innnerHTML="Status:Detecting objects";
}
function modelloaded()
{
console.log("Model Loaded!");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}