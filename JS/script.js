document.getElementById('cdForm').addEventListener('submit', function(event){
    event.preventDefault(); 
    addCD();
});

function addCD() {
    const authorInput = document.getElementById('author').value;
    const titleInput = document.getElementById('title').value;
    const yearInput = document.getElementById('year').value;

    const tableBody = document.getElementById('cdTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow(tableBody.rows.length);
    const authorCell = newRow.insertCell(0);
    const titleCell = newRow.insertCell(1);
    const yearCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    authorCell.textContent =   authorInput;
    titleCell.textContent =    titleInput;
    yearCell.textContent = yearInput;
    actionCell.innerHTML = '<button onclick="deleteCD(this)">Delete</button>';

    // Clearing input after adding CD
    document.getElementById('author').value ='';
    document.getElementById('title').value ='';
    document.getElementById('year').value ='';

}

function deleteCD(row) {
    const i =row.parentNode.parentNode.rowIndex;
    document.getElementById('cdTable').deleteRow(i);
}