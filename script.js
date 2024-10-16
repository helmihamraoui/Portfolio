
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
document.getElementById("cv")
    .addEventListener("click", function () {
        var text = document.getElementById("text").value;
        var filename = "output.txt";
        download(filename, text);
    }, false);
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;*
function chainevide(){
    
}
function validateForm() {
        
        
    }



