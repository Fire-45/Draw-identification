 function preload(){
     classifier = ml5.imageClassifier('DoodleNet');
 };


function setup(){
    canvas = createCanvas(400,300);
    canvas.position(415,320);
    background('white');
    canvas.mouseReleased(classifyCanvas)
};
function classifyCanvas(){
 classifier.classify(canvas,gotResult);

}

function clearCanvas(){
background('white');
}


function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result)
    
}
document.getElementById('guessResult').innerHTML = result[0].label;

document.getElementById('accuracy').innerHTML = Math.round(result[0].confidence * 100)+"%";
}

function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
    //pmouseX and Y are previos positions, mouseX and Y are the second point of the line
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
};