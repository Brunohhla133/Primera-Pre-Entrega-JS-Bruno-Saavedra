function categoria(menu){
    alert("Escogiste la categoría" + " " + menu)
}
let menu;
do{
    menu = parseInt(prompt("Seleccione la categoría que desee ver: \n 1.REMERA \n 2.PANTALÓN \n 3.CAMPERA \n 0. SALIR"))
    categoria(menu)
switch (menu) {
    case 0:
        alert("Gracias por elegirnos")
        break;
    case 1:
        let mensajeUno = "Estas son las remeras en stock: \n REMERA WHITE \n REMERA BLACK \n REMERA RED \n REMERA GOLD \n"
        alert(mensajeUno)
        break;
    case 2:
        let mensajeDos = "Estos son los pantalónes en stock: \n PANTALÓN JEEN \n PANTALÓN CARGO \n PANTALÓN JOGGER \n PANTALON BLACK "
        alert(mensajeDos)
        break;
    case 3:
        let mensajeTres = "Estas son las camperas en stock: \n CAMPERA OVERSIZE \n CAMPERA SKY \n CAMPERA DREAM \n CAMPERA WH"
        alert(mensajeTres)
        break
    default:
        alert("El número no es válido")
}
}while(menu !== 0)