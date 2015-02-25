# Whichkey.js

> Ask keystrokes by name.

## About

**Whichkey.js** simply translates keystroke codes to names. Like when you want to know if a keystroke was any letter or a specific one, or if it was an arrow key, or anything else; you simply ask it by its name.

## Usage

Examples:

```javascript
if (whichkey(event).escape) {...}
if (whichkey(event).backspace) {...}
if (whichkey(event).letter) {...}
if (whichkey(event).a) {...}
if (whichkey(event).arrow) {...}
if (whichkey(event).down) {...}
```

### Complete list of acceptable queries:

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

## Contribute

More queries will be added over time, but you can always help by adding a couple yourself and sending me a *Pull request*. Also feel free to contact me or open an issue.

## License

See [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)
