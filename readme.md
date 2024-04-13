# 1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos (1 año humano = 7 años perrunos)

El resultado debe ser una lista igual a la anterior pero con la edad
multiplicada por 7

La función map nos va a regresar una lista con el mismo número de
elementos que la lista original

La funcion dentro de la funcion map va a retornar el valor que queremos
que tenga cada elemento de la nueva lista

En este caso, queremos que cada elemento sea el valor de la propiedad
\"nombre\" de cada objeto de la lista original

# 2.- Necesitamos conocer la cantidad de canes que ya están vacunados

El resultado va a ser un numero, el total de perritos vacunados

La función forEach va a evaluar en cada elemento del arreglo si cumple
con la vacunación

Si esta vacunado lo agrega al total de perritos vacunados

# 3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:\"{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} \"

El resultado va a ser una lista con un string por cada perro

Usamos la función map

Tomamos todos los objetos de los canes

Evaluamos cada objeto

Por cada objeto evaluado se va a crear un string con el formato
\"{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} \"

# 4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista

Ya tenemos la edad de los perros en la lista

El valor de retorno será un numero

Usaremos el forEach para recorrer la lista de perros

En cada iteración sumaremos la edad de cada perro

Al final retornamos el resultado de la suma de las edades entre el
número de perros en la lista

# 5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad \"vacunado\" a \"si \|\| no\" ( si el valor viene en true, cambiarlo a \"Si\", si el valor viene en false, cambiarlo a \"No\")

El resultado debe ser una lista con los mismos objetos de la lista
original, pero con el valor de la propiedad \"vacunado\" cambiado a
\"Si\" o \"No\"

Usamos la funcion map

Tomamos todos los objetos de los canes

Evaluamos cada objeto

Si la propiedad vacunado es true, cambiamos el valor a \"Si\"

Si la propiedad vacunado es false, cambiamos el valor a \"No\"

# 6.- Necesitamos una nueva lista con únicamente el nombre de cada can

El resultado debe ser una lista de puros strings con los nombres de los
canes

La función map nos va a regresar una lista con el mismo número de
elementos que la lista original

La funcion dentro de la funcion map va a retornar el valor que queremos
que tenga cada elemento de la nueva lista

En este caso, queremos que cada elemento sea el valor de la propiedad
\"nombre\" de cada objeto de la lista original
