# Key mappings

## Support multiple keys

* Convert pressed key to array – this way we can press multiple keys.

```js
const isKeyDown = [];

document.addEventListener("keydown", (e) => {
  const { code } = e;

  if (!isKeyDown[code]) {
    console.log("Key pressed", code);
    isKeyDown[code] = true;
  }
});

document.addEventListener("keyup", (e) => {
  const { code } = e;

  console.log("Key depressed", code);
  isKeyDown[code] = false;
});
```

## Measure key time

There's a method useful to measure time in JS.

```js
// Start
console.time(`key_${code}`);

// End
console.timeEnd(`key_${code}`)
```

## Map keys to cats

Let's use simple literal object:

```js
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
```

## Get a note from the key

```js
// Key press
document.addEventListener("keydown", (e) => {
  ...
  if (!isKeyDown[code]) {
    if (keyMap[code]) {
      const note = keyMap[code];
      console.log("Played note", note);
    }
  }
  ...
});
```

## Connect cat animation to keys

```js
// Key press
document.addEventListener("keydown", (e) => {
  ...
  if (!isKeyDown[code]) {
    if (keyMap[code]) {
      const note = keyMap[code];
      console.log("Played note", note);
      toggleCat(note);
    }
  }
  ...
});
```

```js
// Key depress
document.addEventListener("keyup", (e) => {
  ...
  if (keyMap[code]) {
    const note = keyMap[code];
    toggleCat(note, false);
  }
  ...
});
```

## Connect keys to keyboard

Add a function similar to cat enabler:

```js
const toggleKey = (note, enable = true) => {
  keys
  .querySelector(`li[data-note=${note}]`)
  .classList.toggle("-active", enable);
}
```

Use this function in key handlers:

```js
document.addEventListener("keydown", (e) => {
  ...
  if (!isKeyDown[code])Also Tur {
    if (keyMap[code]) {
      ...
      toggleKey(note);
    }
    ...
  }
});

// Key depress
document.addEventListener("keyup", (e) => {
  ...
  if (keyMap[code]) {
    ...
    toggleKey(note, false);
  }
});
```

## Let's try audio!

Create pitch map:

```js
const pitchMap = {
  "C": 1,
  "D": 2,
  "E": 3,
  "F": 4,
  "G": 5,
  "A": 6,
  "B": 7,
  "Cf": 1.5,
  "Df": 2.5,
  "Ff": 4.5,
  "Gf": 5.5,
  "Af": 6.5
};
```

Add an audio function:

```js
const pitchMap = {
  "C": 1,
  "D": 2,
  "E": 3,
  "F": 4,
  "G": 5,
  "A": 6,
  "B": 7,
  "Cf": 1.5,
  "Df": 2.5,
  "Ff": 4.5,
  "Gf": 5.5,
  "Af": 6.5
};

const playNote = (note) => {
  const meow = new Audio("../assets/meow.mp3");

  if (pitchMap[note]) {
    meow.playbackRate = pitchMap[note];
  }

  meow.play();
}
```
