const caja1 = document.getElementById('caja1');
const caja2 = document.getElementById('caja2');
const caja3 = document.getElementById('caja3');
const container = document.getElementById('contenedor');

const boton = document.querySelector('#cambiar');
boton.addEventListener("click", function(){
    container.style.display = "block";
    caja1.style.backgroundColor = "red";
    caja1.style.height = "100px";
    caja1.style.border = "2px solid orange";
    caja2.style.backgroundColor = "red";
    caja2.style.width = "100%";
    caja2.style.height = "100px";
    caja2.style.border = "2px solid orange";
    caja3.style.backgroundColor = "red";
    caja3.style.width = "100%";
    caja3.style.height = "200px";
    caja3.style.border = "2px solid orange";
})

const btn = document.querySelector('#volver');
btn.addEventListener("click", function(){
    container.style.display = "flex";
    caja1.style.backgroundColor = "orangered";
    caja1.style.height = "100px";
    caja1.style.border = "2px solid black";
    caja2.style.backgroundColor = "orangered";
    caja2.style.width = "60%";
    caja2.style.height = "400px";
    caja2.style.border = "2px solid black";
    caja3.style.backgroundColor = "orangered";
    caja3.style.width = "35%";
    caja3.style.height = "400px";
    caja3.style.border = "2px solid black";
})