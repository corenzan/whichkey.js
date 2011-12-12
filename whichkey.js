/*
 * Whichkey is a javascript tiny toolkit to identify
 * keystrokes coming from keydown and keyup events.
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0/
 * more on http://github.com/haggen/whichkey
 *
 * Examples:
 * if (whichkey(event).escape) {...}
 * if (whichkey(event).arrow('up')) {...}
 */

window.whichkey = function(e) {
  return {
    escape: function() {
      return e.which === 27;
    },

    backspace: function() {
      return e.which === 8;
    },

    enter: function() {
      return e.which === 13;
    },

    number: function() {
      return !e.shiftKey && e.which >= 48 && e.which <= 57;
    },

    letter: function() {
      return e.which >= 65 && e.which <= 90;
    },

    arrow: function(direction) {
      if (direction == null) {
        direction = 'any';
      }

      return {
        any:   e.which >= 37 && e.which <= 40,
        left:  e.which === 37,
        up:    e.which === 38,
        right: e.which === 39,
        down:  e.which === 40
      }[direction];
    }
  };
};