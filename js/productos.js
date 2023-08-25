//Lista de productos
fetch('/json/productos.json')
.then((res) => res.json())
.then((json) => console.log(json));