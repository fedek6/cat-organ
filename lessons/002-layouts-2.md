# Layouts II

## Add cats row no 1

12 cats because there are 12 notes in one octave.

* use modifiers.

Emmet:

`ul.cat-row.-lower>li*7`

```html
        <div class="cat-row -lower">
          <ul class="cat-choir">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
```

## Add cats row no 2

Emmet:

`ul.cat-row.-upper>li*5`

```html
        <div class="cat-row -upper">
          <ul class="cat-choir">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
```

## Create cat-choir component

* use modifiers.
* modify `ul li` behavior.

```css
/* Cat choir component */
.cat-choir {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
}

.cat-choir > li {
  width: 86px;
  height: 118px;

  list-style: none;

  background-image: url("../img/cat-001.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.cat-choir > .-black {
  background-image: url("../img/cat-002.png");
}
```

## Position cat rows

```css
#cats {
  ...
  position: relative;
  width: 100%;
}

.cat-row {
  position: absolute;
  width: 100%;
}

.cat-row.-upper {
  z-index: 1;
  bottom: 64px;
}

.cat-row.-lower {
  z-index: 2;
  bottom: 0;
}
```

## Animate cat

172px for sprite animation because it's sprite width.

```css
.cat-choir > li {
  ...
  background-image: url("../img/cat-spritesheet-001.png");
  ...
}

.cat-choir > .-black-cat {
  ...
  background-image: url("../img/cat-spritesheet-002.png");
  ...
}

.cat-choir > .-animate {
  animation-name: cat-singing;
  animation-duration: .6s;
  animation-timing-function: steps(2);
  animation-iteration-count: infinite;
}

@keyframes cat-singing {
  from {
    background-position: 0px;
  }
  to {
    background-position: -172px;
  }
}
```

> Note: you can omit `from` declaration.

## Test cat` animation

```html
        <div class="cat-row -upper">
          <ul class="cat-choir">
            <li class="-black-cat -animate"></li>
            <li></li>
            <li></li>
            <li class="-animate"></li>
            <li></li>
          </ul>
        </div>
```
