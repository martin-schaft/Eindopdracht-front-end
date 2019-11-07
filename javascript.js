/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
 /eslint-env browser/
 /eslint 'no-console': 0*/

// https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/;


var document;

var button = document.querySelector("button");
var element = document.querySelector("#element");

button.addEventListener("click", function() {
  element.classList.toggle("yay");
});
