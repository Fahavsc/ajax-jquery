$(document).ready(
    function(){
        console.log("Pagina Carregada");
        var cep = $("#txtCEP").val();
        cep = cep.replace("-", "");
        var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";

            $("#txtCEP").focusout(function(){
            $.ajax({
                url : urlStr ,
                type: "get",
                dataType: "json",
                success : function(data){
                    console.log(data);
                    $("#txtCidade").val(data.localidade);
                    $("#txtEs").val(data.uf);
                    $("#txtBairro").val(data.bairro);
                    $("#txtRua").val(data.logradouro);
                    $("#txtComp").val(data.complemento);
                },
                error: function(erro){
                    console.error(erro);
                }
                

            })
        })
    }
)