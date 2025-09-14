export function saveAndRender(init, nome, data) {
  var tbody = document.querySelector(".js-table-body");

  var pessoasSalvas = localStorage.getItem("pessoas");
  var pessoas = pessoasSalvas ? JSON.parse(pessoasSalvas) : [];

  if (!init) {
    var pessoa = { nome: nome, nascimento: data };
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }

  if (tbody) {
    tbody.innerHTML = "";
    for (var i = 0; i < pessoas.length; i++) {
      var tr = document.createElement("tr");

      var tdNome = document.createElement("td");
      tdNome.textContent = pessoas[i].nome;

      var tdData = document.createElement("td");
      tdData.textContent = formatDatePtBr(pessoas[i].nascimento);

      tr.appendChild(tdNome);
      tr.appendChild(tdData);
      tbody.appendChild(tr);
    }
  }
}

function formatDatePtBr(iso) {
  if (!iso) return "";
  var partes = iso.split("-"); // ["YYYY", "MM", "DD"]
  if (partes.length !== 3) return iso; // fallback se vier algo inesperado
  var ano = partes[0];
  var mes = partes[1];
  var dia = partes[2];
  return dia + "/" + mes + "/" + ano; // "DD/MM/YYYY"
}
