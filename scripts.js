const convertButton = document.querySelector(".convert-button")
const CurrencySelect = document.querySelector(".currency-select")
function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const euroToday = 6.20
    const bitcoinToday = 598188.69
    const libraToday = 7.55
    const ethereumToday = 14282.44
    const yuanToday = 1.28
    console.log(CurrencySelect.value)

    if (CurrencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (CurrencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (CurrencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (CurrencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (CurrencySelect.value == "ethereum") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "ETH"
        }).format(inputCurrencyValue / ethereumToday)
    }

    if (CurrencySelect.value == "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-Hant", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)
    }





    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    console.log(convertedValues)

}

function ChangeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    if (CurrencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (CurrencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (CurrencySelect.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if (CurrencySelect.value == "yuan") {
        currencyName.innerHTML = "¥ Yuan "
        currencyImg.src = "./assets/yuan.png"
    }

    if (CurrencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra "
        currencyImg.src = "./assets/libra 1.png"
    }

    if (CurrencySelect.value == "ethereum") {
        currencyName.innerHTML = "ETH Ethereum "
        currencyImg.src = "./assets/ethereum.png"
    }



    convertvalues()

}


CurrencySelect.addEventListener("change", ChangeCurrency)
convertButton.addEventListener("click", convertvalues)

