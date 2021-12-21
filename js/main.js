const keys = document.querySelector("#keys");
const cats = document.querySelector("#cats");

const sampler = new Tone.Sampler({
  urls: {
    C0: "meow.mp3",
  },
  relase: 1,
  baseUrl: "../assets/",
}).toDestination();

const translateNote = (note, octave = 0) => {
  let newNote;

  if (note[1] === "f") {
    newNote = `${note[0]}#`;
  } else {
    newNote = note[0];
  }

  return `${newNote}${octave}`;
};

const playNote = (note, octave = 0) => {
  const newNote = translateNote(note, octave);

  sampler.triggerAttack(newNote);
};

const stopNote = (note, octave = 0) => {
  const newNote = translateNote(note);

  sampler.triggerRelease(newNote);
};

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

const toggleKey = (note, active = true, octave = 0) => {
  keys
    .querySelector(`li[data-note="${note}"][data-octave="${octave}"]`)
    .classList.toggle("-active", active);
};

keys.addEventListener("mousedown", (e) => {
  // const target = e.target; the same!
  const { target } = e;

  if (target.matches("li.key")) {
    const { note, octave } = target.dataset;

    console.log("Played note", note);
    console.log("Played octave", octave);

    toggleCat(note);
    playNote(note, octave);
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

const keyMap = {
  KeyZ: { note: "C", octave: 0 },
  KeyX: { note: "D", octave: 0 },
  KeyC: { note: "E", octave: 0 },
  KeyV: { note: "F", octave: 0 },
  KeyB: { note: "G", octave: 0 },
  KeyN: { note: "A", octave: 0 },
  KeyM: { note: "B", octave: 0 },
  KeyS: { note: "Cf", octave: 0 },
  KeyD: { note: "Df", octave: 0 },
  KeyG: { note: "Ff", octave: 0 },
  KeyH: { note: "Gf", octave: 0 },
  KeyJ: { note: "Af", octave: 0 },
  Comma: { note: "C", octave: 1 },
  Period: { note: "D", octave: 1 },
  KeyL: { note: "Cf", octave: 1 },
};

let isKeyDown = [];

document.addEventListener("keydown", (e) => {
  const { code } = e;

  console.log(code);

  if (!isKeyDown[code]) {
    if (keyMap[code]) {
      const { note, octave } = keyMap[code];

      toggleCat(note);
      toggleKey(note, true, octave);

      playNote(note, octave);

      console.log("Note played", note);
      console.log("Key pressed", code);

      console.time(code);
    }

    isKeyDown[code] = true;
  }
});

document.addEventListener("keyup", (e) => {
  const { code } = e;

  if (isKeyDown[code]) {
    if (keyMap[code]) {
      const { note, octave } = keyMap[code];

      toggleCat(note, false);
      toggleKey(note, false, octave);
      stopNote(note, octave);

      console.log("Key depressed", code);
      console.timeEnd(code);
    }

    isKeyDown[code] = false;
  }
});
