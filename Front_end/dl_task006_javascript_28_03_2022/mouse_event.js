//onmouseover
function mouseover(e) {
  e.style.background = "yellow";
}

//onmouseout
function mouseout(e) {
  e.style.background = "brown";
}

//onclick
btn.onclick = function mouseover() {
  alert("Hello event");
};

//onmousedown()
paragraph.onmousedown = function mousedown(e) {
  paragraph.style.color = "purple";
};
////onmouseup()
paragraph.onmouseup = function mouseup(e) {
  paragraph.style.color = "green";
};
