// Select color input
// Select size input
const btn = document.getElementById('sizePicker');
btn.addEventListener('submit', makeGrid);
// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    const column = document.getElementById('inputWidth').value;
    const row = document.getElementById('inputHeight').value;
    const table = document.getElementById('pixelCanvas');
    table.innerHTML = ''; 
    let tableBody = '';
    for (let i = 0; i < row; i++) {
        tableBody += '<tr>';
        for (let j = 0; j < column; j++) {
            tableBody += '<td></td>';
        }
        tableBody += '</tr>';
    }
    table.innerHTML = tableBody;
    const color = document.getElementById('colorPicker');
const tds = document.querySelectorAll('td');
tds.forEach(function(element){
    element.addEventListener('click',function(){
        element.style.backgroundColor = color.value;
    })
});
  };