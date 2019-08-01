// let myButton = document.querySelector('button');
// myButton.onclick = function() {
//    alert("you clicked the button");
// }

function add_image() {
  var src = "../Bee.jpg";
  show_image("../Bee.jpg", 276,110, "Bee");
}


function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}

