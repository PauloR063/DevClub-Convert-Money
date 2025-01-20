const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor do real
    const currencyValued = document.querySelector(".currency-value") // valor das outras moedas

    const dolarToday = 6.03
    const euroToday = 6.19
    const bitcoinToday = 620014
    const libraToday =  7.43

    if (currencySelect.value == "libra") {
        currencyValued.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValued.innerHTML = new Intl.NumberFormat( {
            style: "currency",
            
        }).format(inputCurrencyValue / bitcoinToday)

    }
    
    if (currencySelect.value == "dolar") {
        currencyValued.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") 
        currencyValued.innerHTML = new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency(){
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "BTC - Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
}

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos.png"
}
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
}
if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
}


    

    convertValues()
}
    

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)