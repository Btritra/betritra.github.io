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
            
        }

    });


    function esNumeroValido(valor) {
        return /^-?\d+(\.\d+)?$/.test(valor);
    }
    
});