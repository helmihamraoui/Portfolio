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

}