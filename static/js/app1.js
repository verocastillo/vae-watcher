// Import JSON file
fetch("https://vae-project.herokuapp.com/api")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

console.log(data.top10symptoms)