# Whichkey

> Ask keystrokes by name.

## About

**Whichkey** simply translates keystrokes codes to names. Like when you want to know if a keystroke was any letter or a specific one, or if it was an arrow key, or anything else. You just ask by its name.

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

Complete list of acceptable queries:

- `esc[ape]`
- `tab`
- `backspace`
- `delete`
- `space[bar]`
- `enter | return`
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

More queries will be added over time, but you can help by adding a couple yourself and sending a *Pull request*.

## License

See http://creativecommons.org/licenses/by-sa/4.0/
