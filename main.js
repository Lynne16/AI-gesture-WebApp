function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

noseX=0;
noseY=0;
LeftwristX=0;
RightwristX=0;
lenght=0;

function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("X postion of the nose "+noseX+" Y position of the nose "+noseY);

        LeftwristX=results[0].pose.leftWrist.x;
        RightwristX=results[0].pose.rightWrist.y;
        console.log("X postion of the Leftwrist "+LeftwristX+" X position of the Rightwrist "+RightwristX);

        length=floor(LeftwristX-RightwristX);
    }
}

function draw(){
    background('#caf4fc');
    fill('#fff06b');
    stroke('#ff0000'); 
    square(noseX,noseY,length);

    document.getElementById('square_side').innerHTML="Width and Height of the square will be = "+length+"px";
}