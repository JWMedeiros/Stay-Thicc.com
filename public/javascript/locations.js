const allLocation = document.querySelector('#allLoc');
const myLoc = document.querySelector('#myLoc');

async function allLocations(){
  location.replace('/');
}

const locationFormHandler = async function (event) {
  event.preventDefault();

  const searchBar = document.querySelector('field1').value.trim();
  //Search DB for a name or city that matches the search bar results,
  //If city -> post to /city

  location.replace(`/location/${searchBar}`);
};

document.querySelector('#loc-search').addEventListener('submit', locationFormHandler);
allLocation.addEventListener('click',allLocations());
myLoc.addEventListener('click',myLocation());