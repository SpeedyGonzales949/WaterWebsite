document.documentElement.setAttribute(
  "style",
  "background:url(background.png);background-position:top left;"
);

document.getElementById("nightmode").addEventListener("change", function() {
  if (document.getElementById("nightmode").checked == true) {
    document.querySelector(".content").style =
      "top: 22%;left: 18%; transform:rotate(-30deg);";
    document.documentElement.setAttribute(
      "style",
      "background:url(background1.png);transition:1s;background-position:bottom right;"
    );
    document.querySelector(".slogan").style = "opacity:0;";
    setTimeout(() => {
      document
        .getElementsByClassName("underwater")[0]
        .setAttribute("style", "pointer-events:all;opacity:1;");
    }, 500);
  } else {
    document.querySelector(".content").style =
      "top: 50%;left: 50%; transform:rotate(0deg);";
    document.documentElement.setAttribute(
      "style",
      "background:url(background.png);transition:1s;background-position:top left;"
    );
    document
      .getElementsByClassName("underwater")[0]
      .setAttribute("style", "pointer-events:none;opacity:0;");
    document.querySelector(".slogan").style = "opacity:1;";
  }
});

var rotateValue = 1;
var img = document.getElementById("star");
var wheel = document.getElementById("wheel");
var info = document.querySelector(".paragraph");

var icon = document.querySelector(".myImg");
var heading = document.querySelector(".heading");
var text = document.querySelectorAll(".data");
text[0].style = "display:none;";
text[1].style = "display:none;";
text[2].style = "display:none;";
text[3].style = "display:none;";
text[4].style = "display:none;";
text[5].style = "display:none;";
var Sum = 0;
var rotateSum = Math.random() * 360;
var title = [
  "Hammerhead Shark",
  "Blue Whale",
  "Hawksbill Turtle",
  " Vaquita",
  " Steller Sea Lion",
  "Galapagos Penguin"
];
var color = ["purple", "blue", "green", "yellow", "orange", "red"];

var icons = [
  "shark.png",
  "whale.png",
  "turtle.png",
  "dolphin.png",
  "sea-lion.png",
  "penguin.png"
];
var index = 5;
info.style = "opacity:0;pointer-events:none;";
function rotateImage() {
  info.style = "opacity:0;pointer-events:none;";
  text[index].style = "display:none;";
  if (Sum > rotateSum * rotateValue) Sum = Sum - rotateSum * rotateValue;
  else Sum = -Sum + rotateSum * rotateValue;
  index = Math.floor((Sum / 30) % 6);

  img.style.transform = "rotate(calc(-360*" + rotateValue + "*1deg))";
  wheel.style.transform = "rotate(calc(" + Sum + "*1deg))";

  setTimeout(() => {
    text[index].style = "display:block;";
    heading.innerHTML = title[index];
    icon.src = icons[index];
    info.style =
      "background:linear-gradient(to top," +
      color[index] +
      ",transparent);opacity:1;pointer-events:all;";
  }, 2000);

  console.log(rotateSum * rotateValue);
  console.log(Math.floor(Sum));
  console.log(index);

  rotateValue = rotateValue + 1;
  rotateSum = Math.random() * 360;
}
