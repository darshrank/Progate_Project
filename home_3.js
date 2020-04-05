function addRow(tableID) {
    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    rowCount++;
    let colCount = table.rows[0].cells.length;

    for(var i=0; i<colCount; i++) {

        var newcell	= row.insertCell(i);

        newcell.innerHTML = table.rows[1].cells[i].innerHTML;

    }
}

function deleteRow(tableID) {
    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    if(rowCount>2){
        rowCount--;
        table.deleteRow(rowCount);
    }
}
