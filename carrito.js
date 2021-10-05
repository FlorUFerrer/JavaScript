



const AgregarBotones = document.querySelectorAll('.btn');


//console.log('imprime',AgregarBotones);


AgregarBotones.forEach(AgregaBoton => {

AgregaBoton.addEventListener('click', AgregarCarrito);
});

const  articulosCarrito= document.querySelector('.cards');


function AgregarCarrito( e ){

    //capturar el target
    const button = e.target;
   // console.log("button", button);
const item = button.closest('.card')

//console.log("item" , item)


const itemTitle = item.querySelector('.card-text').textContent;
const itemPrice = item.querySelector('.card-precio').textContent;
const itemImg = item.querySelector('.card-img-top').src;


addItemToShop(itemTitle, itemPrice, itemImg);

}


function addItemToShop (itemTitle, itemPrice, itemImg){
    //console.log(itemTitle, itemPrice, Itemimg)
        
        const carrito = document.createElement('div');
        const carritoContenedor = `
        <div class="contenedor-items-carrito">
           <div>
                <p class="items-carrito " >
                 <img class ="imagen-contenedor item-img" src=${itemImg}>
                ${itemTitle}</p>
            </div>
            <p class="items-carrito item-precio" >$${itemPrice}</p>
            <div>
                <input class="cantidades" type="number" value="1">
                <button class=" btn-danger buttonDelete" type="button">X</button>
            </div>
            <p class ="totalProducto">$ </p>
        </div>    
        `;
        const  articulosEneLCarrito = document.querySelector('section.container');
        carrito.innerHTML = carritoContenedor;
        articulosEneLCarrito.append(carrito);
    

        actualizarTotal();
}


function actualizarTotal(){
    let total = 0;
    const carritoTotalProducto = document.querySelector('.total-pagar');
    //console.log(carritoTotalProducto)
    
    const contenedorItemsCarrito = document.querySelectorAll('.contenedor-items-carrito');
    //console.log(contenedorItemsCarrito)
    
    
    contenedorItemsCarrito.forEach((contenedorItemCarrito) => {
        const precioCarritoElemento = contenedorItemCarrito.querySelector('.item-precio');
       
    //console.log(precioCarritoElemento)
    
    
    
    
   const ITEMPRECIO =  Number(document.querySelector('.item-precio').textContent.replace('$',''));
    
   //console.log(ITEMPRECIO)
   
   
   
   
   const CANTIDADCARRITO =  $('.cantidades').value;
       
    console.log(CANTIDADCARRITO)
    
});
}

