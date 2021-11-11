function adicionar(){

    let serie = document.getElementById("nomeSerie").value;
    let descricao = document.getElementById("Seriedescricao").value;
    let imagem = document.getElementById("imagemCard").value;



    let lista = document.getElementById("lista").innerHTML;
    lista += `       
    <div class="card border-primary" style="width: 18rem;">
    <img class="card-img-top" src="${imagem}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${serie}</h5>
      <p class="card-text">${descricao}</p>
      <a href="https://seriesbrasil.com.br/" class="btn btn-primary">Saiba Mais</a>
    </div>
  </div>
`;
    document.getElementById("lista").innerHTML = lista ; 

}