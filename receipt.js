document.getElementById("create").addEventListener("click", function () {
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;

const Time = document.getElementById("theTime").value;
const currency = document.getElementById("currency").value;
const receiver = document.getElementById ("receiver").value;
const amountReceived = parseFloat(document.getElementById("amountReceived").value);
const totalPaid = parseFloat(document.getElementById("totalPaid").value);
const fee = parseFloat(document.getElementById("fee").value);
const trxId = document.getElementById("trxid").value;


let receiptText = "";
if (Time && currency === "FCFA") {
receiptText = `Transaction successful.
You've just sent ${amountReceived.toLocaleString("fr-FR")} FCFA to 228${receiver.toUpperCase()} via Retransfy.
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of GHS ${totalPaid.toFixed(2)}, including a 
GHS ${fee.toFixed(2)} transaction fee via -`;

document.getElementById("receiptOutput").innerHTML = receiptText;
document.getElementById("copyButton").style.display = "block";
document.getElementById("goBack").style.display = "block";
document.getElementById("create").style.display = "none";
document.getElementById("receiptForm").style.display = "none";

} else if (Time && currency === "GHS") {
receiptText = `Transaction successful.
You've just sent GHS ${amountReceived.toFixed(2)} to ${receiver.toUpperCase()} via Retransfy.
${formattedDate} | ${Time} | Transaction ID: ${trxId}. You paid a total of ${totalPaid.toLocaleString("fr-FR")} FCFA, including a
${fee.toLocaleString("fr-FR")} FCFA transaction fee via -`;

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
});
});
