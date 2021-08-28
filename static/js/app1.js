// Import JSON file
fetch("data.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
