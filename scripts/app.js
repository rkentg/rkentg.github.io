var axs = document.getElementById("axsprice");
var slp = document.getElementById("slpprice");
var gods = document.getElementById("godsprice");
var sand = document.getElementById("sandprice");
var ilv = document.getElementById("ilvprice");
var pgx = document.getElementById("pgxprice");
var vis = document.getElementById("visprice");



var liveprice = {
  async: true,
  scoosdomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=crodex%2Cshping%2Cstratos%2Coctofi%2Cilluvium%2Casd%2Cvigorus&vs_currencies=usd",

  method: "GET",
  headers: {},
  
};



$.ajax(liveprice).done(function (a) {
  axs.innerHTML = a.crodex.usd
  slp.innerHTML =a.shping.usd;
  gods.innerHTML =a.stratos.usd;
  sand.innerHTML =a.octofi.usd;
  ilv.innerHTML =a.illuvium.usd;
  pgx.innerHTML =a.asd.usd;
  vis.innerHTML =a.vigorus.usd;
  
});


