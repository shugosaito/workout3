
// partchoiseのクリックイベント

var numberOfButtons = document.querySelectorAll(".body-part").length;

var randomNumber = Math.floor(Math.random() * 5);

var chestMenus = ["push up", "bench press", "chest press", "dumbell fly", "dumbell press"];

var backMenus = ["deadlift", "pull up", "dumbell row", "lat pull down", "bent over row"];

var legMenus = ["squat", "barbell squat", "lunge", "bulgarian squat", "leg press"];

var shoulderMenus = ["side raise", "dumbell shoulder press", "barbell shoulder press", "front raise", "rear raise"];

var bicepsMenus = ["dumbell curl", "barbell curl", "hummer curl", "rest day", "rest day"];

var tricepsMenus = ["narrow bench press", "cable press down", "lying extention", "kick back", "rest day"]


// var randomMenu = chestMenus[randomNumber];

// for (var i = 0; i < numberOfButtons; i++) {

//   document.querySelectorAll(".body-part")[i].addEventListener("click", function () {
//     this.style.color = "#3f72af";

//     document.querySelector(".chest-menu").style.display = "inline-block";
//     document.getElementsByClassName("chest-menu")[0].innerHTML = randomMenu;

//   });
// }




document.querySelectorAll(".body-part")[0].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".chest-menu").style.display = "inline-block";
  document.getElementsByClassName("chest-menu")[0].innerHTML = "<a>" + chestMenus[randomNumber] + "<a/>";
});



document.querySelectorAll(".body-part")[1].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".back-menu").style.display = "inline-block";
  document.getElementsByClassName("back-menu")[0].innerHTML = "<a>" + backMenus[randomNumber] + "<a/>";
});


document.querySelectorAll(".body-part")[2].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".leg-menu").style.display = "inline-block";
  document.getElementsByClassName("leg-menu")[0].innerHTML = "<a>" + legMenus[randomNumber] + "<a/>";
});

document.querySelectorAll(".body-part")[3].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".shoulder-menu").style.display = "inline-block";
  document.getElementsByClassName("shoulder-menu")[0].innerHTML = "<a>" + shoulderMenus[randomNumber] + "<a/>";
});

document.querySelectorAll(".body-part")[4].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".biceps-menu").style.display = "inline-block";
  document.getElementsByClassName("biceps-menu")[0].innerHTML = "<a>" + bicepsMenus[randomNumber] + "<a/>";
});

document.querySelectorAll(".body-part")[5].addEventListener("click", function () {
  this.style.color = "#3f72af";
  document.querySelector(".triceps-menu").style.display = "inline-block";
  document.getElementsByClassName("triceps-menu")[0].innerHTML = "<a>" + tricepsMenus[randomNumber] + "</a>";
  document.querySelector(".cheer-text").style.display = "block";
});




