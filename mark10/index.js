const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const calculateBtn = document.querySelector("#calculate-btn");
const clearBtn = document.querySelector("#clear-btn");
let notesToDisplay = document.querySelectorAll(".no-of-notes");
let message = document.querySelector("#msg");
let availableNotes = [2000, 500, 100, 20, 10, 5, 1];



clearBtn.addEventListener("click", clear);
calculateBtn.addEventListener("click", validate);

function clear() {
    location.reload();
}

function validate() {
    if (billAmount.value <= 0) {
        showMessage("Please enter a valid bill amount");
    } else {
        let amountToBeReturned = cashGiven.value - billAmount.value;


        if (amountToBeReturned >= 0) {
            calculateNotes(amountToBeReturned);
        } else {
            showMessage("Give more Cash");
        }
    }
}


function calculateNotes(amountToBeReturned) {
    showMessage(`Amount to be returned is ${amountToBeReturned}`);
    for (let i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        notesToDisplay[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}