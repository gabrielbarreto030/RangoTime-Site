
var nome = '';
var telefone = '';
var mensagem = '';
var request1=false;
var request2=false;

function formulario() {
    nome = document.getElementById("name").value;
    telefone = document.getElementById("telefone").value;
    mensagem = document.getElementById("mensagem").value;
    var nomeall = document.getElementById("name");
    var telall = document.getElementById("telefone");


    if (nome.length == 0) {        
        console.log("ativa erro");
        nomeall.classList.add("erro");
        document.getElementById('texterro').innerHTML = "O campo nome não pode estar vazio";
    }
    else{
        nomeall.classList.remove("erro");
        document.getElementById('texterro').innerHTML="";
        request1=true;
    }


    if (isNumeric(telefone)) {
        console.log("é numero");
        if(telefone.length>8 && telefone.length<13){
             console.log("é valido")
             telall.classList.remove("erro")
             document.getElementById("telerro").innerHTML="";
             request2=true;
        }
      
    }
    else {
        
        telall.classList.add("erro");
        document.getElementById("telerro").innerHTML = "Insira um telefone válido"

    }

    // if(request1 == true && request2 ==true){
    //     var confirma=document.getElementById('confirmacao').innerHTML="Pedido enviado com sucesso";

    // }
    console.log(`nome:${nome} \n telefone:${telefone} \n mensagem:${mensagem}`);
}


function isNumeric(str) {
    var er = /^[0-9]+$/;
    return (er.test(str));
}