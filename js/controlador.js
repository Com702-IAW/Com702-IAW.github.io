/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var jsonComponentes, jsonCarrito;

$(function () {
    var arreglo = ordenarComponentes();
    mostrar(arreglo);
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
    computarTotal();
}

function computarTotal() {
    var total, index, cant;
    total = 0;
    cant = 0;

    for (index = 0; index < jsonCarrito.length; ++index) {
        var lala2 = jsonCarrito[index];
        if (lala2 !== null){
            total = total + lala2.precio;
            ++cant;
        }
    }

    $("#preciototal").text("El precio total es: $" + total);
    $("#carrito").text("Items: "+cant);


}


