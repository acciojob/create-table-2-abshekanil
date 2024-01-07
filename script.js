function createTable() {
    //Write your code here
	let rowCount = prompt("Input number of rows");

	let colCount = prompt("Input number of columns");

	let table = document.getElementById('myTable');

	table.innerHTML = "";

	for(let i = 0; i<rowCount; i++)
		{
			let row = table.insertRow(i);

			for(let j=0; j<colCount; j++)
				{
					let cells = row.insertCell(j);

					cells.textContent = "Row-"+ i + " Column-" + j;
				}
		}
  
}
