var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data)
  console.log(data.filter(filterAsianCountries));
  console.log(data.filter(filterPopulation));

  function callback(name, capital, flag){
    console.log(data.country.name,data.country.capital,data.country.flag);
  };
  data.foreach(callback);

  const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
  console.log('Total population:', totalPopulation);

  const usDollarCountry = data.find(country => country.currencies[0].code === 'USD');
  console.log('Country using US dollars:', usDollarCountry.name);
}


;

todoRequest.open("GET", todosAPi); // GET, POST, PUT, DELETE, PATCH
todoRequest.send();

console.log(todoRequest);

function filterAsianCountries(data = []) {
    return data.country.region=="Asia";
};

function filterPopulation(data = [], population = 0) {
    return data.country.population<200000;
};

