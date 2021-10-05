const imputName = document.getElementById('imput-name');
const imputEmail = document.getElementById('imput-email');
const imputTel = document.getElementById('imput-tel');
const imputEnviar = document.getElementById('imput-enviar');
const imputCheckbox = document.getElementById('imput-Check');
const imputForm = document.getElementById('imput-Form')


//ESTRUCTORA DEL CLIENTE
class Cliente{
    constructor (nombre, email,telefono){

        this.nombre = nombre;
        this.email = email;
        this.telefono =telefono;
    }
}

let clientes = [];

/*CHECK-BOX*/
let OfertasDeseadas = false;

 imputCheckbox.onchange =() => {
   
    OfertasDeseadas = !OfertasDeseadas

    console.log (`${imputName.value} Quiere ofertas: ${OfertasDeseadas}`);
}


imputEnviar.addEventListener("click", function(e){
   
    //TOMA DE DATOS DE ENTRADA
    e.preventDefault();

    const imputName = document.getElementById('imput-name').value;
    const imputEmail = document.getElementById('imput-email').value;
    const imputTel = document.getElementById('imput-tel').value;

   
    alert ("Enviado, nos comunicaremos enseguida")
    let clienteNuevo = new Cliente (imputName, imputEmail, imputTel);
    clientes.push(clienteNuevo);

    localStorage.setItem("ListaClientes", JSON.stringify(clientes));
    
    
    imputForm.submit().submit();
});

console.log(localStorage.getItem("ListaClientes"));