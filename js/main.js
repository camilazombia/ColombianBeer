  //$('#myModal').modal({backdrop: 'static', keyboard: false})  
  $("#boton-usuarios").on("click", getUsers);

  function getUsers() {
    $.ajax({
      url: 'https://reqres.in/api/users',
      success: function(respuesta) {
  
        var listaUsuarios = $("#lista-usuarios");
        $.each(respuesta.data, function(index, elemento) {
          listaUsuarios.append(
              '<div>'
            +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
            +     '<img src=' + elemento.avatar + '></img>'
            + '</div>'
          );    
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  }
  class producto{
    constructor(id, nombre, tipo, grados, precio,imagen) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.grados = parseFloat(grados);
        this.precio = parseInt(precio);
        this.image = imagen;
        }
    vender() {
        this.vendido = true;
    }
    SumaIva() {
        this.vendido = parseInt(this.precio * 0.19);
    }
    Descuento() {
        this.vendido = parseInt(this.precio * 0.5);
    }
  }
  
  const productos = [];
  productos.push(new producto("1", "Bogotá", "lager", "4.2", "12900", "https://via.placeholder.com/150"));
  productos.push(new producto("2","Medellín", "lager", "4.2", "12900","https://via.placeholder.com/150"));
  productos.push(new producto("3","Cali", "lager", "4.7", "24000", "https://via.placeholder.com/150" ));
  productos.push(new producto("4","Cartagena", "lager", "5", "11800","https://via.placeholder.com/150"));
  productos.push(new producto("5","Bucaramanga", "lager", "4.2", "13800", "https://via.placeholder.com/150"));
  productos.push(new producto("6","Manizales", "lager", "4.5", "21000", "https://via.placeholder.com/150"));
  productos.push(new producto("7","Cúcuta", "lager", "4.5", "13200","https://via.placeholder.com/150" ));
  productos.push(new producto("8","Pereira", "lager", "4.5", "13200","https://via.placeholder.com/150" ));
  productos.push(new producto("9","Ibagué", "lager", "4.5", "13200","https://via.placeholder.com/150" ));
  
  for (const producto of productos) {
    let div = document.createElement("div");
  
    div.className='card col-sm-12 col-md-3 cardproduct my-3'
  
    div.innerHTML = 
    `<img class="card-img-top"src="${producto.image}">
    <h3 class="card-title"> ${producto.nombre}</h3>
     <p class="card-type">  Tipo: ${producto.tipo}</p>
     <p class="card-gre">  Grados: ${producto.grados}</p>
     <p class="card-price"> $ ${producto.precio}</p>
     <button type="button" class="card-btn${producto.id} card-btn">Comprar</button>`;
     document.body.appendChild(div);
  
const product = document.querySelector("#product")
  product.insertAdjacentElement("afterbegin", div);
  }

const ShopBtn = document.querySelectorAll('.card-btn');
  ShopBtn.forEach(addCartBtn => {
     addCartBtn.addEventListener('click', addCart)
});
const shopCart= document.querySelector('.show-cart');


function addCart(event){
  const BtnCart = event.target;
  const cardproduct = BtnCart.closest('.cardproduct')

  const ProductName  = cardproduct.querySelector('.card-title').textContent;
  const ProductPrice = cardproduct.querySelector('.card-price').textContent;
  const ProductImage = cardproduct.querySelector('.card-img-top').src;
  

 addItem(ProductName, ProductPrice, ProductImage)};

function addItem(ProductName, ProductPrice, ProductImage){
  const shopinside = document.createElement ('div');
  const ShowCart=
  `<div class="row shopCart-Product">
  <div class="col-6">
      <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <img src='${ProductImage}' class="shopping-cart-image">
          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${ProductName}
          </h6>
      </div>
  </div>
  <div class="col-2">
      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <p class="item-price mb-0 shopCart-Product_Price">${ProductPrice}</p>
      </div>
  </div>
  <div class="col-4">
      <div
          class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
          <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
              value="1">
          <button class="btn btn-danger buttonDelete" type="button">X</button>
      </div>
  </div>
</div>`;

shopinside.innerHTML = ShowCart;
shopCart.append(shopinside);

ShopCarTotal()
}

function ShopCarTotal(){
  let total = 0;
  const totalPrice = document.querySelector('.total-price');
  const shopCartProduct = document.querySelector('.shopCart-Product');

  shopCartProduct.forEach(shopCartSingleProduct => console.log('click'));
}


