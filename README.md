# Whichkey.js

> Ask keystrokes by name.

## About

**Whichkey.js** simply translates keystroke codes to readable names. Like when you want to know if a keystroke was any letter or a specific one, or if it was an arrow key, or anything else; you simply ask it by its name.

## Usage

Simply wrap a `keypress`, `keyup` or `keydown` event in `whichkey()`, for instance:

```js
input.addEventListener('keydown', function(e) {
  var key = whichkey(e);
});
```

Then proceed to _ask_ which key was pressed. Like this:

```javascript
if (key.escape) {...}
if (key.backspace) {...}
if (key.letter) {...}
if (key.a) {...}
if (key.arrow) {...}
if (key.down) {...}
```

### Supported keystrokes

So far I've added the following queries:

- `esc[ape]`
- `tab`
- `backspace`
- `delete`
- `space[bar]`
- `enter|return`
- `<any number>`
- `number[s]`
- `<any letter>`
- `letter[s]`
- `arrow[s]`
- `left`
- `up`
- `right`
- `down`
- `home`
- `end`
- `pageUp`
- `pageDown`

## Contribution

More queries will be added over time, but you can always help by adding a couple yourself and submitting a *Pull request*.

## License

This project is licensed under [MIT](LICENSE).
