var axs = document.getElementById("bitprice");
var sandbox = document.getElementById("sandbox");


var liveprice = {
  async: true,
  scoosdomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=the-sandbox%2Cvigorus&vs_currencies=usd",
  method: "GET",
  headers: {},
  
};



$.ajax(liveprice).done(function (a) {
  axs.innerHTML = a.vigorus.usd
});


