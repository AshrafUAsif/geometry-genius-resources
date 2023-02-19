let serial = 0;

function calculateAndDisplay(shapeId, geometryId, resultId, firstInputId, secondInputId, areaFormula) {
  const geometry = document.getElementById(geometryId).innerText;
  const firstInput = parseFloat(document.getElementById(firstInputId).value);
  const secondInput = parseFloat(document.getElementById(secondInputId).value);
  const result = document.getElementById(resultId);

  // Check if inputs are valid
  if (isNaN(firstInput) || isNaN(secondInput) || firstInput <= 0 || secondInput <= 0) {
  alert('Please enter valid numbers for the inputs.');
  return;
  }

  const area = areaFormula(firstInput, secondInput);
  result.innerText = `Area (A) = ${area.toFixed(2)} cm^2`;

  // Show the data
  serial++;
  displayData(serial, geometry, area);

  // Clear the input fields
  document.getElementById(firstInputId).value = '';
  document.getElementById(secondInputId).value = '';
  result.innerText = '';

  

  // Add event listener for conversion to m^2
  // const convertBtn = document.getElementById(`${shapeId}-convertBtn`);
  // convertBtn.addEventListener('click', function() {
  //   const areaM2 = area / 10000; // convert to m^2
  //   result.innerText = `Area (A) = ${areaM2.toFixed(2)} m^2`;
  // });
}

// Append in the table of Area Calculation
function displayData(serial, geometry, area) {
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometry}</td>
    <td>${area.toFixed(2)} cm<sup>2</sup></td>
    <td><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 convert-btn">Convert to m<sup>2</sup></button></td>
  `;
  container.appendChild(tr);

  
}

