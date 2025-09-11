const sendButton = document.getElementById("send_button");
const nameField = document.getElementById("name");
const dateField = document.getElementById("birth-date");

sendButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  console.log(nameField.value);
  console.log(dateField.value);
});
