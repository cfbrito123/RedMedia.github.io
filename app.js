const sections = document.querySelectorAll("section");

for (const section of sections) {
  const title = section.querySelector(".section-title");
  const content = section.querySelector(".content");
  const arrow = section.querySelector(".arrow");

  title.addEventListener("click", function() {
    content.style.display = content.style.display === "block" ? "none" : "block";
    arrow.classList.toggle("down");
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// window.onload = function() {
//     document.getElementById("subscription-popup").style.display = "block";
//   };
  