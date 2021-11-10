var keys = {
  'W' : 87,
  'S' : 83,
  'A' : 65,
  'D' : 68
};

window.onload = function() {
  window.onkeydown = function(e) {
      console.log(e.keyCode);
  }
}
