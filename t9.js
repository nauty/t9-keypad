$(document).ready(function(){
    $("#phone").find("button").mouseup(function(event){
        var button_pressed = $(event.currentTarget).data("value")
        $("#result").val(t9($("#result").val(),button_pressed));
         clearTimeout(longPress.interval);
    })
.mousedown(function(event) {
      longPress.interval = setTimeout(function() {
        longPress.flag = true;
      }, 500);
    });
 })  
 
var prev = {
  counter: -1
};
var longPress = {};

function t9(text,button_pressed){
    // Write your code here
  if (longPress.flag){
     longPress = {};
     return text+button_pressed;
   }  
  else{
	 var resultText = '';
   var currentTime = Date.now();
   var resultText = numTextMap[button_pressed];
   var changeAlpha = () => prev.now && currentTime - prev.now    < 500 &&prev.button_pressed === button_pressed &&               !boolNotAtoZ(button_pressed);
  if (changeAlpha()) {
    text = text.slice(0, -1);
    if ((prev.counter && prev.counter > 3) || !resultText[prev.counter]) {
      prev.counter = -1;
    }
    prev.counter++;
  } else {
    prev.counter = 0;
    
  }
prev.now = currentTime;
prev.button_pressed = button_pressed;
 return   (text + (resultText[prev.counter] || resultText[0]));
}
}

numTextMap = {
  '1': '.,!',
  '2' : 'abc',
  '3' : 'def',
  '4' : 'ghi',
  '5' : 'jkl',
  '6' : 'mno',
  '7' : 'pqrs',
  '8' : 'tuv',
  '9' : 'wxyz',
  '*' : '*',
  '0' : '0',
  '#' : '#',
}

function boolNotAtoZ(button_pressed) {
  return button_pressed === '*' || button_pressed === 0 || button_pressed === '#';
}