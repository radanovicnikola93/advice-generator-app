const idNumber = document.querySelector('.advice--id--number');
const quoteText = document.querySelector('.advice--quote--text');
const diceButton = document.querySelector('.advice--dice');
const url = "https://api.adviceslip.com/advice";

function getAdvices() { 
    fetch(url)
    .then((response) => {
        // handle the response
        return response.json();
    })
    .then((data) => {
        let advices = data;
        idNumber.textContent = advices.slip.id; // add new id to idNumber
        quoteText.textContent = advices.slip.advice; // add new advice to diceButton
    })
    .catch(function (error) {
        // handle the error
        console.log(error);
    });
}

diceButton.addEventListener('click', getAdvices); //  new quote on button click
window.onload = getAdvices; // new advice on page load