

function play () {
  var div = document.getElementsByClassName('tip')[0];
  div.style.opacity = '0';
  setInterval(() => {
    var audio = document.getElementById('music');
    audio.play();
  }, 0)
  
}
