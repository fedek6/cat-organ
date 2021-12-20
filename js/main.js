const keys = document.querySelector("#keys");
const cats = document.querySelector("#cats");

const sampler = new Tone.Sampler({
  urls: {
    C0: "meow.mp3"
  },
  release: 1,
  baseUrl: "../assets/"
}).toDestination();


const translateNote = (note) => {
  let noteForSampler = note;

  if (note[1] == "f") {
    noteForSampler = note[0] + "#";
  }

  return `${noteForSampler}0`;
}

const playNote = (note) => {
  sampler.triggerAttack(translateNote(note));
}

const stopNote = (note) => {
  sampler.triggerRelease(translateNote(note));
}

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

const toggleKey = (note, active = true) => {
  keys
    .querySelector(`li[data-note=${note}]`)
    .classList.toggle("-active", active);
}

keys.addEventListener("mousedown", (e) => {
  // const target = e.target; the same!
  const { target } = e;

  e.stopPropagation();

  if (target.matches("li.key")) {
    const { note } = target.dataset;

    console.log("Played note", note);

    toggleCat(note);
    playNote(note);
  }
});

document.addEventListener("mouseup", (e) => {
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

const keyMap = {
  KeyZ: "C",
  KeyX: "D",
  KeyC: "E",
  KeyV: "F",
  KeyB: "G",
  KeyN: "A",
  KeyM: "B",
  KeyS: "Cf",
  KeyD: "Df",
  KeyG: "Ff",
  KeyH: "Gf",
  KeyJ: "Af"
};

let isKeyDown = [];

document.addEventListener("keydown", (e) => {
  const { code } = e;

  if (!isKeyDown[code]) {

    if (keyMap[code]) {
      const note = keyMap[code];

      toggleCat(note);
      toggleKey(note);
      playNote(note);

      console.log("Note played", note);
      // console.log("Key pressed", code);

      console.time(code);
    }

    isKeyDown[code] = true;
  }
});

document.addEventListener("keyup", (e) => {
  const { code } = e;


  if (isKeyDown[code]) {

    if (keyMap[code]) {
      const note = keyMap[code];

      toggleCat(note, false);
      toggleKey(note, false);
      stopNote(note);

      // console.log("Key depressed", code);
      console.timeEnd(code);
    }

    isKeyDown[code] = false;
  }
});

