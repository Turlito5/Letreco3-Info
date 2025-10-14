 var idLinha = 1; 
 const Linha = document.getElementById("linha" + idLinha); 
 const button = document.getElementById("button");
 const Input = document.getElementById("entrada");
 var Certa = "artur" 
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
    
    for( let i=0; i < palavra.length; i++ ) {
      if (palavra[i] === Certa[i]) {
         criarElemento(palavra[i])
      }
      if(palavra === Certa || palavra[i] != Certa[i] ) {

         criarElemento2(palavra[i]);
         console.log(palavra);

      } 
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