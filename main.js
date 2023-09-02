
function preload(){}

function setup(){
    canvas = createCanvas(400,300)
    canvas.position(450,150)
    video = createCapture(VIDEO)
    video.size(400,400)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded!")
}
var difference = ""
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x

        console.log(leftWristX, rightWristX)
        difference = floor(leftWristX - rightWristX)
    }
}

function draw(){
    background("lightpink")
    text("text",20,300)
    textSize(difference)
}