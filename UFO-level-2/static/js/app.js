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

//Build Tabulator
var table = new Tabulator("#ufo-table", {
  data:tableData,
  // variableHeight,
  columns:[
      {title:"Date", field:"datetime", sorter:"date"},
      {title:"City", field:"city"},
      {title:"State", field:"state"},
      {title:"Country", field:"country"},
      {title:"Shape", field:"shape"},
      {title:"Duration", field:"durationMinutes"},
      {title:"Comments", field:"comments"},
  ],
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

};



//Trigger setFilter function with correct parameters
// function updateFilter(){

//   var filter = $("#filter-field").val() == "function" ? customFilter : $("#filter-field").val();

//   if($("#filter-field").val() == "function" ){
//       $("#filter-type").prop("disabled", true);
//       $("#filter-value").prop("disabled", true);
//   }else{
//       $("#filter-type").prop("disabled", false);
//       $("#filter-value").prop("disabled", false);
//   }

//   table.setFilter(filter, $("#filter-type").val(), $("#filter-value").val());
// }

// //Update filters on value change
// $("#filter-field, #filter-type").change(updateFilter);
// $("#filter-value").keyup(updateFilter);

// //Clear filters on "Clear Filters" button click
// $("#filter-clear").click(function(){
//   $("#filter-field").val("");
//   $("#filter-type").val("=");
//   $("#filter-value").val("");

//   table.clearFilter();
// });