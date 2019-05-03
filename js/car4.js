$(document).ready(function() {
    $("#button_1").hide();
     $("#myBtn").hide();

	
    
    $("#button_1").delay(21000).fadeIn(500);
     $("#myBtn").delay(20000).fadeIn(500);
   
});

//context
var aText = new Array(
">Wait...", 
">I think I saw a little girl",
">Short curly Red hair...",
">Small eyes...",
">And a really strange nose...",
"",
"",
">Why is she on the train?",
">What is she looking at..."

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