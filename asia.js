const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();

countries.responseType = "json";

countries.onload = function AsianCountries(){
    const asiaCountries = countries.response;
    const Names = asiaCountries
         .filter((n) => n.region === "Asia")
         .map((n) => n.name.common);
    
    console.log(Names);
}
