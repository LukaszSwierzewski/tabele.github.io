function generateTable() {
  var data = $("#pastein").val();
  var rows = data.split("\n");

  var table = $("<table />").attr("id", "tabelka6");
  var oneRow = rows[0].split("\t");
  var myRow = $("<tr />");
  for (var y in oneRow) {
    myRow.append("<th>" + oneRow[y] + "</th>");
  }
  table.append(myRow);
  for (var y in rows) {
    var cells = rows[y].split("\t");

    var row = $("<tr />");
    for (var x in cells) {
      row.append("<td>" + cells[x] + "</td>");
    }
    table.append(row);
  }

  // Insert into DOM
  $("#excel_table").html(table);
}

$(document).ready(function() {
  $("#pastein").on("paste", function(event) {
    $("#pastein").on("input", function() {
      generateTable();

      $("#pastein").off("input");
      var head2 = document.querySelector("#tabelka6");
      var deletedNode = head2.childNodes[1];
      head2.removeChild(deletedNode);
      var plainText = document.querySelectorAll("#tabelka6")[0];
      console.log(plainText.outerHTML);
      var output = document.querySelector("#output");
      output.innerText = plainText.outerHTML;
    });
  });
});
