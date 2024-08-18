function traingleCalculation(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    

    // height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    
    

// area
const area = 0.5* base * height;
outputResult =  document.getElementById('output');
outputResult.innerText = area;

}