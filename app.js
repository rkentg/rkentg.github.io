var btc = document.getElementById("bitcoin")
var liveprice= {
    "async": true,
    "scoosdomain": true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response){
    btc.innerHTML =response.bitcoin.usd;
})