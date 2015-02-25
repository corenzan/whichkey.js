// Whichkey.js Wed Feb 25 11:54:26 BRT 2015
// more on github.com/haggen/whichkey.js
;(function(root) {

  'use strict';

  var whichkey;

  whichkey = function(e) {
    // console.log(e.which);

    return {
      esc:          e.which === 27,
      escape:       e.which === 27,
      tab:          e.which === 9,
      backspace:    e.which === 8,
      'delete':     e.which === 46,
      space:        e.which === 32,
      spacebar:     e.which === 32,
      enter:        e.which === 13,
      'return':     e.which === 13,
      number:      !e.shiftKey && e.which >= 48 && e.which <= 57,
      numbers:     !e.shiftKey && e.which >= 48 && e.which <= 57,
      0:           !e.shiftKey && e.which === 48,
      1:           !e.shiftKey && e.which === 49,
      2:           !e.shiftKey && e.which === 50,
      3:           !e.shiftKey && e.which === 51,
      4:           !e.shiftKey && e.which === 52,
      5:           !e.shiftKey && e.which === 53,
      6:           !e.shiftKey && e.which === 54,
      7:           !e.shiftKey && e.which === 55,
      8:           !e.shiftKey && e.which === 56,
      9:           !e.shiftKey && e.which === 57,
      letters:      e.which >= 65 && e.which <= 90,
      letter:       e.which >= 65 && e.which <= 90,
      a:            e.which === 65,
      b:            e.which === 66,
      c:            e.which === 67,
      d:            e.which === 68,
      e:            e.which === 69,
      f:            e.which === 70,
      g:            e.which === 71,
      h:            e.which === 72,
      i:            e.which === 73,
      j:            e.which === 74,
      k:            e.which === 75,
      l:            e.which === 76,
      m:            e.which === 77,
      n:            e.which === 78,
      o:            e.which === 79,
      p:            e.which === 80,
      q:            e.which === 81,
      r:            e.which === 82,
      s:            e.which === 83,
      t:            e.which === 84,
      u:            e.which === 85,
      v:            e.which === 86,
      y:            e.which === 87,
      x:            e.which === 88,
      w:            e.which === 89,
      z:            e.which === 90,
      arrow:        e.which >= 37 && e.which <= 40,
      arrows:       e.which >= 37 && e.which <= 40,
      left:         e.which === 37,
      up:           e.which === 38,
      right:        e.which === 39,
      down:         e.which === 40
    };
  };

  root.whichkey = whichkey;

})(this);
