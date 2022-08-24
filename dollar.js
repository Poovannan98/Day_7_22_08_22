const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/currency/dollar");
countries.send();

countries.responseType = "json";

countries.onload = function USDollar(){
    const us = countries.response;
  const usdollar = us
  .filter((n) => n.currencies.USD)
  .map((n) => n.name.common);
    console.log(usdollar);
}
