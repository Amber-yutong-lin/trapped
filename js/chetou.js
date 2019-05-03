$(document).ready(function() {
    $("#button_1").hide();
    $("#myBtn").hide();    
    $("#button_1").delay(40000).fadeIn(500);
    $("#myBtn").delay(38000).fadeIn(500);
});

//context
var aText = new Array(
">You're smart!", 
">We should definitely check out what is the driver doing.", 
">On my way!",
"",
" ",
">Ugh!",
">It's locked.",
">I can't get in. I tried.", 
" ",
">But there is a small window on the door which I can peep through...",
">Wait...",
">......",
">?????",
">I'm not sure what I just saw in there.",
">Let me send you a short video.",
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

var aText2 = new Array(
">You're smart. We should definitely check out what's the driver doing.", 
">Let's go!",
"",
" ",
">Ugh!",
">It's locked.",
">I can't get in. I tried.", 
" ",
">But there is a small window on the door which I can peep through...",
">Wait...",
">......",
">?????",
">I'm not sure what I just saw in there.",
">Let me send you a short video.",
);


