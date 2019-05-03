$(document).ready(function() {
    $("#button_1").hide();
	// $("#button_2").hide();
    
    $("#button_1").delay(37000).fadeIn(500);
    // $("#button_2").delay(43000).fadeIn(500);
});

//context
var aText = new Array(
'>Bonjour',
'>My name is Mouchette,', 
'>I live in Amsterdam,',
'>I am nearly 13 years old,',
'>I am an artist.',
"",
'>Would you listen to me?',
"",
"",
'>The best way to commit suicide is to allow it to happen,', 
'naturally!',
'>But be prepared, It can be pleasurable and at times,',
'inflict unbearable pain,', 
'>It may take a lifetime to achieve the final results'
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