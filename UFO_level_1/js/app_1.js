// from data.js grab table body
const tableData = data;
const tbody = d3.select("tbody");

function buildTable(data) 
{
  // First, clear out any existing data
  tbody.html("");

  // loop each data and append
  data.forEach((dataRow) => 
  {
    const row = tbody.append("tr");

    // Loop each add td
    Object.values(dataRow).forEach((val) => 
    {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) 
  {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // build table 
  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// Build table 
buildTable(tableData);
