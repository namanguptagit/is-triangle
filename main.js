const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-treiangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputE1.innerText = "Yay, The angles form a Triangle";
    } else {
        outputE1.innerText = "OH NO !, The angles do not form a Triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);