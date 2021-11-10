function adicionar(){

    let serie = document.getElementById("nomeSerie").value;
    let descricao = document.getElementById("Seriedescricao").value;
    let imagem = document.getElementById("imagemCard").value;






    let lista = document.getElementById("lista").innerHTML;
    lista += "<img src ="+imagem+" />"+"<h2>"+serie+"</h2>"+"<p>"+descricao+"</p>"+"<hr>";

    document.getElementById("lista").innerHTML = lista ; 


}
function removeItem( lista ) {
    document.getElementById('div_' + lista ).innerHTML = "";
}