$(document).ready(function(){
   
$('#e1').hide();
$('#e2').hide();
$('#e3').hide();
$('#e4').hide();
$('#e5').hide();
$('#e6').hide();
$('#fire1').hide(); 
  $('#fire2').hide(); 
  $('#fire4').hide();
    $('#fire5').hide();
  
  var score=0;
  
  $('button').click(function(){
  $('h1').hide();
  $('a').hide(); 
  $('p').hide();
  alert("welcome to Clash shot");
  alert("1");
  alert("2");
  alert("3 go");
  $('button').hide(); 
  $('body').css({'background-image':'url(http://www.maisonsdenflandre.com/images/terrains-defaut.jpg)'});
  $('#e1').show();
  $('#e2').show();
  $('#e4').show();
  $('#e5').show();
  });

//Move E1 
 function moveE1Right() {
 $("#e1").animate({left: "+=300"}, 400, moveE1Left);}
  
 function moveE1Left() { 
 $("#e1").animate({left: "-=300"}, 400, moveE1Right);}
 
moveE1Right();
  
  
//Move E2 
 function moveE2Right() {
 $("#e2").animate({left: "+=300"}, 400, moveE2Left);}
  
 function moveE2Left() { 
 $("#e2").animate({left: "-=300"}, 400, moveE2Right);  
 }
 
moveE2Right();
  
  
  
//Move E4 
 function moveE4Right() {
 $("#e4").animate({left: "+=300"}, 400, moveE4Left);}
  
 function moveE4Left() { 
 $("#e4").animate({left: "-=300"}, 400, moveE4Right);  
 }
 
moveE4Right();
  
   
  
 //Move E4 
 function moveE5Right() {
 $("#e5").animate({left: "+=300"}, 400, moveE5Left);}
  
 function moveE5Left() { 
 $("#e5").animate({left: "-=300"}, 400, moveE5Right);  
 }
 
moveE5Right();
  
  


  
//shoot e1  
$('#e1').click(function(){
  $('#e1').hide();
  score = score + 1;
 document.getElementById("points").innerHTML = score;
  $('#fire1').show().hide(2000);
  $('#e1').show(2000); 
  });
  
//Shoot e2  
  $('#e2').click(function(){
  $('#e2').hide();
  score = score + 3;
 document.getElementById("points").innerHTML = score;
  $('#fire2').show().hide(2000);
  $('#e2').show(2000); 
  });
  
//Shoot e4
 $('#e4').click(function(){
  $('#e4').hide();
   score = score + 10;
 document.getElementById("points").innerHTML = score;
  $('#fire4').show().hide(2000);
  $('#e4').show(2000); 
  });
  
 //Shoot e5
 $('#e5').click(function(){
  $('#e5').hide();
   score = score + 5;
 document.getElementById("points").innerHTML = score;
  $('#fire5').show().hide(2000);
  $('#e5').show(2000); 
  }); 

});