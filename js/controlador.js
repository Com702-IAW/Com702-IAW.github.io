/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var jsonComponentes, jsonCarrito;

//ver de usar canvas - > pdf
//hacer botom reset, borrar fotos y vaciar jsonCarrito
//collapse, buscar propiedad de que este uno solo abierto

$(function () {
    var estilo = localStorage.getItem("Estilo");
    if (estilo !== null)
        $("#linkestilo").attr("href", estilo);
    mostrarAnterior();
    var arreglo = ordenarComponentes();
    mostrar(arreglo);
});

$(document).ready(function () {
    $("#estilo1").click(function () {
        $("#linkestilo").attr("href", "css/estilo2.css");
        localStorage.setItem("Estilo", "css/estilo2.css");
    });
});

$(document).ready(function () {
    $("#estilo2").click(function () {
        $("#linkestilo").attr("href", "css/estilo1.css");
        localStorage.setItem("Estilo", "css/estilo1.css");
    });
});

function ordenarComponentes() {
    var index, index1, cont;
    cont = 0;
    var arreglo = new Array();

    for (index = 0; index < jsonComponentes.length; ++index) {
        var objet = jsonComponentes[index];
        for (index1 = 0; index1 < objet.length; ++index1) {
            var objeto = objet[index1];
            objeto.id = index;      //para ubicar en primer arreglo en json
            objeto.id2 = index1;    //para ubicar en segund arreglo en json (dentro de tipo de componente)
            objeto.id3 = cont;      //para ubicar en el arreglo nuevo creado con todos los componentes
            //        objeto.pedido = false;
            arreglo[cont] = objeto;
            ++cont;
        }
    }
    return arreglo;
}

function actualizarPedido(componente) {
    jsonCarrito[componente.id] = componente;
    $("#imagen" + componente.id).attr("src", componente.imagen);
    var total = computarTotal();
	$("#preciototal").text("El precio total es: $" + total);

}

function computarTotal() {
    var total, index, cant;
    total = 0;
    cant = 0;

    for (index = 0; index < jsonCarrito.length; ++index) {
        var lala2 = jsonCarrito[index];
        if (lala2 !== null) {
            total = total + lala2.precio;
            ++cant;
        }
    }	
	$("#carrito").text("Items: " + cant);
	localStorage.setItem("PedidoAnterior",JSON.stringify(jsonCarrito));

	return total;
}

function mostrarAnterior() {
    var carritoAnterior = localStorage.getItem("PedidoAnterior");
    if (carritoAnterior !== null) {
        var index,cant,precio;
		cant = 0;
		precio = 0;
        var obj = JSON.parse(carritoAnterior);
        for (index = 0; index < obj.length; ++index) {
            var objeto = obj[index];
            if (objeto !== null){
				jsonCarrito[index] = objeto;
				$("#imagen" + index).attr("src", objeto.imagen);
				++cant;
				precio+=objeto.precio;
			}
        }
		$("#carrito").text("Items: " + cant);
		$("#preciototal").text("El precio total es: $" + precio);

    }
}


