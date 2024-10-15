function changeimagecard(element){
    element.src="image/desc.jpg"
}
function changeimage(element){
    element.src="image/web_developer.webp"
}
function toplanguages(element){
var image = document.getElementById('imageskills')
if(element.innerHTML=="front-end"){
image.src="image/frontend.jpg"
}else if(element.innerHTML=="Back-end"){
image.src="image/backend.png"
}
else if(element.innerHTML=="Data-base"){
image.src="image/datebase.jpg"
}
}
function startvideo(element){
    element.play()
}
function closevideo(element){
    element.pause()
}