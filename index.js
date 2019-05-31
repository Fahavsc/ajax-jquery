function consultarCep(event, form){
    event.preventDefault();
    const inputCep = form.cep;
    let nomeRua;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const url=`https://viacep.com.br/ws/${cep}/json/`;
            fetch(url)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
                nomeRua = data.logradouro;
                
        }
        console.log(nomeRua);
    }
    
}

function mostrarResposta(cep){
    const mensagem = `
    CEP: ${cep.cep},
    Logradouro: ${cep.logradouro},
    Bairro: ${cep.bairro},
    Cidade: ${cep.localidade},
    UF: ${cep.uf}
    `
    alert(mensagem);
}