// tipos de datos
// string (cadena)
"Hola mi nombre es Mariana"
'123'

// Operador unario
typeof -6.5
typeof 'hola chicos G18'


// number
8
9.81
// operadores aritmeticos
100+4*11;

(100+4)*11;

12345/250;

5%3;
7%2

// boolean - true / false

// Operadores comparativos
3>2
2>3
typeof(3>2)
// Estadar unicode
"Aard" < "Zord"
'Zeila' < '!na'

5 == 5

10 !== 'diez'



'5' + 1
'5' - 1

// variables


let age //declarar la variable
age = 25 //asginarle un valor

let age2 = 45 //declararla y asignarle su valor
age2


const name = 'Mariana'
name

// Concatenación (ES5) vs Template string (ES6)

'Hola, mi nombre es ' + name + 'y tengo ' + age + ' años'


// Template string template literals
const a = 5
const b = 10

console.log('5 + 10 = 15')

a + ' + ' + b + ' = ' + (a+b)

console.log(`${a} + ${b} = ${a+b}`)

// Funciones y tipos de funciones

// Función declarativa

function sumar (a, b) {
  let suma = a + b
  return suma
}

sumar(3, 4)

// Función expresiva

const sumarDosNumeros = function sumar (b, c) {
  return b + c
}

sumarDosNumeros(1, 2)

// Función anónima


const sumarDosNumeros1 = function (b=4, c=5) {
  return b + c
}

sumarDosNumeros1()

// Función que no retorna valores
const saludo = function () {
  return 'Hola'
};

saludo();

// Función flecha

const sumarDosNumeros3 = b => b + 2


sumarDosNumeros3(8)

// array



// tecnologias[3]
// tecnologias[0]

// métodos de array
// agregar elementos al final del arreglo push()

// tecnologias.push('GraphQL')

// tecnologias

// agregar elementos al inicio del arreglo unshift()


// tecnologias.unshift('Javascript')

// tecnologias

// spread operator - ...


// const nuevoArreglo = [...tecnologias, 'Nodejs']

// const nuevoArreglo1 = ['Typescript', ...tecnologias]

// nuevoArreglo
// nuevoArreglo1

// Eliminar elementos de un array

// Eliminar el último elemento del array - pop()

// tecnologias.pop()
// tecnologias


// Eliminar el primer elemento del array - shift()

// tecnologias.shift()
// tecnologias


// Eliminar una posición en específico - splice()


// tecnologias.splice(2, 2)

// tecnologias


// filter()
const tecnologias = [20, 30, true, 'React', 'Javascript']

const nuevoArray5 = tecnologias.filter(function(tech){
  return tech !== 'React'
})

nuevoArray5

const nuevoArray6 = tecnologias.filter(function(tech){
  return tech === 'React'
})

nuevoArray6

// Reemplazar elementos de un array
tecnologias[0] = 7

tecnologias

// map()

const nuevoArray8 = tecnologias.map(function(tech){
  if(tech === 'Javascript') {
    return 'HTML'
  } else {
    return tech
  }
})

nuevoArray8

// objetos {}

const libro = {
  autor: 'Borges', 
  genero: 'Policial', 
  año: 1990
}

libro.autor
libro.año


// Object.keys()

const todasLasPropiedades = Object.keys(libro)

todasLasPropiedades

// Object.values()

const todosLosValores = Object.values(libro)

todosLosValores

// length = devuelve la longitud de la cadena

const nombre = 'Aron'
console.log(nombre.length)

// toLowerCase() - minúscula

console.log(nombre.toLowerCase())

// toUpperCase() - mayúscula

console.log(nombre.toUpperCase())


// split() divide la cadena dada en subcadenas 

const frutas = 'platano, manzana, pera, sandia'

frutas.split(',')

// trim = elimina espacios en blanco al inicio y al final de la cadena

const fruta = ' platano '

fruta.trim()


function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal'
  } else if (letra.length >= 2) {
    return 'Dato incorrecto, muy largo el texto'
  } else {
    return 'Dato incorrecto'
  }
}

esVocal('e')
esVocal('x')
esVocal('ae')

























