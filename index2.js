function consultarCep(){

    let inputCep = document.querySelector('input[id=cep]');
    let cep = inputCep.value;
    let url = `viacep.com.br/ws/${cep}/json/`
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);
    console.log("1")
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //preencheCampos(JSON.parse(xhr.responseText));
            console.log(xhr.responseText);
        }
    xhr.send();
    }
}

function preencheCampos(json) {
    document.querySelector('input[name=endereco]').value = json.logradouro;
    document.querySelector('input[name=bairro]').value = json.bairro;
    document.querySelector('input[name=complemento]').value = json.complemento;
    document.querySelector('input[name=cidade]').value = json.localidade;
    document.querySelector('input[name=estado]').value = json.uf;
}