const keys = document.querySelector("#keys");
const cats = document.querySelector("#cats");


const toggleCat = (note, state = true) => {
  console.log(cats);

  cats.querySelector(`li[data-note=${note}]`).classList.toggle("-animate", state);
}

keys.addEventListener("mousedown", (e) => {
  const clikedElement = e.target;

  if (clikedElement.matches("li.key")) {
    const { note } =  clikedElement.dataset;
    console.log("start", note);
    toggleCat(note);
  } else {
    console.log("Other element clicked", clikedElement);
  }
});

document.addEventListener("mouseup", () => {
  const allCats = [...cats.querySelectorAll("li")];

  console.log("Muting down all cats");
  allCats.map((elm) => elm.classList.remove("-animate"));
});


let isKeyDown = false

document.addEventListener("keydown", (e) => {
  if (!isKeyDown) {
    console.log("key pressed", e.code);
    isKeyDown = true;
  }
});

document.addEventListener("keyup", (e) => {
  isKeyDown = false;
});
