rightWristX=0;
leftWristY=0;
difference=0;


function setup()
{
canvas=createCanvas(550,500);
canvas.position(650,100);
video=createCapture(VIDEO);
video.size(550,500);
video.position(100,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
console.log("poseNet is working");
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference);
}
}

function draw()
{
background('#008080');
text("Aarav",100,300);
textSize(difference);
document.getElementById("square_side").innerHTML="Size of my name is   "+difference+"px";

}

















