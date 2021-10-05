


//PRODUCTOS

const productos = [

    {
        id : 1,
        nombre : "HELLBOY",
        precio : 3000,
        categoria : "FIGURA",
        imagen : "https://drive.google.com/uc?export=view&id=1beJhEYdCcN285QC3sqppg9Z2L6yyDY5w"
    },
    {
        id : 2,
        nombre : "MACETA ODDISH",
        precio : 250,
        categoria : "MACETA",
        imagen : "https://drive.google.com/uc?export=view&id=1Wnm2b4Q8sbMn8Hpd-WX2068RBop7ZNQ2"
    },
    {
       id : 3,
       nombre : "MACETA ROBERT",
        precio : 330,
        categoria : "MACETA",
        imagen : "https://drive.google.com/uc?export=view&id=1vwTeG67f2bn6U4eStv_7VJ8kvuQn0vlX"
    },
    {
        id : 4,
        nombre : "MACETA TORTERRA",
        precio : 600,
        categoria : "MACETA",
        imagen :"https://drive.google.com/uc?export=view&id=1OKWBpkmeGfGuK5zZF2TcQGCRVldTERYZ"
    },
    {
        id : 5,
        nombre: "MACETA BULBASAUR",
        precio : 560,
        categoria : "MACETA",
        imagen : "https://drive.google.com/uc?export=view&id=1RqhPHFdEsoELNUXeeD5Lp5AVmjPm7cG3"
    },
    {
        id : 6,
        nombre : "HELLBOY",
        precio : 560,
        categoria : "FIGURA",
        imagen : "https://drive.google.com/uc?export=view&id=1beJhEYdCcN285QC3sqppg9Z2L6yyDY5w"
    },
    {
        id : 7,
        nombre : "MATE DEADPOOL",
        precio : 560,
        categoria : "MATE",
        imagen : "https://drive.google.com/uc?export=view&id=1XgC5-3THGElAyl5yOmsM9W2xc0FIeJ6M"
    },
    {
        id : 8,
        nombre : "MATE YU-GI-OH!",
        precio : 560,
        categoria : "MATE",
        imagen : "https://drive.google.com/uc?export=view&id=1mYk4z9NPZJdU9C_VsLYhwVi0iuGsI04X"
    },
    {
        id : 9,
        nombre : "MACETA MARIO BROS",
        precio : 560,
        categoria : "MATE",
        imagen : "https://drive.google.com/uc?export=view&id=1qJnb1Ms1XkUnrgh5CMjR6Z-gO5fYqGq1"
    }
  
];




const vistaProductos = productos.forEach(function(producto) {

//console.log (producto.id)
       
   
    
    const productosContenedor = $(`
    
    <div class="card" style="width: 20rem;">
    <img class="card-img-top img-fluid"src= ${producto.imagen} >
    <div class="card-body">
    <p class="card-text ">${producto.nombre}</p>
    <p class ="card-precio">${producto.precio}</p>
    <button class="btn">Comprar</button>
    </div>
    </div>

    `);
    $(".cards").append(productosContenedor);
   
});
  

