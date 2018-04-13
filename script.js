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


//Part calcul mental
var number1 = Math.floor((Math.random() * 100) + 1)
  , number2 = Math.floor((Math.random() * 100) + 1)

//on les place dans le HTML
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var boutonValiderLaRep = document.getElementById("btn5")

boutonValiderLaRep.onclick = function() {
  var repDuJoueur = document.getElementById("answer").value
  if (number1 + number2 == repDuJoueur){
    alert("Bravo c'est la bonne réponse")
  } else {
    alert("C'est faux, la réponse était " + repDuJoueur)
  }
}


// Part TodoList
function getTodos(){
  var todos = new Array
    , todosStr = localStorage.getItem('todo')

  if (todosStr !== null) {
    todos = JSON.parse(todosStr)
  }
  return todos
}

function add() {
  var task = document.getElementById('task').value
    , todos = getTodos()

  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();

  return false;
}

function clearDefault(a){
  if (a.defaultValue==a.value) {a.value=""}
};

function remove (){
  var id = this.getAttribute('id')
    , todos = getTodos()

    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));

    show();

    return false
}

function show(){
  var todos = getTodos()
    , html = "<ul>"

    for (var i = 0; i<todos.length; i++) {
      html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">Effacer</button></li>'
    }
    html += "<ul>"

document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove')

for (var i = 0; i<buttons.length; i++){
  buttons[i].addEventListener("click", remove)
  };
}

document.getElementById('add').addEventListener("click", add);
show()
