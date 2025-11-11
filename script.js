var idLinha = 1; 
 var Linha = document.getElementById("linha" + idLinha); 
 const button = document.getElementById("button");
 const Input = document.getElementById("entrada");
 var Certa = ["tigre", "nuvem", "plano", "vento", "livro",
  "prato", "fosso", "carro", "troca", "metal",
  "festa", "navio", "mapas", "couro", "pedra",
  "casco", "farol", "vazio", "banho", "firme",
  "dente", "perna", "linha", "folha", 
  "canto", "barco", "lente", "cesta", "garra",
  "campo", "rocha", "sorte", "verde", "musgo",
  "pular", "tocar", "setor", "carta", "muito",
  "porta", "pente", "pulso", "suave", "cinto",
  "amigo", "roubo", "acaso", "velho", "nobre"];
 var teste = 0;
 const valorAleatorio = Certa[Math.floor(Math.random() * Certa.length)];
 Certa = valorAleatorio;
 console.log(Certa);
 button.addEventListener("click", testarPalavra);
 Input.addEventListener("keydown", enter);

 function enter(Tecla) {

    if (Tecla.key === "Enter") {
        testarPalavra()

    }
 }





 function testarPalavra() {

    
    let palavra = Input.value.trim(); //trim tira espaço das palavras

    Certa = Certa.toUpperCase();
    palavra = palavra.toUpperCase();

    if (palavra.length !== 5) {
      alert("A palavra precisa ter cinco letras");
      return
    }


    Linha = document.getElementById("linha" + idLinha);
    if (!Linha) {
      alert("Número máximo de tentativas atingido!");
      return;
      console.log("Linha não encontrada:", idLinha);

    }

  

    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra[i];
      if (letra === Certa[i]) {
         criarElemento(letra);
      } else if (Certa.includes(letra)) {
         criarElemento2(letra);
      } else {
         criarElemento3(letra);
      }
    }
    idLinha++;
    Input.value = "";
    Input.focus();


 } 

 function resetar () {

  if (idLinha  < 5 )
  {
    window.location.reload();
}
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
