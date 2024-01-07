function createTable() {
    //Write your code here
	var rowCount = prompt("Input number of rows");

	var colCount = prompt("Input number of columns");

	var table = document.getElementById('myTable');

	table.innerHTML = "";

	for(var i = 0; i<rowCount; i++)
		{
			var row = table.insertRow(i);

			for(var j=0; j<colCount; j++)
				{
					var cells = row.insertCell(j);

					cell.textContent = "Row-"+ i + " Column-" + j;
				}
		}
  
}
