// Light Mode && Dark Mode
const input = document.querySelector(".theme-switcher input");
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});

// Typedjs
var typed = new Typed('.type', {
  strings: ["Atul Goyal" , "FullStack Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  cursorChar: '_',
  shuffle: true,
  smartBackspace: false,
  loop: true
  });