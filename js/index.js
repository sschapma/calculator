window.onload = function() {
  var buttons = document.getElementsByTagName('span'),
    answer = document.querySelectorAll('.answer p')[0],
    clear = document.getElementsByClassName('clear')[0],
    mem = "no"; //used for chaining

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }

  clear.onclick = function() {
    answer.innerHTML = '';
  };

  function addValue(i) {
    return function() {
      if (buttons[i].innerHTML === '÷') {
        answer.innerHTML += ' / ';
        mem = "no";
      } else if (buttons[i].innerHTML === 'x') {
        answer.innerHTML += ' * ';
        mem = "no";
      } else if (buttons[i].innerHTML === '+') {
        answer.innerHTML += ' + ';
        mem = "no";
      } else if (buttons[i].innerHTML === '-') {
        answer.innerHTML += ' - ';
        mem = "no";
      } else {
        if (mem == "yes") {
          answer.innerHTML = buttons[i].innerHTML;
          mem = "no";
        } else {
          answer.innerHTML += buttons[i].innerHTML;
        };
      }
    };
  }
//allows input by keyboard
  $(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 49) {
      if (mem == "yes") {
        answer.innerHTML = 1;
        mem = "no";
      } else {
        answer.innerHTML += 1;
      };
    } else if (keycode === 50) {
      if (mem == "yes") {
        answer.innerHTML = 2;
        mem = "no";
      } else {
        answer.innerHTML += 2;
      };
    } else if (keycode === 51) {
      if (mem == "yes") {
        answer.innerHTML = 3;
        mem = "no";
      } else {
        answer.innerHTML += 3;
      };
    } else if (keycode === 52) {
      if (mem == "yes") {
        answer.innerHTML = 4;
        mem = "no";
      } else {
        answer.innerHTML += 4;
      };
    } else if (keycode === 53) {
      if (mem == "yes") {
        answer.innerHTML = 5;
        mem = "no";
      } else {
        answer.innerHTML += 5;
      };
    } else if (keycode === 54) {
      if (mem == "yes") {
        answer.innerHTML = 6;
        mem = "no";
      } else {
        answer.innerHTML += 6;
      };
    } else if (keycode === 55) {
      if (mem == "yes") {
        answer.innerHTML = 7;
        mem = "no";
      } else {
        answer.innerHTML += 7;
      };
    } else if (keycode === 56) {
      if (mem == "yes") {
        answer.innerHTML = 8;
        mem = "no";
      } else {
        answer.innerHTML += 8;
      };
    } else if (keycode === 57) {
      if (mem == "yes") {
        answer.innerHTML = 9;
        mem = "no";
      } else {
        answer.innerHTML += 9;
      };
    } else if (keycode === 48) {
      if (mem == "yes") {
        answer.innerHTML = 0;
        mem = "no";
      } else {
        answer.innerHTML += 0;
      };
    } else if (keycode === 13) {
      mem = "yes";
      var x = eval(answer.innerHTML);
      if (isFinite(x)) {
        answer.innerHTML = x;
      } else {
        answer.innerHTML = 'ERROR';
      };
    } else if (keycode === 43) {
      answer.innerHTML += ' + ';
      mem = "no";
    } else if (keycode === 45) {
      answer.innerHTML += ' - ';
      mem = "no";
    } else if (keycode === 42 || keycode === 120) {
      answer.innerHTML += ' * ';
      mem = "no";
    } else if (keycode === 47) {
      answer.innerHTML += ' / ';
      mem = "no";
    } else if (keycode === 99) {
      answer.innerHTML = '';
      mem = "no";
    }
  });

  function calculate(i) {
    return function() {
      mem = "yes"
      var y = eval(answer.innerHTML);
      // returns "ERROR" on divide by zero instead of "Infinity"
      if (isFinite(y)) {
        answer.innerHTML = y;
      } else {
        answer.innerHTML = 'ERROR';
      };
    };
  }
};
