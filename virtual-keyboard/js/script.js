let textArea = document.createElement('div');
textArea.className = "text-area";
textArea.innerHTML = "<strong>Virtual Keyboard Text Area</strong>";
document.body.append(textArea);

var virtualKeyboard = document.createElement('div');
virtualKeyboard.className = "keyboard-wrapper";
virtualKeyboard.innerHTML = "<strong>Virtual Keyboard</strong>";
document.body.append(virtualKeyboard);

let keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

// отслеживаем символы  TODO - удалить перед деплоем!!!!!

//  document.onkeypress = function (event) {
//    console.log(event);
//   keyboard.push(event.key);
//   console.log(keyboard);
// }

function init () {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 13 || i == 24) {
      out += '<div class = "clearfix"></div>'
    }
    out += '<div class = "k-key" data = "' + keyboard[i] + '">' + keyboard[i] + '</div>'
  }
  document.querySelector('.keyboard-wrapper').innerHTML = out;
}
init ();

document.onkeypress = function (event) {
  console.log(event.code);
  console.log(event.key);
  document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
    element.classList.remove('active');
  });
  document.querySelector('.keyboard-wrapper .k-key[data = "' + event.key + '"]').classList.add('active');
}

document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
  element.onclick = function (event) {
    document.querySelectorAll('.keyboard-wrapper .k-key').forEach(function (element) {
      element.classList.remove('active');
    });
    let key = this.getAttribute('data');
    this.classList.add('active');
    console.log(key);
  }
});