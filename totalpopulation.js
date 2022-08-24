const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();

countries.responseType = "json";

countries.onload = function TotalPopulation(){
    const totpop = countries.response;
    const totalpop = totpop
        .map((p) => p.population)
        .reduce((a,b) => a+b);
    console.log(totalpop);
}
