// from data.js
var tableData = data;

// reference to table body
var tbody = d3.select("tbody");

// bringing in data from data.js into index.html
tableData.forEach(etSitings => {
    var row = tbody.append("tr");
    Object.entries(etSitings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

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

  // Filter data based on input
  var filteredData = tableData.filter(etSitings.datetime === inputValue)

  // remove any children from the table
  tbody.html("")

  // Update table data with data matching date input
  filteredData.forEach(etSitings => {
    var row = tbody.append("tr");
    Object.entries(etSitings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};