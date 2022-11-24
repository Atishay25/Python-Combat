var title = "Python Combat";
var i = 0;
var speed = 150;

/**
 * Return the ratio of the inline text length of the links in an element to
 * the inline text length of the entire element.
 * @file welcome.js
 * @param {Node} node - Types or not: either works.
 * @throws {PartyError|Hearty} Multiple types work fine.
 * @returns {Number} Types and descriptions are both supported.
 */
function typeWriter() {
    if (i < title.length) {
        document.getElementById("heading").innerHTML += title.charAt(i);
        i++;
        console.log(title.charAt(i));
        setTimeout(typeWriter, speed);
    }
}

