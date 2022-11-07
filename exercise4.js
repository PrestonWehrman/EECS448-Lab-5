

function update() {
  var paragraph = document.getElementById("paragraph");
  var border_red = document.getElementById("border_red");
  var border_green = document.getElementById("border_green");
  var border_blue = document.getElementById("border_blue");
  var border_width = document.getElementById("border_width");
  var bg_red = document.getElementById("bg_red");
  var bg_green = document.getElementById("bg_green");
  var bg_blue = document.getElementById("bg_blue");
  if(bg_red.value<=70 && bg_green.value<=70 && bg_blue.value<=70) {
    paragraph.style.color = "rgb(255, 255, 255)";
  }
  else {
    paragraph.style.color = "rgb(0, 0, 0)";
  }
  if(border_red.value>255 || border_red.value<0 || border_green.value>255 || border_green.value<0 || border_blue.value>255 || border_blue.value<0 || bg_red.value>255 || bg_red.value<0 || bg_green.value>255 ||bg_green.value<0 || bg_blue.value>255 || bg_blue.value<0) {
        alert("Color codes must be between 0 & 255.")
  }
  else {
    paragraph.style.backgroundColor ="rgb("+bg_red.value+", "+bg_green.value+", "+bg_blue.value+")";
    paragraph.style.border = border_width.value + "px solid rgb(" + border_red.value + ", " + border_green.value + ", " + border_blue.value + ")";
  }
}