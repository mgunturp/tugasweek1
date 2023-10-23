const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(query, limit, callback) {
    const results = names.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    const limitedResults = results.slice(0, limit);
    callback(limitedResults);
}

function displayResults(results) {
    console.log(results);
  }
  
  searchName("ca", 3, displayResults);
  