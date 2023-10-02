

let cardNum = document.querySelector('.cardNum')
let cardName = document.querySelector('.cardName')
let cardDate = document.querySelector('.cardDate')
let cardDate2 = document.querySelector('.cardDate2')
let cardCvc = document.querySelector('.cardCvc')
let cardHolderInput = document.querySelector('.cardHolderInput')
let cardNumberInput = document.querySelector('.cardNumberInput')
let expMonth = document.querySelector('.expMonth')
let expYear = document.querySelector('.expYear')
let cvcInput = document.querySelector('.cvcInput')
let submit = document.querySelector(".submitForm")
let message = document.querySelector('.compelete')
let gridcontainer = document.querySelector('.grid-container')
let errormessage = document.querySelector('.error_message')
let errornumb = document.querySelector('.errornumb')
let errorexp = document.querySelector('.errorexp')
let erroryear = document.querySelector('.erroryear')
let errorcvc = document.querySelector('.errorcvc')


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!cardHolderInput.value) {
        errormessage.style.display = "block"

    } else {
        errormessage.style.display = "none"

    }
    if (!cardNumberInput.value) {
        errornumb.style.display = "block"
    } else {
        errornumb.style.display = "none"

    }
    if (!expMonth.value) {
        errorexp.style.display = "block"
    } else {
        errorexp.style.display = "none"

    }
    if (!expYear.value) {
        erroryear.style.display = "block"
    } else {
        erroryear.style.display = "none"

    }
    if (!cvcInput.value) {
        errorcvc.style.display = "block"
    } else {
        errorcvc.style.display = "none"
        gridcontainer.style.display = "none"
        message.style.display = "block"
    }

})

cardHolderInput.addEventListener("input", (e) => {
    if (e.target.value / 1 != e.target.value) {
        cardName.textContent = e.target.value
    }
})
cardNumberInput.addEventListener("input", (e) => {
    if (e.target.value / 1 == e.target.value) {
        cardNum.textContent = e.target.value
    }

});


expMonth.addEventListener("input", (e) => {
    if (e.target.value / 1 == e.target.value)
        cardDate.textContent = e.target.value

});
expYear.addEventListener("input", (e) => {
    if (e.target.value / 1 == e.target.value)
        cardDate2.textContent = e.target.value

});
cvcInput.addEventListener("input", (e) => {
    if (e.target.value / 1 == e.target.value)
        cardCvc.textContent = e.target.value

});




