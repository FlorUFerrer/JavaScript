


//FILTRO BUSCADOR
const d = document;
 function searchFilters(input,selector){
    
    d.addEventListener("keyup",(e) => {
        
        
        if(e.target.matches(input)){
                       
            if(e.key ==="Escape")e.target.value = "";
            //Pasa por el contenido de cada ingreso y busca coincidencia, (convierte a minuscula)
            //Si la entrada por teclado ,si es true sacara la clase filter, 
            //de lo contrario lo dejara en pantalla.
            d.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }
        
    });
    
}


d.addEventListener("DOMContentLoaded",(e)=> {
searchFilters(".card-filter",".card");
});
