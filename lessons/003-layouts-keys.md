# Layouts: keys

## Add keyboard markup

```html

        <ul class="keyboard">
          <li></li>
          <li class="-sharp-flat"></li>
          <li></li>
          <li class="-sharp-flat"></li>
          <li></li>
          <li></li>
          <li class="-sharp-flat"></li>
          <li></li>
          <li class="-sharp-flat"></li>
          <li></li>
          <li class="-sharp-flat"></li>
          <li></li>
        </ul>
```

### Add keys CSS

* `~` general sibling selector, catches elements that are siblings of the first element [check docs](https://gist.github.com/kapilbhosale/6e10d88089576673a994898bdd38b07a).

```css
/* Keyboard */
.keyboard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 100%;

  list-style: none;
  padding: 0;
  margin: 0;

  border-top: 2px solid Black;
}

.keyboard > li {
  flex: 1 1 auto;
}

.keyboard > li ~ li {
  border-left: solid 2px Black;
}

.keyboard > .-sharp-flat {
  display: none;
}
```

## Set width for keys container

```css
#keys {
  width: 100%;
}
```

## Change choir - keys proportions

```css
#keys {
  flex-basis: 55%;
}
```

## Fix default margins on cat choirs

```css
.cat-choir {
  ...
  padding: 0;
  margin: 0;
}
```

## Style flat keys

* Each normal key has 100% / 7 width.
* Each sharp/flat key has 100% / 14 width (because it's a half of a normal key).
* Position of flat keys is based upon a normal keys positions:

Example formula:

```
calc(2 * (100% / 7) - (100% / 14) / 2);
//   N keys * normal key width - half of a flat key.
```


```css
.keyboard {
  ...
  position: relative
}

.keyboard > .-sharp-flat {
  height: 60%;
  background-color: black;
  width: calc(100% / 14);
  display: block;
  position: absolute;

  border: none;
}

/* Each black key position */
.keyboard > li:nth-of-type(2) {
  left: calc((100% / 7) - (100% / 14) / 2);
}

.keyboard > li:nth-of-type(4) {
  left: calc(2 * (100% / 7) - (100% / 14) / 2);
}

.keyboard > li:nth-of-type(7) {
  left: calc(4 * (100% / 7) - (100% / 14) / 2);
}

.keyboard > li:nth-of-type(9) {
  left: calc(5 * (100% / 7) - (100% / 14) / 2);
}

.keyboard > li:nth-of-type(11) {
  left: calc(6 * (100% / 7) - (100% / 14) / 2);
}
```

## Add cool key state

```css
.keyboard > .-sharp-flat {
  transform: scaleY(-1);
}

/* Modifiers */
.keyboard > .-active,
.keyboard > li:active {
  background-image: url("../img/black-shadow.png");
  background-repeat: repeat-x;
  background-position: left bottom;
}

.keyboard > .-sharp-flat.-active,
.keyboard > .-sharp-flat:active {
  background-position: left top;
}
```
