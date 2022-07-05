const locationFormHandler = async function (event) {
  event.preventDefault();

  const searchBar = document.querySelector('#field1').value.trim();

  document.location.replace(`/api/location/:${searchBar}`);
};

document.querySelector('#loc-search').addEventListener('submit', locationFormHandler);