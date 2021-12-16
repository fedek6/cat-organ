# Tone.js

Add external lib:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.32/Tone.js"></script>
```

## Add support for cat sampler

```js
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
```
