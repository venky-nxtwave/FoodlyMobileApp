let decreamentButton = document.getElementById("decreamentButton");
let increamentButton = document.getElementById("increamentButton");
let quantity = document.getElementById("quantity");
let priceRate = document.getElementById("priceRate");
let toPay = document.getElementById("toPay");
let finalPrice = document.getElementById("finalPrice");
let tip20 = document.getElementById("tip20")



let quantityValue = parseFloat(quantity.textContent)
let priceValue = parseFloat(priceRate.textContent)
let toPayValue = parseFloat(toPay.textContent)
let finalValue = parseFloat(finalPrice.textContent)
let tip20Value = parseFloat(tip20.textContent)


function decreamentValue() {
    if (quantityValue > 1) {
        quantityValue = quantityValue - 1;
        quantity.textContent = quantityValue
    } else {
        quantityValue = 1;
    }
    priceRate.textContent = priceValue * quantityValue
    toPay.textContent = toPayValue * quantityValue;
    finalPrice.textContent = priceValue * quantityValue;
}

function increamentValue() {
    quantityValue = quantityValue + 1
    quantity.textContent = quantityValue;
    priceRate.textContent = priceValue * quantityValue
    toPay.textContent = (toPayValue * quantityValue);
    finalPrice.textContent = (finalValue * quantityValue);
}

function provideTip() {
    toPayValue = (toPayValue + tip20Value)
    finalValue = (finalValue + tip20Value)
    console.log(toPayValue)
    console.log(finalValue)
}

decreamentButton.onclick = function() {
    decreamentValue()
};

increamentButton.onclick = function() {
    increamentValue();
};
tip20.onclick = function() {
    provideTip();
}


let scetionMenu = document.getElementById("sectionMenu")
let loginPage = document.getElementById("loginPage")
let loginInput = document.getElementById("loginInput")
let loginError = document.getElementById("loginError")
let passwordInput = document.getElementById("passwordInput")
let passwordError = document.getElementById("passwordError")
let signInbutton = document.getElementById("signInbutton")


loginPage.addEventListener("submit", function(event) {
    event.preventDefault()
    if (loginInput.value === "" && passwordInput.value === "") {
        loginError.textContent = "Required*"
        passwordError.textContent = "Required*"
    } else {
        loginError.textContent = ""
        passwordError.textContent = ""
    }

})
loginInput.addEventListener("blur", function(event) {
    if (loginInput.value === "") {
        loginError.textContent = "Enter your email*"
    } else {
        loginError.textContent = ""
    }
})
passwordInput.addEventListener("blur", function(event) {
    if (passwordInput.value.match(/[0-9]/) && passwordInput.value.match(/[A-Z]/) && passwordInput.value.match(/[@\#\!\$\^\&\*\~\%\(\)\.\+]/) && passwordInput.value.length >= 8) {
        console.log(true)
    } else {
        passwordError.textContent = "password Ex: Daarla1704*"
        console.log(false)
    }
})