console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
function setup(){
    canvas=createCanvas(500,500)
    canvas.position(0,0)
    video=createCapture(VIDEO)
    video.hide()
    filter=""
}
function draw(){
    image(video, 0,0,250,250)
    circle(200, 200, 50)
    
}

function Class(){
    filter=document.getElementById("gavin").value
}