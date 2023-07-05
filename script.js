let producto = prompt("1- Remera $4000\n2- Jean $6000\n3- Short $4700\n4- Campera $7500\n5- Buzo $8000\n0- Salir");
let totalGastado = 0;
let contadorProductos = 0;

while(producto != 0){

    switch (producto){
        case '1': 
            alert("Agregaste una remera al carrito");
            gastosEnElMomento(4000);
            contadorProductos += 1;
            break;

        case '2':
            alert("Agregaste un jean al carrito");
            gastosEnElMomento(6000);
            contadorProductos += 1;
            break;

        case '3':
            alert("Agregaste un short al carrito");
            gastosEnElMomento(4700);
            contadorProductos += 1;
            break;

        case '4':
            alert("Agregaste una campera al carrito");
            gastosEnElMomento(7500);
            contadorProductos += 1;
            break;

        case '5':
            alert("Agregaste un buzo al carrito");
            gastosEnElMomento(8000)
            contadorProductos += 1;
            break;

        default:
            alert("No existe ese producto. Intenta de nuevo.");
            break;
    }

    producto = prompt("1- Remera $4000\n2- Jean $6000\n3- Short $4700\n4- Campera $7500\n5- Buzo $8000\n0- Salir");
}

if(totalGastado > 0){
    let confirmacion = prompt("Desea realizar el pedido de " + contadorProductos + " prendas por un total de $" + totalGastado +"\n1- Si\n2- No");
    if (confirmacion == 1){
        alert("Pedido realizado con éxito.");
    }
    else {
        alert("Pedido cancelado. No se realizará ninguna compra.")
    }
}

function gastosEnElMomento(valorProducto){
    totalGastado += valorProducto;
    return alert("Llevas un total de $" + totalGastado);;
}