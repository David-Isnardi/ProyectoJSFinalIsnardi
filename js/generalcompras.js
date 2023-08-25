//Estos son los códigos de los descuentos:
//70 OFF: coderhouse
//50 OFF: w4f358eklll
//30 OFF: 086d2f8

//Mensaje de entrada
Swal.fire({
  title: 'Bienvenido a mi proyecto de JavaScript👻',
  width: 600,
  padding: '3em',
})

//Descuento 70
let codigo70 = document.getElementById("botondescuento70");
codigo70.addEventListener("click", function (e){
e.preventDefault()

codigo70 = prompt("Ingrese un código");

while(codigo70 != "coderhouse"){
alert("¡Código inválido!")(ESC);
codigo70 = prompt("Ingrese un código");
}
    
if(codigo70){
    alert("¡Código válido!")
} 

var a70 = 20000;
var b70 = 70;

let cuentadescuento70 = a70 * b70 /100;

let d = cuentadescuento70;
document.getElementById("resultadodescuento70").innerHTML = d;
document.getElementById("resultadodescuento50").innerHTML ="";
document.getElementById("resultadodescuento30").innerHTML ="";
document.getElementById("preciodeproducto").innerHTML ="";
})
//_______________________________________________________________

//Descuento 50
let codigo50 = document.getElementById("botondescuento50");
codigo50.addEventListener("click", function (e){
e.preventDefault()

codigo50 = prompt("Ingrese un código");
    
while(codigo50 != "w4f358eklll"){
alert("¡Código inválido!")(ESC);
codigo50 = prompt("Ingrese un código");
}

if(codigo50){
alert("¡Código válido!")
}

var a50 = 20000;
var b50 = 50;

let cuentadescuento50 = a50 * b50 /100;

let d = cuentadescuento50;
document.getElementById("resultadodescuento50").innerHTML = d;
document.getElementById("resultadodescuento70").innerHTML = "";
document.getElementById("resultadodescuento30").innerHTML ="";
document.getElementById("preciodeproducto").innerHTML ="";
console.log(d);
})


//_______________________________________________________________

//Descuento 30
let codigo30 = document.getElementById("botondescuento30");
codigo30.addEventListener("click", function (e){
e.preventDefault()

codigo30 = prompt("Ingrese un código");
    
while(codigo30 != "086d2f8"){
alert("¡Código inválido!")(ESC);
codigo30 = prompt("Ingrese un código");
}

if(codigo30){
alert("¡Código válido!")
}

var a30 = 20000;
var b30 = 30;

let cuentadescuento30 = a30 * b30 /100;

let d = cuentadescuento30;
document.getElementById("resultadodescuento30").innerHTML = d;
document.getElementById("resultadodescuento50").innerHTML = "";
document.getElementById("resultadodescuento70").innerHTML = "";
document.getElementById("preciodeproducto").innerHTML ="";
console.log(d);
})
//___________________________________________________________

let precio = document.getElementById("preciodeproducto").textContent;

let botonretorno = document.getElementById("botonretorno");
botonretorno.addEventListener("click", function (e){
e.preventDefault()

document.getElementById("preciodeproducto").innerHTML =(precio);
document.getElementById("resultadodescuento30").innerHTML = "";
document.getElementById("resultadodescuento50").innerHTML = "";
document.getElementById("resultadodescuento70").innerHTML = "";
})
//_____________________________________________________________
class Usuarios {
    constructor(nombre, apellido, tarjeta, cctarjeta, vencimientotarjeta){
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.tarjeta = tarjeta),
      (this.cctarjeta = cctarjeta),
      (this.vencimientotarjeta = vencimientotarjeta);
    }
}

let comprarbotonjs = document.getElementById("comprarboton");
comprarbotonjs.addEventListener("click", function (e){
e.preventDefault()

const datospersonas = [];
datospersonas.push(casillanombre.value, casillaapellido.value, casillatarjeta.value, barraccv.value, casillavencimiento.value);
console.log(datospersonas);

  let nombre = document.getElementById("casillanombre").value
  let apellido = document.getElementById("casillaapellido").value
  let tarjeta = document.getElementById("casillatarjeta").value
  let ccvtarjeta = document.getElementById("barraccv").value
  let vencimientotarjeta = document.getElementById("casillavencimiento").value
  let usuarios = new Usuarios(nombre, apellido, tarjeta, ccvtarjeta, vencimientotarjeta)
  localStorage.setItem("usuarios", JSON.stringify(usuarios))

Swal.fire({
  position: 'center',
  icon: 'success',
  title: '¡Tus datos son válidos!',
  showConfirmButton: false,
  timer: 1500
})
})
