// let myButton = document.querySelector('button');
// myButton.onclick = function() {
//    alert("you clicked the button");
// }

function add_image() {
  if (isMobile()) {
    var w = screen.width;
    var h = screen.height;
  } else {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
  var src = "../Bee.JPG";
  show_bee("../Bee.JPG", w, (0.5*h), "Bee");
}
//bee is 301W x 311H

function show_bee(src, width, height, alt) {
  
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
  
}

function isMobile() {
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)){
    return true;
  } else {
    return false;
  }
}
