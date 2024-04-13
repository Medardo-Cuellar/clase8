const canes = [
  {
    nombre: "Rex",
    tipo: "Perro",
    edad: 4,
    vacunado: true,
    direccion: {
      calle: "Calle del Parque",
      numero: 23,
      colonia: "San José",
      codigoPostal: 78900,
    },
  },
  {
    nombre: "Bella",
    tipo: "Perro",
    edad: 6,
    vacunado: true,
    direccion: {
      calle: "Avenida Libertad",
      numero: 56,
      colonia: "El Bosque",
      codigoPostal: 78500,
    },
  },
  {
    nombre: "Max",
    tipo: "Perro",
    edad: 3,
    vacunado: false,
    direccion: {
      calle: "Callejón del Puente",
      numero: 12,
      colonia: "Villa Hermosa",
      codigoPostal: 78850,
    },
  },
  {
    nombre: "Rocky",
    tipo: "Perro",
    edad: 2,
    vacunado: false,
    direccion: {
      calle: "Camino Real",
      numero: 34,
      colonia: "Las Palmas",
      codigoPostal: 78600,
    },
  },
];



/* 1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )

        el resultado debe ser una lista igual a la anterior pero con la edad multiplicada por  7
        la funcion map nos va a regresar una lista con el mismo número de elementos que la lista original
        la funcion dentro de la funcion map va a retornar el valor que queremos que tenga cada elemento de la nueva lista
        en este caso, queremos que cada elemento sea el valor de la propiedad "nombre" de cada objeto de la lista original

    
*/
const ageOfDogs = (dogList) => {
  return dogList.map((dogs) => {
    return {...dogs, edad: dogs.edad * 7}
  })
}

/* 2.- Necesitamos conocer la cantidad de canes que ya estan vacunados

        
el resultado va a ser un numero
la funcion forEach va a evaluar en cada elemento del arreglo si cumple con la vacunacion
si esta vacunado lo agrega al total de perritos vacunados
si no lo esta no lo agrega
    
*/

const getVaccinedDogs = (dogList) => {
  let vaccinatedDogs = 0
  dogList.forEach((dog) => {
    if(dog.vacunado === true)
    {
      vaccinatedDogs++
    }
  })
  return vaccinatedDogs
}


/* 
3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
"{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} " 
  
el resultado va a ser una lista con un string por cada perro
usamos la funcion map
tomamos todos los objetos de los canes
evaluamos cada objeto
  retornamos un string con el formato "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    

*/

const dogAddress = (dogList) => {
  return dogList.map((dog) => {
    return `${dog.nombre}: ${dog.direccion.calle} #${dog.direccion.numero}, ${dog.direccion.colonia}, ${dog.direccion.codigoPostal}`
  })
}


/* 
  4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
Ya tenemos la edad de los perros en la lista
el valor de retorno sera un numero
usaremos el forEach para recorrer la lista de perros
en cada iteracion sumaremos la edad de cada perro
al final retornamos el resultado de la suma de las edades entre el numero de perros en la lista

*/

const getAverageAge = (dogList) => {
  let totalAge = 0
  dogList.forEach((dog) => {
    totalAge += dog.edad
  })
  return totalAge / dogList.length
}

/* 5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")

el resultado debe ser una lista con los mismos objetos de la lista original, pero con el valor de la propiedad "vacunado" cambiado a "Si" o "No"
usamos la funcion map
tomamos todos los objetos de los canes
evaluamos cada objeto
  si la propiedad vacunado es true, cambiamos el valor a "Si" 
  si la propiedad vacunado es false, cambiamos el valor a "No"
        

*/

const vaccinatedDogs = (dogList) => {
  return dogList.map((dog) => {
    if(dog.vacunado === true)
    {
      return {...dog, vacunado: "Si"}
    }
    else
    {
      return {...dog, vacunado: "No"}
    }
  })
}

/* 6.- Necesitamos una nueva lista con únicamente el nombre de cada can

el resultado debe ser una lista de puros strings con los nombres de los canes
la funcion map nos va a regresar una lista con el mismo número de elementos que la lista original
la funcion dentro de la funcion map va a retornar el valor que queremos que tenga cada elemento de la nueva lista
en este caso, queremos que cada elemento sea el valor de la propiedad "nombre" de cada objeto de la lista original

    
*/

const dogNameList = (dogList) => {
    return dogList.map((dog) => {
        return dog.nombre;
    });
}


console.log(ageOfDogs(canes));
console.log(getVaccinedDogs(canes));
console.log(dogAddress(canes));
console.log(getAverageAge(canes));
console.log(vaccinatedDogs(canes));
console.log(dogNameList(canes));