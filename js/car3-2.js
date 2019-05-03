$(document).ready(function() {
    $("#button_1").hide();
	$("#button_2").hide();
    
    $("#button_1").delay(20000).fadeIn(500);
    $("#button_2").delay(20000).fadeIn(500);
});

//context
var aText = new Array(

 

'Hi.',
"Why are you here?",
'You want to run away too?', 
' ',
"That's what I was thinking...",
"I can't stand my life anymore.",
"It's the same everyday and there's no hope",
"Nothing.",
' '

);


var iSpeed = 80; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 10; 
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