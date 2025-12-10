
console.log("StreetN2K cargado correctamente");
// Lista de productos
const productos = [
    { id: 1, nombre: "Camiseta N2K", precio: 55000, imagen: "imagen/producto1.jpg" },
    { id: 2, nombre: "Pantalón Cargo", precio: 120000, imagen: "imagen/producto2.jpg" },
    { id: 3, nombre: "Gorro Street", precio: 30000, imagen: "imagen/producto3.jpg" }
];

let carrito = [];


// ----------------------
// MOSTRAR PRODUCTOS
// ----------------------
function mostrarProductos() {
    const contenedor = document.getElementById("lista-productos");

    if (!contenedor) return;

    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${p.imagen}" class="card-img-top img-fluid">
                    <div class="card-body text-center">
                        <h5>${p.nombre}</h5>
                        <p>$${p.precio}</p>
                        <button class="btn btn-dark" onclick="agregarCarrito(${p.id})">Añadir</button>
                    </div>
                </div>
            </div>
        `;
    });
}


// ----------------------
// AGREGAR AL CARRITO
// ----------------------
function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    guardarCarrito();
}


// ----------------------
// MOSTRAR CARRITO
// ----------------------
function mostrarCarrito() {
    const cuerpo = document.getElementById("carrito-body");
    const totalTexto = document.getElementById("total");

    if (!cuerpo) return;

    cuerpo.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        cuerpo.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>$${item.precio}</td>
                <td><button class="btn btn-danger" onclick="eliminarCarrito(${index})">X</button></td>
            </tr>
        `;
        total += item.precio;
    });

    totalTexto.textContent = total;
}


// ----------------------
// ELIMINAR PRODUCTO
// ----------------------
function eliminarCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
}


// ----------------------
// GUARDAR EN LOCALSTORAGE
// ----------------------
function guardarCarrito() {
    localStorage.setItem("carritoN2K", JSON.stringify(carrito));
    mostrarCarrito();
}


// ----------------------
// CARGAR CARRITO
// ----------------------
function cargarCarrito() {
    const data = localStorage.getItem("carritoN2K");
    if (data) carrito = JSON.parse(data);
}


// Inicialización
cargarCarrito();
mostrarProductos();
mostrarCarrito();
