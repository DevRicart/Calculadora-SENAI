function clean() {
  document.getElementById('result').innerHTML = " "
}

function insert(num) {
  var number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}


function calculate() {
  var resultElement = document.getElementById('result');
  var result = resultElement.innerHTML.trim();

  /* Verifica se o último caractere é um número*/
  var lastCharacter = /\d$/.test(result); 

/*essa é uma expressão nativa do javascript: onde /\d/ é uma classe de caracteres que corresponde a qualquer dígito decimal (0-9) e $: Isso representa o final de uma string.*/

  if (lastCharacter) {
      resultElement.innerHTML = eval(result).toFixed(2);
  } else {
    alert("Impossível Calcular");
    clean();
  }
}

function back() {
  var result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

var numberOfCharacter = result.innerHTML.length -1
console.log(result.innerHTML.substr(numberOfCharacter));