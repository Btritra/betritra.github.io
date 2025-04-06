document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("txtSalon");
    const btn = document.getElementById("btn1");
    const txtExtra = document.getElementById("textoE");
    


    btn.addEventListener("click",buscaSalon);

    input.addEventListener("keydown",function(e){
        if(e.key==="Enter"){
            e.preventDefault(); //EVITA QUE EL FORMULARIO SE RECARGUE ---- ESTO PASA CUANDO UN INPUT ESTA DENTRO DE UN FORM
            buscaSalon();
        }
    });

    function buscaSalon(){
       
        var salon = input.value.trim();

        if(salon == ""){
            txtExtra.textContent="Favor de ingresar un salon";
            return;
        }

        const imagenes=document.querySelectorAll("img");
        imagenes.forEach(img => {
            img.style.display="none"
        });

        document.getElementById("fondo").style.display="block";

        if(esNumeroValido(salon)){
            const numero = parseInt(salon,10);
           
            if(numero>0 && numero<=4){
                document.getElementById("segundoEdi").style.display="block";
                txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
            }else if(numero>=5 && numero<=8){
                document.getElementById("primerEdi").style.display="block";
                txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
            }else if((numero>=9 && numero<=12)||(numero>=17 && numero<=21)){
                document.getElementById("cuartoEdi").style.display="block";
                if(numero>=9 && numero<=12){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if((numero>=13 && numero<=16)||(numero>=22 && numero<=25)){
                document.getElementById("tercerEdi").style.display="block";
                if(numero>=13 && numero<=16){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if((numero>=26 && numero<=29)||(numero>=34 && numero<=37)){
                document.getElementById("sextoEdi").style.display="block";
                if(numero>=26 && numero<=29){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if((numero>=30 && numero<=33)||(numero>=38 && numero<=41)){
                document.getElementById("quintoEdi").style.display="block";
                if(numero>=30 && numero<=33){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if((numero>=41 && numero<=44)||(numero>=49 && numero<=52)){
                document.getElementById("octavoEdi").style.display="block";
                if(numero>=41 && numero<=52){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if((numero>=45 && numero<=48)||(numero>=53 && numero<=57)){
                document.getElementById("sectimoEdi").style.display="block";
                if(numero>=45 && numero<=48){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }else if(numero==59 || numero==60){
                document.getElementById("ediQuimica").style.display="block";
                txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
            }else if(numero==58 ||(numero>=61 && numero<=64)){
                document.getElementById("ediQuimica2").style.display="block";
                if(numero==58){
                    txtExtra.textContent="El salon se encuentra en planta baja del edificio marcado con morado";
                }else{
                    txtExtra.textContent="El salon se encuentra en planta alta del edificio marcado con morado";
                }
            }
        }else{
            salon=salon.toUpperCase();
            if(salon=="LC01" || salon=="LC02" || salon=="LC03"){
               document.getElementById("departamentoComputo").style.display="block";
               txtExtra.textContent="El salon se encuentra en edificio marcado con morado";
            }else if(["L1", "L2", "L3","L4","L5","L6","L7", "L8", "L9","L10"].includes(salon)){
                document.getElementById("computo").style.display="block";
            }else if(salon=="BIBLIOTECA"){
                document.getElementById("biblioteca").style.display="block";
                txtExtra.textContent="El salon se encuentra en edificio marcado con morado";
            }else if(salon=="POSTGRADOS"){
                document.getElementById("postgrados").style.display="block";
                document.getElementById("postgrados2").style.display="block";
                txtExtra.textContent="El salon se encuentra en edificio marcado con morado";
            }else if(salon=="AUDITORIO"){
                document.getElementById("auditorio").style.display="block";
                txtExtra.textContent="El salon se encuentra en edificio marcado con morado";
            }else if(salon=="A1"|| salon=="A2"|| salon=="A3"){
                document.getElementById("ediMecanica").style.display="block";
                txtExtra.textContent="El salon se encuentra en edificio marcado con morado";
            }

        }

    }

    function esNumeroValido(valor) {
        return /^-?\d+(\.\d+)?$/.test(valor);
    }
    
});