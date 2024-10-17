console.log("page loaded...");
function change(id){
    var element=document.querySelector(id) ;
    element.innerText = "Jeremy Benth";
}
function deleteThis(id){
    var element = document.querySelector(id);
    element.remove() ;
}
function increase(x) {
    var element = document.querySelector(".badge") ;
    element.innerText=parseInt(element.innerText)+1 ; 

<<<<<<< HEAD
}
=======
var arr=["image/web_developer.webp","image/pc.png","image/frond.avif","image/OIP (1).jpg","image/OIP (2).jpg","image/OIP.jpg","image/download.jpg"]
var myTimeout = setInterval(imagE, 2000);

var imageindex=0;
function imagE (){
    if (imageindex==arr.length) {
        imageindex=0
    }
    document.getElementById('developement').src=arr[imageindex]
    imageindex++
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
document.querySelector('#cv').addEventListener('click', function() {
    console.log('CV image clicked. Download started.');
});
    
    

function firstnamevalide(){
    var first = document.getElementById("firstname").value;
    console.log(first);
    return !isNaN(Number(first))
}
function lastnamevalide(){
    var last = document.getElementById("lastname").value;
    console.log(last);
    return !isNaN(Number(last))
}
function validateForm() {
    var messag = document.getElementById("message").value;
    console.log(messag);
    
        if(firstnamevalide()==true || lastnamevalide()==true || messag=="" ){
            alert('invalide')
        }
    }
    function linkOpen(id){
        if(id=='watts'){
            location.assign("https://web.whatsapp.com/")
        }else if(id=='github'){
            location.assign("https://github.com/helmihamraoui")
        }else if(id=='email'){
            location.assign("https://mail.google.com/mail/u/0/?hl=fr#inbox")
        }else if(id=='linkidin'){
            location.assign("https://www.linkedin.com/in/helmi-hamraoui-49ab98329/")
        }
    
    }


>>>>>>> 7e292b440191ada23ba85ed6d377e37ead0abf9b
