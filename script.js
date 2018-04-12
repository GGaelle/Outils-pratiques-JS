var url = 'http://data.fixer.io/api/latest?access_key=30387b1c42b6a5263750ffc388220e84&base=EUR&symbols=GBP,JPY,USD,AUD,CHF,EUR'


function recupererValeur(){
// execute the conversion using the "convert" endpoint:
$.ajax({
    url: url,
    dataType: 'jsonp',

      success: function(res,status,req) {

        console.log(res.rates);
        console.log(status);

      var taux = res.rates
        , from = document.getElementById('from').value
        , to = document.getElementById('to').value
        , amount = document.getElementById('fromAmount').value

      var result = amount * taux[to] / taux [from]

        document.getElementById('toAmount').value = result


    }
})};


var print = function(msg) {
    document.getElementById("output").innerHTML = "la longueur du mot est " + msg
}

document.getElementById('btn').onclick = function(event){
  print(document.getElementById('str').value.length)
}

//Part Horloge digitale
setInterval(function(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";

if (hours >=12) {
    period = "PM"
}
if (hours > 12){
  hours = hours - 12;
}
if (seconds < 10) {
  seconds = 0 + seconds;
}
if (minutes < 10) {
  minutes = 0 + minutes
}

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

  var clock = document.getElementById("clock");
  clock.innerText = clockTime;


}, 1000);


//Part formulaire de contact
$(document).ready(function(){
  function init() {
    if (localStorage["name"]){
      $('#name').val(localStorage["name"])
    }
    if (localStorage["email"]){
      $('#email').val(localStorage["email"])
    }
    if (localStorage["message"]){
      $('#message').val(localStorage["message"])
    }
  }
  init();
});

$('.stored').change(function(){
  localStorage[$(this).attr('name')] = $(this).val()

});


//Part Slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n)
}

function  showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides')

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none"
  }
  x[slideIndex-1].style.display = "block"
}
