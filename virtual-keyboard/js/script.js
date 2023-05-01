let textArea = document.createElement('textarea');
textArea.className = "text-area";
textArea.innerHTML = " ";
document.body.append(textArea);
//let mainText = text-area.value;


var virtualKeyboard = document.createElement('div');
virtualKeyboard.className = "keyboard-wrapper";
virtualKeyboard.innerHTML = "<strong>Virtual Keyboard</strong>";
document.body.append(virtualKeyboard);

let keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keyboardUp = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'k', 'L', ':', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
let keyboardRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
let keyboardRusUp = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];

//отслеживаем символы  TODO - удалить перед деплоем!!!!!
//  document.onkeypress = function (event) {
//    console.log(event);
//   keyboard.push(event.key);
//   console.log(keyboard);
// }

function init () {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 13) {
      out += '<div class = "big-button k-key"> Backspace </div>';
      out += '<div class = "tab k-key"> Tab </div>';
    } else if (i == 26) {
      out += '<div class = "service-button k-key"> Del </div>';
      out += '<div class = "big-button k-key"> CapsLock </div>';
    } else if (i == 37) {
      out += '<div class = "double-button k-key"> Enter </div>';
      out += '<div class = "big-button k-key"> Shift </div>';
    }
    out += '<div class = "button k-key" data = "' + keyboard[i] + '">' + keyboard[i] + '</div>';
     if (i == 46) {
      out += '<div class = "arrows-key k-key"><div class = "arrow-up"> </div></div>';
      out += '<div class = "double-button k-key"> Shift </div>';
      out += '<div class = "service-button k-key"> Ctrl </div>';
      out += '<div class = "service-button k-key"> Win </div>';
      out += '<div class = "service-button k-key"> Alt </div>';
      out += '<div class = "space k-key">  </div>';
      out += '<div class = "service-button k-key"> Alt </div>';
      out += '<div class = "arrows-key k-key"><div class = "arrow-left"> </div></div>';
      out += '<div class = "arrows-key k-key"><div class = "arrow-down"> </div></div>';
      out += '<div class = "arrows-key k-key"><div class = "arrow-right"> </div></div>';
      out += '<div class = "service-button k-key k-key"> Ctrl </div>';
    }
  }
  document.querySelector('.keyboard-wrapper').innerHTML = out;
}
init ();

document.addEventListener('keydown', function (event) {
  console.log(event.code);
  console.log(event.key);
  document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
  document.querySelector('.keyboard-wrapper .k-key[data = "' + event.key + '"]').classList.add('active');
});

document.addEventListener('keyup', function (event) {
  document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
});


document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    let key = this.getAttribute('data');
    this.classList.add('active');
    if (key !== null) {
      textArea.value += key;
    }
    console.log(key);
  });

});

document.addEventListener("keydown", function (event) {
  let push = event.key;
  if (push !== null && push.length < 2) {
    textArea.value += push;
  }
  console.log("push");
});

document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
  element.addEventListener("mouseup", function (event) {
    this.classList.remove('active');
   });
});
