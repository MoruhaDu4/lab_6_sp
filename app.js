document.getElementById('calc').addEventListener('click', function() {

    const x1 = parseFloat(document.getElementById('x1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    

    const result = x1 * x2;
    document.getElementById('result').value = result;

    let maxVal, maxValName;
    if (x1 > x2) {
        maxVal = x1;
        maxValName = 'X1';
    } else if (x2 > x1) {
        maxVal = x2;
        maxValName = 'X2';
    } else {
        maxVal = x1; 
        maxValName = 'обидва значення рівні';
    }
   
    alert(`Найбільше значення: ${maxValName} = ${maxVal}`);
});

document.getElementById('reset').addEventListener('click', function() {

    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('result').value = '';
});