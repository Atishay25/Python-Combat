/**
* @file welcome.js
* @brief JAVASCRIPT FOR Welcome Page animation.
* @author Prolific Pythonists
* @date 24-11-2022
*/
///Title of the webpage.
var title = "Python Combat";
///Iterator for all letters in the word "Python Combat".
var i = 0;
///Speed of the animation.
var speed = 150;

/**
 * Return the ratio of the inline text length of the links in an element to
 * the inline text length of the entire element.
 */
function typeWriter() {
    if (i < title.length) {
        document.getElementById("heading").innerHTML += title.charAt(i);
        i++;
        console.log(title.charAt(i));
        setTimeout(typeWriter, speed);
    }
}

