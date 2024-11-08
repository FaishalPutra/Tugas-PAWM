let text = document.getElementById('movee1');

function startShake() {
  text.classList.add('shaking');
}

function stopShake() {
  text.classList.remove('shaking');
}

document.getElementById("menu1").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
});
