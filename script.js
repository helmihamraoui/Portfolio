
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

    