//Normal
let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = function(base) {
 return base * base * base;
};
alert("El cubo de " + base + " es " + cubo(numero));

//Arrow explícito
let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = (base) => {
 return base * base * base;
};
alert("El cubo de " + base + " es " + cubo(numero));

//Arrow implícito
let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = base => base * base * base;
alert("El cubo de " + base + " es " + cubo(numero));

//6.1
let arrayNotas = [1, 9, 10, 5, 4, 3, 3, 8, 2, 2, 7, 10, 6, 1, 0];
let notasAprobadas = arrayNotas.filter(notas => notas => 5);
console.log(notasAprobadas);
//6.2
let posicion = arrayNotas.findIndex(notas => notas == 5.5);
console.log(posicion)
//6.3
let todasAprobadas = arrayNotas.every(notas => notas => 5);
console.log(todasAprobadas);
//6.4
let arrayPalabras = ["casa", "promoción","mundial","magia","fantasía","hola","pedrito","ocho","chago","esternocleidomastoideo","ambulancia","sidecar"];
let menosSeis = arrayPalabras.filter(palabras => palabras.length < 6);
console.log(menosSeis);
//6.5
let terminaPorO = arrayPalabras.find(palabras => palabras == "o");
console.log(terminaPorO);
//6.6
let arrayTelefono = [666666666, 684205203, 653497621, 695241324, 656948213, 654189723, 638102645, 722134967];
let terminaEn3 = arrayTelefono.filter(telefono => telefono[8] == 3);
console.log(terminaEn3);

//7.1
let arrayPalabras = ["casa","abedul","coche","rio","alameda","alegría","portón"];
let arrayMayus = arrayPalabras.map(palabra => palabra[0].toLocaleUpperCase() +
palabra.slice(1));
console.log(arrayMayus);
    
let cadenaUnica = arrayPalabras.reduce((valorAnt,valorAct) => valorAnt + valorAct);
let cadenaUnica2 = arrayPalabras.reduce((valorAnt,valorAct) => valorAnt + valorAct,
"Concatenados: "); let arrayPalabras =
["casa","abedul","coche","rio","alameda","alegría","portón"];
console.log(cadenaUnica);
console.log(cadenaUnica2);

//7.2
let arrayNotas = [1, 9, 10, 5, 4, 3, 3, 8, 2, 2, 7, 10, 6, 1, 0];
let sum = arrayNotas.reduce((previous, current) => current += previous);
let avg = sum / arrayNotas.length;
console.log(avg);

//7.3
let arrayNotas = [1, 9, 10, 5, 4, 3, 3, 8, 2, 2, 7, 10, 6, 1, 0];
arrayNotas.reduce(function(a, b) {
    return Math.max(a, b);
});

//7.4
let arrayPrecios = [54.5, 60, 12.94, 44.3, 10.5, 2.75, 48.12, 4.32, 9.2, 6.6, 31.22, 13.13];
let gastoTotal = arrayPrecios.reduce((previous, current) => current + previous);
console.log(gastoTotal);

//7.5



let palabra = "Estetoscopio";
let arrayPalabras = ["casa","abedul","coche","rio","alameda","alegría","portón"];
let palabraCopia = palabra;
palabra = "Sauce";
let arrayCopia1 = arrayPalabras;
let arrayCopia2 = arrayPalabras.slice();
arrayCopia1[2] = "autobús";
arrayCopia2[3] = "bahía";
console.log(palabra);
console.log(arrayPalabras);
console.log(palabraCopia);
console.log(palabra);
console.log(arrayCopia1);
console.log(arrayCopia2);

//Ejercicio 1 orientado a objetos
let lenguajeProg = new Object();
lenguajeProg.nombre = "Java";
lenguajeProg.categoria = "Lenguaje orientado a objetos";
lenguajeProg.interpretado = false;
lenguajeProg.fechaCreacion = 1980;

lenguajeProg.setCategoria = () => categoria;
lenguajeProg.setInterpretado = () => interpretado;
lenguajeProg.setNombre = () => nombre;
lenguajeProg.setFechaCreacion = () => fechaCreacion;
lenguajeProg.getInfoLenguaje = () => "Nombre: " + lenguajeProg.nombre + "\nCategoría: " + lenguajeProg.categoria + "\nInterpretado: " + lenguajeProg.interpretado + "\nFecha: " + lenguajeProg.fechaCreacion;

//Ejercicio 2
class LenguajeProg {
    constructor(nombres, categoria, interpretado, fechaCreacion){
        this.nombre = nombre;
        this.categoria = categoria;
        this.interpretado = interpretado;
        this.fechaCreacion = fechaCreacion;
    }
    getCategoria(){
        return categoria;
    }
    setCategoria(categoria){
        this.categoria = categoria;
    }
    getInterpretado(){
        return interpretado;
    }
    setInterpretado(interpretado){
        this.interpretado = interpretado;
    }
    getNombre(){
        return nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getFechaCreacion(){
        return fechaCreacion;
    }
    setFechaCreacion(fechaCreacion){
        this.fechaCreacion = fechaCreacion;
    }
    getInfoLenguaje(){
        return "Nombre: " + lenguajeProg.nombre + "\nCategoría: " + lenguajeProg.categoria + "\nInterpretado: " + lenguajeProg.interpretado + "\nFecha: " + lenguajeProg.fechaCreacion;
    }
}