function preload(){
    var nosex = 0;
    var nosey = 0;
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,model_loaded);
    posenet.on('pose',gotposes);
}
function gotposes(results){
    if (results.length>0)
    {
        console.log(results);
        x=results[0].pose.nose.x - 15;
        y=results[0].pose.nose.y - 15;
    }
}
function model_loaded(){
    console.log("posenet model is loaded")
}
function draw()
{
    image(video,0,0,400,400);
   image(clown_nose,nosex,nosey,30,30)
}
function Take(){
    save('Clown.jpeg');
}