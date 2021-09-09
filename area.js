const dimensionInput = document.querySelectorAll(".dimension-input");
const areaBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");

function calculateProductOfDimensions(a,b){
    const productOfDimensions = a*b ;
return productOfDimensions;
}

function calculateArea(){
const productOfDimensions = calculateProductOfDimensions(Number(dimensionInput[0].value),Number(dimensionInput[1].value));
const areaOfTriangle = productOfDimensions/2;
outputE1.innerText ="The Area of triangle is : " + areaOfTriangle + "cm²";
}

areaBtn.addEventListener("click",calculateArea);