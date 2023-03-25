const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search");

searchBtn.addEventListener("click", function(){
    const countryName = searchInput.value
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(response => response.json())
.then((data )=> displayData(data)

)
.catch((error) => {
    if (countryName.length === 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
        podaci.innerHTML = ""
      } else {
        result.innerHTML = `<h3>Please enter a valid country name</h3>`;
        podaci.innerHTML = ""
      }
})
})


const displayData = (arr) =>{
    const result = document.querySelector("#result");
    const data1 = document.querySelector("#data-container");

arr.forEach(el => {
    console.log(el)
    console.log(el.languages)
    result.innerHTML = `<img src=${el.flags.png}></img>
    <h3>${el.name.common}</h3>`


    data1.innerHTML = `
    <p>Capital:<span>${el.capital}</span></p> 
    <p>Continent: <span>${el.region}</span></p>
    <p>Population:<span>${el.population}</span></p>
    <p>Currency:<span>${el.currencies[Object.keys(el.currencies)].name} </p>
    <p>Common languages: <span>${Object.values(el.languages)}</span></p>
    `
});
}

