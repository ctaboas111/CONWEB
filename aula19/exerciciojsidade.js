function exibeidade() {

    var idade = document.getElementById("useridade").value;

    window.alert(idade)

    if (idade < 0) {
        alert("idade inválida!");
    }
    else if (idade >= 0) {
        alert("É uma criança.")
    } 
    else if (idade >= 15) {
        alert("É um adolescente.")
    }
}