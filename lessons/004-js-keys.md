# JS keys

## Extract components

This way it will be easier:

```js
const keys = document.querySelector("#keys");
const cats = document.querySelector("#cats");
```

## Modify mousedown event

```js
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
```

## Add mouseup event

**Attention!** This is wrong, you need to use other cat to catch this properly. Because user can take a cursor from the pressed element.

```js
keys.addEventListener("mouseleave", (e) => {
  const clikedElement = e.target;

  if (clikedElement.matches("li.key")) {
    const { note } =  clikedElement.dataset;
    console.log("stop", note);
    toggleCat(note, false);
  } else {
    console.log("Other element clicked", clikedElement);
  }
});
```

### Proper code

We need to disable all cat animations when user is depressing mouse.

```js
document.addEventListener("mouseup", (e) => {
  const allCats = [...cats.querySelectorAll("li")];

  console.log("Muting down all cats");
  allCats.map((elm) => elm.classList.remove("-animate"));
});
```

## Hash symbol misfortune

We cannot use `#` symbol in `data-note="C#"`. Why? Because we need this as CSS query selector and this character is reserved for `id` selectors.

> Use selective find & replace in VSC to replace # with f.

For eg.

```html
<li data-note="Ff" class="-sharp-flat key"></li>
```

This works!


## Basic key support



```js
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
```
