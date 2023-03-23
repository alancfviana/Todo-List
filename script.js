let lista = document.getElementsByTagName("LI")
let i
for (i = 0; i < lista.length; i++) {
  let botaofechar = document.createElement("botaofechar")
  let x = document.createTextNode("\u00D7")
  botaofechar.className = "fechar"
  botaofechar.appendChild(x)
  lista[i].appendChild(botaofechar)
}

let fechar = document.getElementsByClassName("fechar")

for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function() {
    let div = this.parentElement
    div.style.display = "none"
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

  let botaofechar = document.createElement("botaofechar")
  let x = document.createTextNode("\u00D7")
  botaofechar.className = "fechar"
  botaofechar.appendChild(x)
  li.appendChild(botaofechar)

  
  for (i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    
  } }  

}

let input = document.getElementById("entrada");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("botaoadicionar").click();
  }
})
