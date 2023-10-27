function multiplyNumber() {
    let inputElement = document.getElementById("inputNumber");
    let number = inputElement.value;

    let result = number * 2;

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}
