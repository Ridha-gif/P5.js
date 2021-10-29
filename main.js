function preload(){

}
function setup(){
    canvas = createCanvas(640,480)
    canvas.position(250,200);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,640,480)
    circle(30,25,70);
    circle(30,450,70);
    circle(615,450,70);
    circle(615,25,70);
    fill(200,50,20);
  rect(2, 62, 40, 350);
  rect(597, 62, 40, 350)
   
   

}
function take_snapshot(){
save('Myframe.png')
}
