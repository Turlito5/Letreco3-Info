  const idLinha = 1; 
 const Linha = document.getElementById("linha" + idLinha); 
 const button = document.getElementById("button");
 const Input = document.getElementById("entrada"); 
 button.addEventListener("click", testarPalavra);
 Input.addEventListener("keydonw", enter);

 function enter(Tecla) {

    if (Tecla.key === "Enter") {
        testarPalavra()

    }



 }




 function testarPalavra() {

    let palavra = document.getElementById("entrada").value; 



 }