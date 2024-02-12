document.getElementById("create").addEventListener("click", function () {
  let receipt = document.getElementById("receipt").value;
  let receiptText = ``;
  if (receipt) {
    receiptText = receipt;

    document.getElementById("receiptOutput").innerHTML = receiptText;
    document.getElementById("copyButton").style.display = "block";
    document.getElementById("goBack").style.display = "block";
    document.getElementById("create").style.display = "none";
    document.getElementById("receipt").style.display = "none";
  }
});

document.getElementById("copyButton").addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  textArea.value = document.getElementById("receiptOutput").innerText;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  document.getElementById("copyButton").textContent = "Thank You";
});
