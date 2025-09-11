sendButton = document.getElementById("send_button");
nameField = document.getElementById("name");
dateField = document.getElementById("birth-date");

sendButton.addEventListener("click", () => {
  console.log(nameField);
  console.log(dateField);
});
