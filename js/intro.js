$(document).ready(function() {
    $("#button_1").hide();
	$("#button_2").hide();
    
    $("#button_1").delay(23000).fadeIn(500);
    $("#button_2").delay(23000).fadeIn(500);
});

//context
var aText = new Array(
">...ello?", 
">...nybody there???",
" ",
">...ings are ...etting pr...ty wierd...",
" ",
">... you ... me?",
">......",
">... repeat: ..an you ...ead me?",
">......",
">Can anybody read me?",
">Pls???"
);


var iSpeed = 80; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
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