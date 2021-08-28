// Function to build the page
function buildPage() {

// Function for unique values (https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates)
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// Get data from API
const url = "/api";
d3.json(url).then(function(response) {
  const data = response;

  // Get data to use
  const as_all = data.agesymptoms-all;
  const as_pfz = data.agesymptoms-pfizer;
  const as_mod = data.agesymptoms-moderna;
  const top10 = data.top10symptoms;
  const totvax = data.totalvaccines;

  // Get top 10
  document.getElementById("card-text3").innerHTML = "New text!"

});
}


buildPage();