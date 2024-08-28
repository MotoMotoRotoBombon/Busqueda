function buscarElemento(arreglo, nombre) {
    return arreglo.includes(nombre) ? `${nombre} está en el arreglo` : `${nombre} no se encontró`;
}

console.log(buscarElemento(["Ana", "Juan", "Pedro"], "Juan")); // Muestra: "Juan está en el arreglo"
