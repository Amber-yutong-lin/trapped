// $(document).ready(function() {
//     $("#button_1").hide();
// 	$("#button_2").hide();
    
//     $("#button_1").delay(600).fadeIn(500);
//     $("#button_2").delay(600).fadeIn(500);
// });

//context
var aText = new Array(
">You..you tell me to stay?", 
">What is wrong with you?!",
">No...No!",
">This is not the way I want to end it…",
">Let me get out of it!!!",
">I still got a chance", 
">I want to…",
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

setTimeout(function(){window.location.href='p5leave.html'},19000);