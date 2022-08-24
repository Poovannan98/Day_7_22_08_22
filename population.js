const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();

countries.responseType = "json";
countries.onload = function Population(){
    const popu = countries.response;
    const pop = popu
        .filter((p) => p.population < 2_00_000)
        // .map((p) => p.population)
        .map((n) => n.name.common);

    console.log(pop);
}
