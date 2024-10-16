
<<<<<<< HEAD
document.getElementById("cv")
    .addEventListener("click", function () {
        var text = document.getElementById("text").value;
        var filename = "output.txt";
        download(filename, text);
    }, false);


    function over(element){
        document.getElementById("web-dev").src = './image/pc.png';
        }

    function out(element){
        document.getElementById("web-dev").src = './image/web_developer.webp'
    }

    document.querySelector('#cv').addEventListener('click', function() {
        console.log('CV image clicked. Download started.');
    });


function scrollTo(element) {
    location.hash = "#" + element;
}

    
=======
var myTimeout = setTimeout(myGreeting, 2500);
function myGreeting() {
    document.getElementById('developement').src="image/desc.jpg"
}
var Timeout = setTimeout(myStopFunction, 5000);
function myStopFunction() {
    document.getElementById('developement').src="image/web_developer.webp"
}
function toplanguages(element){
var image = document.getElementById('imageskills')
if(element.innerHTML=="front-end"){
    document.getElementById("p1").style.color = "black";
    document.getElementById("p3").style.color = '#e05d1c';
document.getElementById("p2").style.color = '#e05d1c';
image.src="image/frontend.jpg"
}else if(element.innerHTML=="Back-end"){
image.src="image/backend.png"
document.getElementById("p2").style.color = "black";
document.getElementById("p1").style.color = '#e05d1c';
document.getElementById("p3").style.color = '#e05d1c';
}
else if(element.innerHTML=="Data-base"){
image.src="image/1702882171341.jpg"
document.getElementById("p3").style.color = "black";
document.getElementById("p1").style.color = '#e05d1c';
document.getElementById("p2").style.color = '#e05d1c';
}
}
function startvideo(element){
    element.play()
}
function closevideo(element){
    element.pause()
}
function linkopen(id){
    if(id=='dojoweather'){
        location.assign("https://github.com/helmihamraoui/Web_Fundamentals/tree/main/Week_2/Day_2/Practice/DojoWeather")
    }else if(id=='page'){
        location.assign("https://github.com/helmihamraoui/Web_Fundamentals/tree/main/Week_2/Day_1/Core/Button%20Clicker")
    }else if(id=='vedio'){
        location.assign("https://github.com/helmihamraoui/Web_Fundamentals/tree/main/Week_2/Day_1/Practice/Video%20Preview")
    }else if(id=='likes'){
        location.assign("https://github.com/helmihamraoui/Web_Fundamentals/tree/main/Week_2/Day_2/Core/Liking%20Likes/partie2")
    }

}
function zoomin(element){
    element.style.width='750px';
    element.style.transition ="all 2s";
}
function defult(element){
    element.style.width='650px';
}
>>>>>>> e1c390b3d915f320ff6531c867349822ab40a245
