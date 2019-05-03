$(document).ready(function() {
    $("#button_1").hide();

    
    $("#button_1").delay(48000).fadeIn(500);
  
});

//context
var aText = new Array(


"&quot;I know it!!!&quot;",
"&quot;I know it from the beginning...&quot;",
"&quot;The METRO!!!&quot;",
" ",
"&quot;The metro is never going to stop!&quot;",
"&quot;The world is never going to stop!&quot;",
" ",
"&quot;I saw everything.&quot;",
"&quot;Can’t you see?!! Everything is never going to stop, but it's never really moving too..&quot;", 
"&quot;Just like your f**king little life!!&quot;",
" ",
"&quot;Stop staring!&quot;",
"&quot;Leave me ALONE!&quot;",
"&quot;(MUMBLING) Where is my f**king Vodka...&quot;",
"&quot;......&quot;"
);


var iSpeed = 70; 
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