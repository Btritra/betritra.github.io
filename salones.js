document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("txtSalon");
    const btn = document.getElementById("btn1");
    const txtExtra = document.getElementById("textoE");

    btn.addEventListener("click",function(){
       
        const salon = input.value.trim();

        if(salon == ""){
            txtExtra.textContent="Favor de ingresar un salon";
            return;
        }

        if(esNumeroValido(salon)){
            const numero = parseInt(salon,10);
           
            if(numero>0 && numero<=4){
                document.getElementById("segundoEdi").style.display="block";
            }else if(numero>=5 && numero<=8){
                document.getElementById("primerEdi").style.display="block";
            }else if((numero>=9 && numero<=12)||(numero>=17 && numero<=21)){
                document.getElementById("cuartoEdi").style.display="block";
            }else if((numero>=13 && numero<=16)||(numero>=22 && numero<=25)){
                document.getElementById("tercerEdi").style.display="block";
            }else if((numero>=26 && numero<=29)||(numero>=34 && numero<=37)){
                document.getElementById("sextoEdi").style.display="block";
            }else if((numero>=30 && numero<=33)||(numero>=38 && numero<=41)){
                document.getElementById("quintoEdi").style.display="block";
            }else if((numero>=41 && numero<=44)||(numero>=49 && numero<=52)){
                document.getElementById("octavoEdi").style.display="block";
            }else if((numero>=45 && numero<=48)||(numero>=53 && numero<=57)){
                document.getElementById("sectimoEdi").style.display="block";
            }else if(numero==59 || numero==60){
                document.getElementById("ediQuimica").style.display="block";
            }else if(numero==58 ||(numero>=61 && numero<=64)){
                document.getElementById("ediQuimica2").style.display="block";
            }
        }else{

        }

    });


    function esNumeroValido(valor) {
        return /^-?\d+(\.\d+)?$/.test(valor);
    }
    
});