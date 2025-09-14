function saveAndRender(init) {
  var tbody = document.querySelector(".js-table-body");

  var pessoasSalvas = localStorage.getItem("pessoas");
  var pessoas = pessoasSalvas ? JSON.parse(pessoasSalvas) : [];

  if (!init) {
    var nome = nameField.value.trim();
    var data = dateField.value;

    var pessoa = { nome: nome, nscimento: data };

    pessoas.push(pessoa);

    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }
}
