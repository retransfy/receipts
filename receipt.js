document.getElementById("logo").addEventListener("dblclick", function(){
window.location.href = "complete.html";
})


document.getElementById("create").addEventListener("click", function () {
let rate = 20.95;
let rate2 = rate - 1;
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;

const Time = document.getElementById("theTime").value;
const currency = document.getElementById("currency").value;
const receiver = document.getElementById ("receiver").value;
const receiveAmount = parseFloat(document.getElementById("amountReceived").value);
const trxId = document.getElementById("trxid").value;

function calculateTransactionFee2() {
let transactionFee2 = 0;
//(GHANA to TOGO)
if (currency === "FCFATG") {
if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 5; }
else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 10; }
else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 15; }
else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 20; }
else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((3000 * 1000) / rate)) { transactionFee2 = 25; }
else if (receiveAmount >= ((3001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 40; }
else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 60; }
else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 80; }
}

//(GHANA to BCB)
else if (currency === "FCFABN" || currency === "FCFACI" || currency === "FCFABF" || currency === "FCFASN") {
if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 10; }
else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 15; }
else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 20; }
else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 25; }
else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((3000 * 1000) / rate)) { transactionFee2 = 40; }
else if (receiveAmount >= ((3001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 50; }
else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 80; }
else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 100; }
}
//(ALL COUNTRIES to GHANA)
else if (currency === "GHS") {
if (receiveAmount < ((rate2 * 1000) / 1000)) { transactionFee2 = 0; }
else if ((receiveAmount >= ((rate2 * 1000) / 1000) && receiveAmount <= ((rate2 * 6000) / 1000))) { transactionFee2 = 500; }
else if ((receiveAmount >= ((rate2 * 6001) / 1000) && receiveAmount <= ((rate2 * 20000) / 1000))) { transactionFee2 = 1000; }
else if ((receiveAmount >= ((rate2 * 20001) / 1000) && receiveAmount <= ((rate2 * 40000) / 1000))) { transactionFee2 = 2000; }
else if ((receiveAmount >= ((rate2 * 40001) / 1000) && receiveAmount <= ((rate2 * 60000) / 1000))) { transactionFee2 = 3000; }
else if ((receiveAmount >= ((rate2 * 60001) / 1000) && receiveAmount <= ((rate2 * 100000) / 1000))) { transactionFee2 = 4000; }
else if ((receiveAmount >= ((rate2 * 100001) / 1000) && receiveAmount <= ((rate2 * 300000) / 1000))) { transactionFee2 = 5000; }
else if ((receiveAmount >= ((rate2 * 300001) / 1000) && receiveAmount <= ((rate2 * 400000) / 1000))) { transactionFee2 = 7000; }
else if ((receiveAmount >= ((rate2 * 400001) / 1000) && receiveAmount <= ((rate2 * 500000) / 1000))) { transactionFee2 = 8000; }
}
return transactionFee2;
}


function calculateAmountToSend() {
transactionFee2 = calculateTransactionFee2();
let amountToSend = 0;
if (currency === "FCFATG" || currency === "FCFABN" || currency === "FCFACI" || currency === "FCFABF" || currency === "FCFASN") {
amountToSend = (receiveAmount / 1000) * rate;
return amountToSend;
} else if (currency === "GHS") {
amountToSend = (receiveAmount * 1000) / rate2;
return amountToSend;
} 
}


function roundDecimal(number) {
if (number % 1 === 0) {
return number;
} else if (number % 1 <= 0.50) {
return Math.floor(number) + 0.50;
} else {
return Math.ceil(number);
}
}


transactionFee2 = calculateTransactionFee2();
amountToSend = calculateAmountToSend();
const totalPaid = transactionFee2 + amountToSend;

let receiptText = "";
if (Time && currency === "FCFATG" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent ${receiveAmount.toLocaleString("fr-FR")} FCFA to +228${receiver.toUpperCase()} at a rate of ${rate};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${roundDecimal(totalPaid).toFixed(2)}, including a transaction fee of GHS ${transactionFee2.toFixed(2)} via -`;

document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
} 
else if (Time && currency === "FCFABN" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent ${receiveAmount.toLocaleString("fr-FR")} FCFA to +229${receiver.toUpperCase()} at a rate of ${rate};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${roundDecimal(totalPaid).toFixed(2)}, including a transaction fee of GHS ${transactionFee2.toFixed(2)} via -`;


document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
} 
else if (Time && currency === "FCFACI" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent ${receiveAmount.toLocaleString("fr-FR")} FCFA to +225${receiver.toUpperCase()} at a rate of ${rate};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${roundDecimal(totalPaid).toFixed(2)}, including a transaction fee of GHS ${transactionFee2.toFixed(2)} via -`;


document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
} 

else if (Time && currency === "FCFABF" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent ${receiveAmount.toLocaleString("fr-FR")} FCFA to +226${receiver.toUpperCase()} at a rate of ${rate};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${roundDecimal(totalPaid).toFixed(2)}, including a transaction fee of GHS ${transactionFee2.toFixed(2)} via -`;

document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
} 

else if (Time && currency === "FCFASN" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent ${receiveAmount.toLocaleString("fr-FR")} FCFA to +221${receiver.toUpperCase()} at a rate of ${rate};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${roundDecimal(totalPaid).toFixed(2)}, including a transaction fee of GHS ${transactionFee2.toFixed(2)} via -`;

document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
} 

else if (Time && currency === "GHS" && receiver && receiveAmount && trxId) {
receiptText = `Transaction successful via Retransfy.
You've sent GHS ${receiveAmount.toFixed(2)} to ${receiver.toUpperCase()} at a rate of ${rate2};
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of ${Math.ceil(totalPaid).toLocaleString("fr-FR")} FCFA, including a transaction fee of ${transactionFee2.toLocaleString("fr-FR")} FCFA via -`;


document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";
}

document.getElementById("copyButton").addEventListener("click", async function () {
try {
await navigator.clipboard.writeText(receiptText);
console.log('Text copied to clipboard');
} catch (err) {
console.error('Failed to copy: ', err);
}
//document.getElementById("copyButton").style.backgroundColor = "grey";
document.getElementById("copyButton").textContent = "Thank You";
});
});
