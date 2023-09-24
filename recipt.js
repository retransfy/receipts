let copyButton = document.getElementById("copyButton");
let goBack = document.getElementById("goBack");
document.getElementById("receipt").addEventListener("submit", function (event) {
event.preventDefault();

const textareaValue = document.getElementById("receiptarea").value;
const lines = textareaValue.split("\n");

const sender = lines[0].replace("Sender: ", "");
const receiver = lines[1].replace("Receiver: ", "");
const amountToReceive = lines[2].replace("Amount to receive: ", "");
const amountToSend = lines[3].replace("Amount to Send: ", "");
const fee = lines[4].replace("Fee: ", "");
const totalAmount = lines[5].replace("Total Amount: ", "");
const trxId = lines[6].replace("TRX ID: ", "");

const amountToReceiveInput = parseInt(amountToReceive);
const amountToSendInput = parseInt(amountToSend);
const feeInput = parseInt(fee);
const totalAmountInput = parseInt(totalAmount);

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0"); 
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

const inputTime = document.getElementById("theTime").value;
const timeParts = inputTime.split(":");
let hours = parseInt(timeParts[0]);
const minutes = timeParts[1];
const seconds = timeParts[2];

let ampm = "AM";

if (hours >= 12) {
ampm = "PM";
if (hours > 12) {
hours -= 12;
}
}

const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

const theCurrency = document.getElementById("currency").value;

let receiptText = ``;

if (formattedTime && textareaValue && theCurrency === "FCFA") {

receiptText = `
<p>Transaction successful</p>
<p>Date: ${formattedDate} | ${formattedTime}</p>
<p>Sender: ${sender}</p>
<p>Receiver: ${receiver}</p>
<p>Amount received: ${amountToReceiveInput.toLocaleString("fr-FR")} FCFA</p>
<p>Amount sent: ${amountToSendInput.toFixed(2)} GHS</p>
<p>Fee: ${feeInput.toFixed(2)} GHS</p>
<p>Total Amount: ${totalAmountInput.toFixed(2)} GHS</p>
<p>TRX ID: ${trxId}</p>`;



document.getElementById("receiptOutput").innerHTML = receiptText;
copyButton.style.display = "block";
goBack.style.display = "block";
document.getElementById("receiptarea").style.display = "none";
document.getElementById("create").style.display = "none";
document.getElementById("theTime").style.display = "none";
document.getElementById("currency").style.display = "none";
} 

else if (formattedTime && textareaValue && theCurrency === "GHS") {

receiptText = `
<p>Transaction successful</p>
<p>Date: ${formattedDate} | ${formattedTime}</p>
<p>Sender: ${sender}</p>
<p>Receiver: ${receiver}</p>
<p>Amount received: ${amountToReceiveInput.toFixed(2)} GHS</p>
<p>Amount sent: ${amountToSendInput.toLocaleString("fr-FR")} FCFA</p>
<p>Fee: ${feeInput.toLocaleString("fr-FR")} FCFA</p>
<p>Total Amount: ${totalAmountInput.toLocaleString("fr-FR")} FCFA</p>
<p>TRX ID: ${trxId}</p>`;


document.getElementById("receiptOutput").innerHTML = receiptText;
copyButton.style.display = "block";
goBack.style.display = "block";
document.getElementById("receiptarea").style.display = "none";
document.getElementById("create").style.display = "none";
document.getElementById("theTime").style.display = "none";
document.getElementById("currency").style.display = "none";
}

// Add a click event listener to the "Copy Receipt" button
copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
// Create a textarea element to temporarily hold the text to copy
const textArea = document.createElement("textarea");
textArea.value = receiptText.replace(/<[^>]*>/g, "");

// Append the textarea to the document
document.body.appendChild(textArea);

// Select and copy the text
textArea.select();
document.execCommand("copy");

// Remove the temporary textarea
document.body.removeChild(textArea);
});
});
