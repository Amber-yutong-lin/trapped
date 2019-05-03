$(document).ready(function() {
    $("#button_1").hide();
     $("#myBtn").hide();
    
    $("#button_1").delay(22000).fadeIn(500);
     $("#myBtn").delay(20000).fadeIn(500);
   
});

//context
var aText = new Array(
">This carriage is very loud...", 
">Sounds like somebody is shouting.",
" ",
">Woah...",
">Is he a hobo or some kind of master？",
">Okay just take a look at this old man"
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