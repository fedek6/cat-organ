const keys = document.querySelector("#keys");
const cats = document.querySelector("#cats");

/*
const toggleCat = function (note, state = true) {

} The same!
*/
const toggleCat = (note, animate = true) => {
  /*
    The same!
    let = "li[data-note=" + note + "]";
  */
  cats
    .querySelector(`li[data-note=${note}]`)
    .classList.toggle("-animate", animate);
};

keys.addEventListener("mousedown", (e) => {
  // const target = e.target; the same!
  const { target } = e;

  if (target.matches("li.key")) {
    const { note } = target.dataset;

    console.log("Played note", note);

    toggleCat(note);
  }
});

document.addEventListener("mouseup", () => {
  const allCats = [...cats.querySelectorAll("li")];

  console.log("Muting down all cats");
  allCats.map((elm) => {
    elm.classList.remove("-animate");
  });
});

/*

Arrow function:

const a = function() {

}

const b = () => true;

const c = () => {
  return true;
}

const d = e => e;
*/


/*

The same:

if (!isKeyDown) {}

if (isKeyDown === false) {}

*/

let isKeyDown = false;

document.addEventListener("keydown", (e) => {
  if (!isKeyDown) {
    console.log("Key pressed", e.code);
    isKeyDown = true;
  }
});

document.addEventListener("keyup", (e) => {
  isKeyDown = false;
});

