const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  const cariNama=(nama, limit, callback)=> {
    const results = names.filter(name => name.toLowerCase().includes(nama.toLowerCase()));
    const limitedResults = results.slice(0, limit);
    callback(limitedResults);
}

const hasil=(results)=> {
    console.log(results);
  }
  
  cariNama("am", 3, hasil);
  