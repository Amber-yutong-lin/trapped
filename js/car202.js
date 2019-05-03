$(document).ready(function() {
    $("#button_1").hide();
	$("#button_2").hide();
    
    $("#button_1").delay(38000).fadeIn(500);
    $("#button_2").delay(38000).fadeIn(500);
});

//context
var aText = new Array(

 "&quot;Hi, there.&quot;",
 "&quot;Want a night of pleasure with me?&quot;",
 "&quot;I WILL take you to heaven...&quot;",
 " ",
 "&quot;I can tell...from your eyes.&quot;",
 "&quot;You are different from those animals out there.&quot;", 
"&quot;Those animals... animals... &quot;",
" ",
"&quot;I used to have the eyes like you.&quot;",
"&quot;I just wanna live...&quot;",
"......"
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