const url = "https://economia.awesomeapi.com.br/json/last";
const botao = document.querySelector(".botao");
let response = document.querySelector(".retorno");
const option1 = document.querySelector("#moeda1")
const option2 = document.querySelector("#moeda2")

let result =''

function createEl(el) {
  return document.createElement(el);
}
function append(parent, child) {
  return parent.appendChild(child);
}
function getResponse(moeda1, moeda2, valor) {
  let moedas = moeda1+moeda2
  fetch(`${url}/${moeda1}-${moeda2}`, { method: "GET" })
    .then((response) => response.json())
    .then((result) => {
      let conversao = result[moedas].ask
      let span = createEl("span")
      span.innerHTML = conversao * valor
      append(response, span)
    }).catch((error) => console.log(error));
}

botao.addEventListener("click", (e) => {
  const moeda1 = option1.options[option1.selectedIndex].value.toString()
  const moeda2 = option2.options[option2.selectedIndex].value.toString()
  e.preventDefault();
  console.log(moeda1)
  console.log(moeda2)
  getResponse(moeda1, moeda2, 150);
});
