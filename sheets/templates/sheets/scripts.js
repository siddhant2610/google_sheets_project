// const addRowBtn = document.getElementById('addRow');
// const boldBtn = document.getElementById('bold');
// const italicBtn = document.getElementById('italic');
// const cellColorInput = document.getElementById('cellColor');
// const tableBody = document.querySelector('tbody');

// // Add Row functionality
// addRowBtn.addEventListener('click', () => {
//     const newRow = document.createElement('tr');
//     for (let i = 0; i < 6; i++) { 
//         const cell = document.createElement('td');
//         newRow.appendChild(cell);
//     }
//     tableBody.appendChild(newRow);
// });

// // Cell Selection
// let selectedCells = [];

// document.addEventListener('click', (event) => {
//     if (event.target.tagName === 'TD') {
//         // Toggle selection
//         if (selectedCells.includes(event.target)) {
//             event.target.classList.remove('selected');
//             selectedCells = selectedCells.filter(cell => cell !== event.target);
//         } else {
//             event.target.classList.add('selected');
//             selectedCells.push(event.target);
//         }
//     }
// });

// // Bold functionality
// boldBtn.addEventListener('click', () => {
//     selectedCells.forEach(cell => {
//         cell.style.fontWeight = 'bold';
//     });
// });

// // Italic functionality
// italicBtn.addEventListener('click', () => {
//     selectedCells.forEach(cell => {
//         cell.style.fontStyle = 'italic';
//     });
// });

// // Cell color functionality
// cellColorInput.addEventListener('change', () => {
//     selectedCells.forEach(cell => {
//         cell.style.backgroundColor = cellColorInput.value;
//     });
// });

// // Content Editing (Basic)
// tableBody.addEventListener('click', (event) => {
//     if (event.target.tagName === 'TD') {
//         const input = document.createElement('input');
//         input.value = event.target.textContent;
//         event.target.innerHTML = '';
//         event.target.appendChild(input);

//         input.addEventListener('blur', () => {
//             event.target.textContent = input.value;
//         });
//     }
// });

// let rowCount = 0;

// function addRow() {
//     const sheet = document.getElementById('sheet');
//     const row = document.createElement('div');
//     row.className = 'flex';
//     const rowNumber = document.createElement('div');
//     rowNumber.className = 'w-8 h-8 border-r border-b border-gray-300 flex items-center justify-center';
//     rowNumber.textContent = ++rowCount;
//     row.appendChild(rowNumber);
//     for (let i = 0; i < 6; i++) {
//         const cell = document.createElement('input');
//         cell.className = 'cell';
//         cell.type = 'text';
//         cell.addEventListener('keydown', handleKeyNavigation);
//         cell.addEventListener('click', handleCellSelection);
//         const resizer = document.createElement('div');
//         resizer.className = 'resizer';
//         cell.appendChild(resizer);
//         row.appendChild(cell);
//     }
//     sheet.appendChild(row);
// }

// function addRows() {
//     const rowCountInput = document.getElementById('rowCountInput').value;
//     const rowsToAdd = parseInt(rowCountInput, 10);
//     for (let i = 0; i < rowsToAdd; i++) {
//         addRow();
//     }
// }

// function calculate(operation) {
//     let values = [];
//     selectedCells.forEach(cell => {
//         const value = parseFloat(cell.value);
//         if (!isNaN(value)) {
//             values.push(value);
//         }
//     });

//     let result;
//     switch (operation) {
//         case 'SUM':
//             result = values.reduce((a, b) => a + b, 0);
//             break;
//         case 'AVERAGE':
//             result = values.reduce((a, b) => a + b, 0) / values.length;
//             break;
//         case 'MAX':
//             result = Math.max(...values);
//             break;
//         case 'MIN':
//             result = Math.min(...values);
//             break;
//         case 'COUNT':
//             result = values.length;
//             break;
//     }

//     alert(`${operation}: ${result}`);
// }

// function initResizers() {
//     const resizers = document.querySelectorAll('.resizer');
//     let currentResizer;

//     for (let resizer of resizers) {
//         resizer.addEventListener('mousedown', function (e) {
//             currentResizer = e.target;
//             document.addEventListener('mousemove', resize);
//             document.addEventListener('mouseup', stopResize);
//         });
//     }

//     function resize(e) {
//         const cell = currentResizer.parentElement;
//         cell.style.width = e.pageX - cell.getBoundingClientRect().left + 'px';
//     }

//     function stopResize() {
//         document.removeEventListener('mousemove', resize);
//         document.removeEventListener('mouseup', stopResize);
//     }
// }

// function handleKeyNavigation(e) {
//     const cell = e.target;
//     const row = cell.parentElement;
//     const sheet = row.parentElement;
//     const cellIndex = Array.from(row.children).indexOf(cell);
//     const rowIndex = Array.from(sheet.children).indexOf(row);

//     switch (e.key) {
//         case 'ArrowRight':
//             if (cellIndex < row.children.length - 1) {
//                 row.children[cellIndex + 1].focus();
//             }
//             break;
//         case 'ArrowLeft':
//             if (cellIndex > 1) {
//                 row.children[cellIndex - 1].focus();
//             }
//             break;
//         case 'ArrowDown':
//             if (rowIndex < sheet.children.length - 1) {
//                 sheet.children[rowIndex + 1].children[cellIndex].focus();
//             }
//             break;
//         case 'ArrowUp':
//             if (rowIndex > 0) {
//                 sheet.children[rowIndex - 1].children[cellIndex].focus();
//             }
//             break;
//         case 'Shift':
//             handleCellSelection(e);
//             break;
//     }
// }

// function handleCellSelection(e) {
//     const cell = e.target;
//     if (e.shiftKey) {
//         cell.classList.toggle('selected');
//         if (cell.classList.contains('selected')) {
//             selectedCells.push(cell);
//         } else {
//             selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell);
//         }
//     } else {
//         selectedCells.forEach(selectedCell => selectedCell.classList.remove('selected'));
//         selectedCells = [cell];
//         cell.classList.add('selected');
//     }
// }

// // Add initial rows
// for (let i = 0; i < 10; i++) {
//     addRow();
// }

// // Initialize resizers
// window.onload = initResizers;