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

var btn = document.querySelector("#generate");
btn.addEventListener("click", (e) => {
  generateTable();
  var head2 = document.querySelector("#tabelka6");
  var deletedNode = head2.childNodes[1];
  head2.removeChild(deletedNode);
  var plainText = document.querySelectorAll("#tabelka6")[0];
  console.log(plainText.outerHTML);
  var output = document.querySelector("#output");
  output.innerText = plainText.outerHTML;
});
function submit() {
  document.querySelector("#list").innerHTML = "";
  var guestName = document.getElementById("text");
  var listData = guestName.value.split("\n");

  var listContainer = document.getElementById("list"),
    listElement = document.createElement("ul");
  listContainer.appendChild(listElement);
  var numberOfListItems = listData.length;
  var listItem;
  for (var i = 0; i < numberOfListItems; ++i) {
    listItem = document.createElement("li");
    listItem.innerHTML = listData[i];
    listElement.appendChild(listItem);
  }
  let htmlList = document.querySelector("#list");
  console.log(htmlList.innerHTML);
  const htmlOutput = document.querySelector("#listHtml");
  htmlOutput.innerText = htmlList.innerHTML;
}

const clickAndCopy = (val, area) => {
  document.querySelector(val).addEventListener("click", function (event) {
    var copyTextarea = document.querySelector(area);
    copyTextarea.focus();
    copyTextarea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  });
};

clickAndCopy("#copy", "#listHtml");
clickAndCopy("#copyAgain", "#output");
