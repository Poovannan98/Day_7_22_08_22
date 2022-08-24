const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();

countries.responseType = "json";

countries.onload = function ForEach(){
    const fore = countries.response;
    fore.forEach((fore) => {
        console.log(fore.name.common, fore.capital ,fore.flag )
    });
}
