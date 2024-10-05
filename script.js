
const APIKEY = '86e93292aed2baf3e083ca2394ddff6a';

// Appel a l'API open weather avec ville en parametre de function
let apicall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url)
.then((response) =>  
    response.json().then((data) => {
        console.log(data)
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°C';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-water'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
    })
)
.catch(err => console.log('Erreur : ' + err));

};
// Ecouteur d'evenement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apicall(ville);

});

apicall('Sénégal');