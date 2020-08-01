// from data.js
var tableData = data;

// reference to table body
var tbody = d3.select("tbody");

// bringing in data from data.js into index.  filteredData.forEach(function(etSitings) {
  tableData.forEach(function(etSitings) {
    var row = tbody.append("tr");
    Object.entries(etSitings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// tableData.forEach(etSitings => {
//     var row = tbody.append("tr");
//     Object.entries(etSitings).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

// Select the button
var button = d3.select("#filter-btn");
  
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create function to run above events
function runEnter() {

  // Prevents page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Create filtering function
  function filterByDate(date) {
  return date.datetime == inputValue;
  }

  // Filter data based on input
  var filteredData = tableData.filter(filterByDate);

  // remove any children from the table
  tbody.html("")

  filteredData.forEach(function(etSitings) {
    var row = tbody.append("tr");
    Object.entries(etSitings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // // Update table data with data matching date input
  // tableData.forEach(etSitings => {
  //   var row = tbody.append("tr");
  //   Object.entries(etSitings).forEach(([key, value]) => {
  //     console.log(key, value);
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
};