var title = "Python Combat";
var i = 0;
var speed = 150;

function typeWriter() {
    if (i < title.length) {
        document.getElementById("heading").innerHTML += title.charAt(i);
        i++;
        console.log(title.charAt(i));
        setTimeout(typeWriter, speed);
    }
}