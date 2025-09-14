import { saveAndRender } from "./save.js";

const form = document.querySelector(".js-form");
const nameField = document.getElementById("name");
const dateField = document.getElementById("birth-date");

document.addEventListener("DOMContentLoaded", () => {
  saveAndRender(true);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateName()) return;
  if (!validateDate()) return;

  showSuccess();
  var nome = nameField.value.trim();
  var data = dateField.value;
  saveAndRender(false, nome, data);

  clearFields();
});

// ================== Funções ==================

function validateName() {
  const nome = nameField.value.trim();
  const letras = (nome.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) || []).length;

  if (letras < 3) {
    alert("O nome deve ter pelo menos 3 letras.");
    return false;
  }
  if (letras > 120) {
    alert("O nome pode ter no máximo 120 letras.");
    return false;
  }
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
    alert("O nome deve conter apenas letras e espaços (sem números).");
    return false;
  }
  return true;
}

function validateDate() {
  if (!dateField.value) {
    alert("Selecione uma data.");
    return false;
  }

  const [ano, mes, dia] = dateField.value.split("-").map(Number);

  if (mes < 1 || mes > 12) {
    alert("O mês deve estar entre 01 e 12.");
    return false;
  }

  const data = new Date(ano, mes - 1, dia);
  const valida =
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia;

  if (!valida) {
    alert("Data inválida (verifique o dia/mês).");
    return false;
  }
  return true;
}

function showSuccess() {
  const [ano, mes, dia] = dateField.value.split("-").map(Number);
  const dataFormatada = `${String(dia).padStart(2, "0")}/${String(mes).padStart(
    2,
    "0"
  )}/${ano}`;

  console.log("Nome:", nameField.value.trim());
  console.log("Data:", dataFormatada);
}

function clearFields() {
  nameField.value = "";
  dateField.value = "";
}
