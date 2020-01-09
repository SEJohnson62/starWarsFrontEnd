swAPIwrapper = 'https://star-cors.herokuapp.com/'
swAPI  = 'https://swapi.co/'

const endpoints = ['people','films','vehicles','starships'];
const urls = endpoints.map( endpoint => {
  return `${swAPIwrapper}${endpoint}`;
});
console.log(urls);
let people = [{}];
let films = [{}];
let vehicles = [{}];
let starships = [{}];

const renderNames = (objectArr, divId) => {
  const div = document.querySelector(`${divId}`);
  let html = '';
  console.log(objectArr);
  for( i = 0; i < objectArr.length; i++ ) {
      html = `${html}
      <li>
      ${objectArr[i].name}
      </li>
      `;
  }
  div.innerHTML = html;
}
const renderTitles = (objectArr, divId) => {
  const div = document.querySelector(`${divId}`);
  let html = '';
  console.log(objectArr);
  for( i = 0; i < objectArr.length; i++ ) {
      html = `${html}
      <li>
      ${objectArr[i].title}
      </li>
      `;
  }
  div.innerHTML = html;
}
const loadData = async() => {
  const peopleList = axios.get(`${urls[0]}`);
  const filmsList = axios.get(`${urls[1]}`);
  const vehiclesList = axios.get(`${urls[2]}`);
  const starshipsList = axios.get(`${urls[3]}`);

  const allResults = await Promise.all([peopleList, filmsList, vehiclesList, starshipsList]);

  console.log(allResults);

  people = allResults[0].data.results;
  films = allResults[1].data.results;
  vehicles = allResults[2].data.results;
  starships = allResults[3].data.results;
  displayData();
}

loadData();

function displayData() {
  renderNames(people,'#people');
  renderTitles(films, '#films');
  renderNames(vehicles, '#vehicles');
  renderNames(starships, '#starships');
}



