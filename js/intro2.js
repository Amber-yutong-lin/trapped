$(document).ready(function() {
    $("#button_1").hide();
	$("#button_2").hide();
    
    $("#button_1").delay(80000).fadeIn(500);
    $("#button_2").delay(80000).fadeIn(500);
});

//context
var aText = new Array(
">Finally!!!!!!!!", 
">Sorry for acting kinda crazy...",
">But you have to understand!",
" ",
">Somehow my phone connection got reallllly bad", 
">...and I haven't got in touch with ANY human-beings since.",
">But you answered! Yay!",
" ",
">Anyways, the connection is not the only weird thing that happened.",
">FYI, I am taking the last train home, as usual.",
">It should have got to my station like 10 minutes AGO",
">......",
">BUT",
">It haven't stopped. AT ALL.",
" ",
">I kept staring at the window all this time,",
">But there's nothing but darkness",
" ",
">Nothing.",
">And there's no one else here. The carriage is empty.",
">......",
">Okay I have to admit that I am really scared now.",
">What should I do?"
);


var iSpeed = 80; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 14; 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 1000);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();