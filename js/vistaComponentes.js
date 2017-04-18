/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function mostrar(arreglo) {
    var index2, cartel;
    cartel = "";
    for (index2 = 0; index2 < arreglo.length; ++index2) {
        var objeto = arreglo[index2];
        agregarComponente(objeto,index2);
        cartel = cartel + " " + (objeto.pedido);
    }

}

function agregarComponente(componente,indice) {
    var primerTex = $("<p></p>").text("Marca: " + componente.marca);
    var segundoTex = $("<p></p>").text("Precio: " + componente.precio);
    var tercerTex = $("<p></p>").text("Color: " + componente.color);
    var div = $("<div></div>").attr("class", "panel-body");
    var imagen = $("<img></img>").attr("src", componente.imagen);
    imagen.attr("align", "right");
    div.append(imagen);
    div.append(primerTex);
    div.append(segundoTex);
    div.append(tercerTex);
    var boton = $("<button></button>").text("Agregar al carrito");
    boton.attr("id", indice);
    boton.click(function() {
        actualizarPedido(componente);
    });
    div.append(boton);
    $("#collapse" + componente.id).append(div);
}