// MOTIVATION
/*
This assignment aims to simulate the use case where there is data in a database that we want to view, modify, and then update through a UI. I am not as interested in how it looks, more that it functions correctly (though if you do have time, feel free to apply some css). The variable serverData serves as the simulated data that is returned from a web service call. Each piece of data represents a particular Year/Month combination and gives the value associated with it.
*/

// Assume that the following data came back from a web service call...
var serverData = [
  { Year: 2012, Month: 1, Value: 0.5 },
  { Year: 2012, Month: 2, Value: 0.5 },
  { Year: 2012, Month: 3, Value: 0.75 },
  { Year: 2012, Month: 4, Value: 0.75 },
  { Year: 2012, Month: 5, Value: 0.5 },
  { Year: 2012, Month: 6, Value: 0.5 },
  { Year: 2012, Month: 7, Value: 0.75 },
  { Year: 2012, Month: 8, Value: 0.75 },
  { Year: 2012, Month: 9, Value: 0.5 },
  { Year: 2012, Month: 10, Value: 0.5 },
  { Year: 2012, Month: 11, Value: 0.75 },
  { Year: 2012, Month: 12, Value: 0.75 },

  { Year: 2013, Month: 1, Value: 0.5 },
  { Year: 2013, Month: 2, Value: 0.5 },
  { Year: 2013, Month: 3, Value: 0.75 },
  { Year: 2013, Month: 4, Value: 0.75 },
  { Year: 2013, Month: 5, Value: 0.5 },
  { Year: 2013, Month: 6, Value: 0.5 },
  { Year: 2013, Month: 7, Value: 0.75 },
  { Year: 2013, Month: 8, Value: 0.75 },
  { Year: 2013, Month: 9, Value: 0.5 },
  { Year: 2013, Month: 10, Value: 0.5 },
  { Year: 2013, Month: 11, Value: 0.75 },
  { Year: 2013, Month: 12, Value: 0.75 },

  { Year: 2014, Month: 1, Value: 0.85 }
];

$(document).ready(function() {
  displayHTML =
    "<table class='table'><tr><th>Year</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th><th>Total</th></tr>";

  var year = 0;
  var month = 0;
  var total = 0;
  var thisRow = "";
  var thisValue = 0;
  var thisId = 0;
  for (i = 0; i < serverData.length; i++) {
    if (year == 0) {
      thisRow += "<tr>";
      //  window.alert();
      year = serverData[i].Year;
      month = serverData[i].Month;
      thisValue = serverData[i].Value;
      thisId = year + "-" + month;
      thisRow += "<td>" + year + "</td>";
      thisRow +=
        "<td><input class='textBox' id='" +
        thisId +
        "' value='" +
        thisValue +
        "' ";
      thisRow += "onChange='UpdateTotal(\"" + year + "\");' />" + "</td>";
      $("#yearsPresent").val($("#yearsPresent").val() + year);
      total += thisValue;
    } else {
      month = serverData[i].Month;
      thisValue = serverData[i].Value;
      thisId = year + "-" + month;
      thisRow +=
        "<td><input class='textBox' id='" +
        thisId +
        "' value='" +
        thisValue +
        "' ";
      thisRow += "onChange='UpdateTotal(\"" + year + "\");' />" + "</td>";
      total += thisValue;
    }

    if (month == 12) {
      thisRow +=
        "<td><div id='total" + year + "'>" + total + "</div></td></tr>";
      displayHTML += thisRow;
      $("#yearsPresent").val($("#yearsPresent").val() + ",");
      total = 0;
      year = 0;
      thisRow = "";
    }
    if (i == serverData.length - 1) {
      var m = month + 1;
      for (j = m; j < 13; j++) {
        thisId = year + "-" + j;
        thisRow += "<td><input class='textBox' id='" + thisId + "' value='0' ";
        thisRow += "onChange='UpdateTotal(\"" + year + "\");' />" + "</td>";
      }
      thisRow +=
        "<td><div id='total" + year + "'>" + total + "</div></td></tr>";
      displayHTML += thisRow;
    }
  }

  displayHTML += "</table>";
  $("#dataTable").html(displayHTML);
});

function UpdateTotal(year) {
  var total = 0;
  for (i = 1; i < 13; i++) {
    total += parseFloat($("#" + year + "-" + i).val());
  }
  //  window.alert($("#total"+year).html());
  $("#total" + year).html(total);
}

function saveChanges() {
  //window.alert( $("#yearsPresent").val());
  var saveData = [];
  var arrayDisplay = "";
  var years = $("#yearsPresent")
    .val()
    .split(",");

  for (i = 0; i < years.length; i++) {
    for (j = 1; j < 13; j++) {
      thisYear = years[i];
      var arrayElement = "{Year:" + thisYear + ",";

      arrayElement += "Month:" + j + ",";

      arrayElement += "Value:" + $("#" + thisYear + "-" + j).val() + "}";
      //text version of aray for display purposes
      arrayDisplay += arrayElement + "<br />";
      //actual array to return
      saveData.push(arrayElement);
    }
  }
  $("#savedData").html(arrayDisplay);
}
// TODO: Create a viewmodel for the UI
/* 
1. What the UI should show 
Create a display that shows a grid, where each row in the grid collects all of the data for a given year and displays the values for each month in that year. Each month should show the value returned from the server, and all values (Year and Values) should be able to be edited. Don't worry about validation.
Fill months that didn't come back with 0 values.
Create a computed observable for each row to display the Total value for all months in that row. The Total should update in response to any value changes in the row.
Example:
YEAR | JAN | FEB | MAR |...| DEC | Total
2012 | 0   |  .5 | 0   |...| .75 | X
2013 | 0   |  .5 | 0   |...| .75 | Y
...
*/

// TODO: Create some functionality
/*
2. What the UI should do
NOTE: jquery and bootstrap are both available in this fiddle, if you want to use them.
Create a way where users can add a row, and update any of the Year or Month values. Default values for all months should be .08.
Default Year can be hard coded to this year.
Create a way for users to delete existing rows.

Create a way for the current data shown in the UI to be saved to the database. It must provide data in the same format as serverData. This could be a save button with a click handler that returns an array of objects similar to serverData, but representing the current data in the UI.
*/
var vm = {
  // TODO: create a view model for the rows to expose it to the ui
  serverData: ko.observable(serverData)
};

ko.applyBindings(vm);
