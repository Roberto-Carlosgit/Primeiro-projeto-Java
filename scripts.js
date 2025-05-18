const convertButton = document.querySelector(".convert-button")
function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
const dolarToday= 5.20
    
const convertedvalues=  inputCurrencyValue / dolarToday
 console.log(convertedvalues)
}

convertButton.addEventListener("click", convertvalues) 