const convertButton = document.querySelector(".convert-button")
const CurrencySelect =document.querySelector(".currency-select")
function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const EuroToday = 6.20
console.log (CurrencySelect.value)

if(CurrencySelect.value == "dolar"){
 currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(CurrencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
}).format(inputCurrencyValue/EuroToday)
}




    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   

    console.log(convertedValues)

}

function ChangeCurrency(){

const currencyName= document.getElementById("currency-name")
const currencyImg= document.querySelector(".currency-img")
if(CurrencySelect.value  == "dolar"){
currencyName.innerHTML = "Dólar Americano"
currencyImg.src ="./assets/estados-unidos (1) 1.png"
}

if(CurrencySelect.value == "euro"){
currencyName.innerHTML="Euro"
currencyImg.src ="./assets/euro.png"
}

convertvalues()

}


CurrencySelect.addEventListener("change",ChangeCurrency)
convertButton.addEventListener("click", convertvalues) 

