let lista = document.getElementsByTagName("LI")
let i
for (i = 0; i < lista.length; i++) {
  let fechar = document.createElement("fechar")
  let x = document.createTextNode("\u00D7")
  fechar.className = "fechar"
  fechar.appendChild(x)
  lista[i].appendChild(fechar)
}


let fechar = document.getElementsByClassName("fechar")
for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function() {
    let body = this.parentElement
    body.style.display = "none"
  }
}


let list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('feito')
  }
}, false)


function novoElemento() {
  let li = document.createElement("li")
  let entrada = document.getElementById("entrada").value
  let texto = document.createTextNode(entrada)
  li.appendChild(texto)
  if (entrada === '') {
    alert("Digite alguma tarefa!")
  } else {
    document.getElementById("lista").appendChild(li)
  }
  document.getElementById("entrada").value = ""

  let fechar = document.createElement("fechar")
  let x = document.createTextNode("\u00D7")
  fechar.className = "fechar"
  fechar.appendChild(x)
  li.appendChild(fechar)

  for (i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function() {
      let body = this.parentElement
      body.style.display = "none"
    }
  }   
}


let input = document.getElementById("entrada");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("botaoadicionar").click();
  }
});
