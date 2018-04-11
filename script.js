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
    document.getElementById("output").innerHTML = "length is " + msg
}

document.getElementById('btn').onclick = function(event){
  print(document.getElementById('str').value.length)
}
