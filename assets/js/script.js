// Variáveis globais -- Podem ser acessadas por qualquer método!
let nomeOk = false
let emailOk = false
let mensagemOk = false
let cepOk = false

// Validação do Nome
function validarNome(){
    // Armazenando em "nome" o conteúdo da div com id="nome"
    const nome = document.querySelector("#nome")
    // Armazenando em "nome" o conteúdo da div com id="txtNome"
    let txtNome = document.querySelector("#txtNome")

    // Se foi digitado MENOS de 3 caracteres
    if (nome.value.length < 3){
        // Alterando o conteúdo da div por HTML
        txtNome.innerHTML = "Nome muito curto!"
        // Alterando a cor do texto por CSS
        txtNome.style.color = "red"
        // A validação NÃO deu certo
        nomeOk = false
    }
    else{
        txtNome.innerHTML = "✅"
        // A validação deu certo
        nomeOk = true
    }
}

// Validação simples de e-mail, mas com problemas
function validarEmail(){
    const email = document.querySelector("#email")
    let txtEmail = document.querySelector("#txtEmail")

    // Se NÃO existe um @ ou um . digitado no input
    if (email.value.indexOf("@") === -1 || nome.value.indexOf(".") === -1){
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
        emailOk = false
    }
    else{
        txtEmail.innerHTML = "✅"
        emailOk = true
    }
}

// Validação mais completa de e-mail -- Estamos usando essa!
function validarEmailRegex(){
    // Regra de comparação
    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

    const email = document.querySelector("#email")
    let txtEmail = document.querySelector("#txtEmail")

    // Se o valor digitado NÃO está de acordo com a regra
    if (!email.value.match(regex)){
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
        emailOk = false
    }
    else{
        txtEmail.innerHTML = "✅"
        emailOk = true
    }
}

// Validação da mensagem
function validarMensagem(){
    const mensagem = document.querySelector("#mensagem")
    let txtMensagem = document.querySelector("#txtMensagem")

    // Se foi digitado MAIS de 280 caracteres
    if (mensagem.value.length > 280){
        txtMensagem.innerHTML = "Mensagem longa demais!"
        txtMensagem.style.color = "red"
        mensagemOk = false
    }
    else if (mensagem.value.length === 0) {
        txtMensagem.innerHTML = "Digite uma mensagem!"
        txtMensagem.style.color = "red"
        mensagemOk = false
    }
    else{
        txtMensagem.innerHTML = "✅"
        mensagemOk = true
    }
}

// Validação de CEP
function validarCepRegex(){
    // Regra de comparação
    let regex = /^[0-9]{5}-[0-9]{3}$/

    const cep = document.querySelector("#cep")
    let txtCep = document.querySelector("#txtCep")

    // Se o valor digitado NÃO está de acordo com a regra
    if (!cep.value.match(regex)){
        txtCep.innerHTML = "CEP inválido!"
        txtCep.style.color = "red"
        cepOk = false
    }
    else{
        txtCep.innerHTML = "✅"
        cepOk = true
    }
}

// Função chamada ao clicar no botão de Enviar
function enviarFormulario(){
    // Se TODAS as validações deram certo
    if (nomeOk === true && emailOk === true && mensagemOk === true){
        // Criando um alerta na tela
        alert(nome.value + ", obrigade pela mensagem! 😊")
    }
    else {
        alert("O formulário não foi preenchido corretamente! 😔")
    }
}

// Função chamada ao clicar no botão de Consultar
function consultarCEP(){
    // Se a validação deu certo
    if (cepOk === true){
        const cep = document.querySelector("#cep")
        // Colocando o CEP digitado no site de consulta
        const url = `https://viacep.com.br/ws/${cep.value}/json/`

        // Busca o CEP no site
        fetch(url)
        // Pega o formato json da resposta
        .then((resposta) => resposta.json())
        // Mostra a resposta no formulário
        .then((jsonBody) => {
            // Se não ocorreu erro -- Ou seja, encontrou o CEP!
            if (jsonBody.erro === undefined){
                // Preenche a textarea Endereço
                document.getElementById("endereco").innerHTML = 
                jsonBody.logradouro + 
                "\n" + 
                jsonBody.bairro +
                "\n" + 
                jsonBody.localidade +
                "\n" + 
                jsonBody.uf
            }
            else{
                // Mostra um aviso caso o CEP não exista
                alert("CEP não encontrado! 😔")
            }
        })
        // Mostra um aviso caso ocorra um erro na busca ou no site
        .catch((error) => alert("Erro ao buscar CEP! 😔"))
    }
    else {
        alert("O CEP não foi preenchido corretamente! 😔")
    }
}