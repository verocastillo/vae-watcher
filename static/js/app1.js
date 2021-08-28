// Function to build the page
function buildPage() {

// Get data from API
const url = "/api";
d3.json(url).then(function(response) {
  const data = response;
  // Get top 10
  d3.select("#p1").each(function(d, i) {
    d3.select(this).text("From 362,670,106 COVID vaccines applied, only 24417 VAEs were reported");
  });
  d3.select("#p2").each(function(d, i) {
    var symptom1 = data.SYMPTOM1
    mode = d3.mode(symptom1)
    d3.select(this).text("The most common symptoms are headache, chills and swelling in injection site, which are not severe");
  });
  d3.select("#p3").each(function(d, i) {
    d3.select(this).text("Younger women reported more side effects, while, in contrast, older men did.");
  });
});
}

buildPage();