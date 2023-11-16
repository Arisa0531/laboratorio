const buttons = document.querySelectorAll('.info-product button');
const contadorProductos = document.getElementById('contador-productos');
const totalPagar = document.querySelector('.total-pagar');
const containerCartProducts = document.querySelector('.container-cart-products');
const iconoCarrito = document.querySelector('.icon-cart');
const btnPagar = document.getElementById('btn-pagar');

let cantidadProductos = 0;
let total = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const producto = {
            cantidad: 1,
            titulo: button.parentNode.querySelector('h2').innerText,
            precio: parseFloat(button.parentNode.querySelector('.price').innerText.slice(1))
        };

        const confirmar = window.confirm(`¿Agregar "${producto.titulo}" al carrito?`);

        if (confirmar) {
            cantidadProductos += producto.cantidad;
            total += producto.precio;

            contadorProductos.innerText = cantidadProductos;
            totalPagar.innerText = `$${total.toFixed(2)}`;

            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart-product');
            cartProduct.innerHTML = `
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${producto.cantidad}</span>
                    <p class="titulo-producto-carrito">${producto.titulo}</p>
                    <span class="precio-producto-carrito">$${producto.precio}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
            `;

            containerCartProducts.appendChild(cartProduct);

            const iconoCerrar = cartProduct.querySelector('.icon-close');
            iconoCerrar.addEventListener('click', () => {
                const confirmarEliminar = window.confirm(`¿Quitar "${producto.titulo}" del carrito?`);

                if (confirmarEliminar) {
                    cantidadProductos -= producto.cantidad;
                    total -= producto.precio;

                    contadorProductos.innerText = cantidadProductos;
                    totalPagar.innerText = `$${total.toFixed(2)}`;

                    cartProduct.remove();
                }
            });
        }
    });
});

iconoCarrito.addEventListener('click', () => {
    // Mostrar/ocultar el contenedor de productos del carrito solo si hay productos
    if (cantidadProductos > 0) {
        containerCartProducts.classList.toggle('hidden-cart');
    }
});

btnPagar.addEventListener('click', () => {
    // Puedes añadir la lógica de pago aquí, por ejemplo, redireccionar a una página de pago
    alert(`Total a pagar: $${total.toFixed(2)}`);
});