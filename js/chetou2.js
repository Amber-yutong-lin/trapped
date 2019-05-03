$(document).ready(function() {
    $("#link1").hide();
    $("#button_1").hide();
	  $("#button_2").hide();
    
    $("#link1").delay(34000).fadeIn(500);
    $("#button_1").delay(36000).fadeIn(500);
    $("#button_2").delay(36000).fadeIn(500);
});

//context
var aText = new Array(
">Okay...", 
">You saw that too, right?",
">I thought it was just me losing my mind...",
">I have been trapped here way too long.",
" ",
">It is super weird.",
">The whole train is weird.",
"",
">Was there...",
">A CAT???",
"",
">Anyways it's certainly empty now.",
">Let's keep moving."
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

