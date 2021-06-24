// @TODO: YOUR CODE HERE!
// Chart Params
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 100 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
//Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Inital Params
var chosenXAxis = "Name";

//function used for updating x-scale var upon click on axis label
function xScale(Name,chosenXAxis) {
 //create scales
  var xLinearScale = d3.scaleLinear()
    .domain([D3.min(Name, d=> d[chosenXAxis]) * 0.8,
    d3.max(Name, d=> [chosenXaxis]) * 1.2
    ])
    range([0,width])
  return xLinearScale
}


var parsetime = d3.timeParse("%B")

//Import Data from an external CSV file 
d3.csv("/data/longitudinal.csv").then(function(education) {
  //console.log(Data);
  //console.log([Data]);

  //Step 1. Parse Data/Cast as members (age/obesity)
  education.forEach(function(data) {
    data.age = +data.age;
    data.obesity = +data.obesity;
  });

  //Step.2 Create Scale Functions
  var xLinearScale = d3.scaleLinear()
    .domain([30, d3.max(weightData, d => d.age)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([18, d3.max(weightData, d => d.obesity)])
    .range([height, 0]);

  // Step 3: Create axis functions

  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 4: Append Axes to the chart
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

  // Step 5: Create Circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(weightData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.age))
    .attr("cy", d => yLinearScale(d.obesity))
    .attr("r", "10")
    .attr("fill", "blue")
    .attr("opacity", ".9")
    // .attr("class", "stateText")
    // .attr("class", "stateCircle")
  
  var textgroup = chartGroup.selectAll("text.abbrtext")
    .data(weightData)
    .enter()
    .append("text")
    .attr("class", "abbrtext")
    .attr("x", d => xLinearScale(d["age"]))
    .attr("y", d => yLinearScale(d["obesity"]))
    .attr("text-anchor", "middle")
    .attr("font-size", "8px")
    .attr("font-width", "bold")
    .attr("fill", "grey")
    .text(d => d.abbr)


  // Step 6: Initialize tool tip   
  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function (d) {
      return (`${d.state}<br>Age: ${d.age}<br>Weight: ${d.obesity}`);
    });

  // Step 7: Create tooltip in the chart
  chartGroup.call(toolTip);

  // Step 8: Create event listeners to display and hide the tooltip
  circlesGroup.on("click", function (data) {
    toolTip.show(data, this);
  })

    // onmouseout event
    .on("mouseout", function (data, index) {
      toolTip.hide(data);
    });

  // Create axes labels
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 40)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Weight");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .text("Age");
}).catch(function (error) {
  //console.log(error);
});