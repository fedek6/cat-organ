# Layouts

## Center content

```css
body {
  ...
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Main

Add main element.

```css
  main {
    ...

    border: solid 1px red;

    width: 66%;
    height: 70vh;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    row-gap: 16px;

    row-gap: 16px;
  }
```

## Add inner containers

```html
  <main>
    <div id="logo">
      Logo
    </div>
    <div>
      <div id="cats">
        aaa
      </div>
      <div id="keyboard">
        bbb
      </div>
    </div>
  </main>
```

## More breath from the top

```css
body {
  padding: 5% 32px 32px 32px;
}
```

## Make logo container fixed height

```css
/* Logo */
#logo {
  flex-basis: 20%;
}
```

## Distribute inner containers

```css
main > :nth-child(2) {
  flex-grow: 1;
  flex-basis: auto;
}
```

## Class Shadow

Create class `shadow` and it to main` inner container and lower cat organ history info.

```css
.shadow {
  background-color: white;
  border: 1px solid Black;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}
```

## Inner container width

Add width to inner container.

## Add flex to inner container

```css
main > :nth-child(2) {
  ...
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
```

## Make cat container grow

```css
/* Cats */
#cats {
  order: 0;

  flex-grow: 1;
  flex-basis: auto;
}
```

## Make keyboard fixed height

```css
/* Keyboard */
#keyboard {
  flex-basis: 30%;
}
```

## Add logo

```html
<img src="img/logo.svg" alt="Logo">
```

```css
#logo > img {
  width: auto;
  height: 100%;
}
```
