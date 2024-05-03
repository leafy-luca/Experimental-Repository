



function operacao(){
    let v1;
    let v2;
    v1 = parseFloat(document.getElementById("v1").value);
    v2 = parseFloat(document.getElementById("v2").value);
    let op;
    op = document.querySelector("input[name=op]:checked");

    // beginning of if else staircase
    if (op != null){
        let operacao = op.value;
        let resultado = 0;

        if (operacao == '+'){resultado = v1+v2;}
            else{
                if (operacao == '-'){resultado = v1-v2;}
                    else{
                        if (operacao == '*'){resultado = v1*v2;}
                            else{
                                if (operacao == '/'){resultado = v1/v2;}
                            }
                    }
    
            
            }

        document.getElementById("resultado").innerHTML = "Resultado = " + resultado;
    }

    //end of the if else staircase
}


document.getElementById("btnEfetuar").addEventListener('click',operacao);