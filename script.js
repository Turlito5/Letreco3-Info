 var idLinha = 1; 
 const Linha = document.getElementById("linha" + idLinha); 
 const button = document.getElementById("button");
 const Input = document.getElementById("entrada");
 var Certa = "artur" 
 var teste; 
 button.addEventListener("click", testarPalavra);
 Input.addEventListener("keydown", enter);

 function enter(Tecla) {

    if (Tecla.key === "Enter") {
        testarPalavra()

    }
 }
 function testarPalavra() {

    let palavra = document.getElementById("entrada").value;
    Certa = Certa.toUpperCase();
    palavra = palavra.toUpperCase();

    if(palavra.length > 5 ) {

      alert("Não tem cinco letras")

    }
    else if (palavra.length <= 5) {
    
    for( let i=0; i < palavra.length; i++ ) {
      if (palavra[tent1] === Certa[tent2]) {
         criarElemento(palavra[tent1]);
    }
    if ( palavra[tent1] === Certa[tent2] || i != j ) {
         criarElemento2(palavra[tent1]);
         console.log(palavra[tent1]);
         }
         else {
         criarElemento3(palavra[tent1]);
         console.log(palavra);
         }
      }       
      tent2++;
      if ( tent2 <= 5) {
        tent2 = 0
      }
    tent1++;
      }
    idLinha++;
    Linha = document.getElementById("linha" + idLinha); 
   }  
 

 function criarElemento(letra) {
   console.log(letra)
   let item = document.createElement("div");
   item.classList.add("letra")
   item.classList.add("certa");
   item.textContent = letra
   Linha.appendChild(item); 
 }
  function criarElemento2(letra) {
   console.log(letra)
   let item = document.createElement("div");
   item.classList.add("letra")
   item.classList.add("Posicao");
   item.textContent = letra
   Linha.appendChild(item); 
   }

  function criarElemento3(letra) {
   console.log(letra)
   let item = document.createElement("div");
   item.classList.add("letra")
   item.classList.add("errado");
   item.textContent = letra
   Linha.appendChild(item); 
   }
