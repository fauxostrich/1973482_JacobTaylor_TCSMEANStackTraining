function insertRecord()
{
    var table = document.getElementById("annualBudget");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = JSON.parse(localStorage.getItem("clientKey"));
    cell2.innerHTML = JSON.parse(localStorage.getItem("productKey"));
    cell3.innerHTML = JSON.parse(localStorage.getItem("budgetKey"));
}