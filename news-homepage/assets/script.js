const hamburguerButton = document.querySelector(".hamburguer");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".close-button");
const bodyNavbar = document.querySelector(".body-navbar");

let mediaQuery = window.matchMedia("(min-width: 624px)");

function handleChange(e) {
  const bdNotDisplayed = backdrop.classList.contains("off");

  if (e.matches || !bdNotDisplayed) {
    backdrop.classList.add("off");
  }

  if (e.matches) {
    bodyNavbar.classList.remove("off");
  } else {
    bodyNavbar.classList.add("off");
  }
}

mediaQuery.addListener(handleChange);
handleChange(mediaQuery);

// ============

hamburguerButton.addEventListener("click", () => {
  const closedMenu = bodyNavbar.classList.contains("off");

  if (closedMenu) {
    bodyNavbar.classList.remove("off");
    backdrop.classList.remove("off");
  }
});

closeButton.addEventListener("click", () => {
  const closedMenu = bodyNavbar.classList.contains("off");

  if (!closedMenu) {
    bodyNavbar.classList.add("off");
    backdrop.classList.add("off");
  }
});
