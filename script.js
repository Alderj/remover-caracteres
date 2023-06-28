function removerCaracteres() {
    var cpf = document.getElementById("cpf").value;
    var cpfSemCaracteresEspeciais = cpf.replace(/[^a-zA-Z0-9]/g, "");
    document.getElementById("resultado").value = cpfSemCaracteresEspeciais;
}
