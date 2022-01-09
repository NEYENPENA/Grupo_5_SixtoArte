const darkGray = "#222426";
const darker = "#4592AF";
const white = "#FFFFFF";

const whiteGray = "#FFFFFF";

function changeMode (mode = "dark"){
  let main = document.querySelector(".home");
  let p = document.querySelector(".precio");
  let p2 = document.querySelectorAll("p");
  let button = document.querySelectorAll("button");

  p2.forEach((e) => {
    e.style.color = mode == "dark" ? white : darker;
  });
  main.style.backgroundColor = mode == "dark" ? darkGray : white;
  p.style.color = white;
  button.forEach((e) => {
    e.style.backgroundColor = mode == "dark" ? darker : white;
    e.style.borderRadius = "5px";
  });
};


window.onload = function () {
  const darkModeButton = document.querySelector(".icons");

  darkModeButton.addEventListener("click", function() {
        // next two code lines should be replaced by store functions
    let main = document.querySelector(".home");
    if (main.style.backgroundColor == darkGray) {
      changeMode("light");
    } else {
      changeMode("dark");
    }
  }, false);
};