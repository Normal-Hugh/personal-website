// let myButton = document.querySelector('button');
// myButton.onclick = function() {
//    alert("you clicked the button");
// }

function add_image(file, name) {
  var src = file;
  var alt = name;
  show_bee(src, w, h, alt);
}
//bee is 301W x 311H

function showBackgroundImage(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}

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

function getWidth() {
  if (isMobile()) {
    var w = screen.width;
  } else {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w > 800) {
      w = 800;
    }
  }
  return w;
}
function getHeight() {
  if (isMobile()) {
    var h = screen.height;
  } else {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (h > 800) {
      h = 800;
    }
  }
}
