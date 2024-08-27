const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
/* Ejercicio 1: Las pizzas que tengan un id impar. */
// Filtramos las pizzas que tienen un id impar
const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
// Imprimimos el nombre de cada pizza con id impar
pizzasIdImpar.forEach(pizza => {
  console.log("La pizza con un id impar es " + pizza.nombre);
}); 


/* Ejercicio 2: ¿Hay alguna pizza que valga menos de $600?*/
// Filtramos las pizzas que valen menos de 600
const pizzasBaratas = pizzas.filter(pizza => pizza.precio < 600);
// Verificamos si hay alguna pizza que cumple la condición
if (pizzasBaratas.length > 0) {
  // Imprimimos el nombre de las pizzas que valen menos de 600 pesos
  pizzasBaratas.forEach(pizza => {
    console.log("La pizza que vale menos de 600 pesos es: " + pizza.nombre);
  });
} else {
  console.log("No hay pizzas que valgan menos de 600 pesos.");
} 

/* EJercicio 3: El nombre de cada pizza con su respectivo precio. */
pizzas.forEach(pizza => console.log("La pizza " + pizza.nombre + ", tiene un valor de " + pizza.precio));

/* Ejercicio 4: Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. */
pizzas.forEach(pizza => {
  console.log("Ingredientes de la pizza " + pizza.nombre + ":");
  pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
});
