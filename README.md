# Validate DNI
**Indice**
- [Spanish](#español)
- [English](#english)



## English
## Description
This is a library that allows us to validate identity credentials, normally known as cedulas, DNI, etc.

using vanila javascript, the development of it began, in order to help various developments directly and avoid searching in different places, and it is within the reach of the community.

Being an open source project, they are invited to participate and be able to add the validations for their respective countries, and thus be able to give this library a greater reach.


## Installation
````
$ npm i validate-dni --save
````


## Case use

````
const { validateDNI } = require('validate-dni');

await validateDNI(dni, codeCountry, message);
````
 
**Required**
</hr>
The dni is the identification number to be validated, which is entered as a string for later use.

The codeCountry is the initials of the countries that are currently validated for verification. The format **ISO 3166-1 ISO 3166-1
alpha2** is being used for country codes.


**Optional**
</hr>
The message helps us to customize the error message and have more control over what is going to be shown to the user.
</br>
</br>

## Code allowed and status
|Country  | Code       | Status   |
|---------|------------|----------|
|Ecuador  | ec         | Ok       |
|Chile    | cl         | Beta     |
|Peru     | pe         | Beta     |
|Colombia | co         | Beta     |
Nota: soon more countries

</br>

### Internal flow

To increase the speed of the response, a switch statement is used, which reduces the execution time of if/else, in addition that each of the cases calls the previously developed functions.

Each function is focused on the validation of a specific country, which has its own structure.

</br>
</hr>



## Español
## Descripción
Esta es una libreria que nos permite la validación de las credenciales de identidas, normalmente conocidas como cedulas, DNI, etc.

Usando javascript vanila se comenzo con el desarrollo de la misma, para así poder ayudar a diversos desarrollos de manera directa y evitar el buscar en diversos lados, y este al alcance de la comunidad.

Al ser proyecto de codigo abierto, estás invitados a participar y poder ir añadiendo las validaciones para sus respectivos paises, y así poder darle mayor alcance a esta librería.

## Instalación
````
$ npm i validate-dni --save
````


## Ejemplo de uso

````
const { validateDNI } = require('validate-dni');

await validateDNI(dni, codigoPais, mensaje);
````
 
**Requerido**
</hr>
El dni, es el número de identificación a validar, el cúal ingresa como string para su posterior uso.

</br>
El códigoPaís son las iniciales de los paises que actualmente están validados para su comprobación. Se esta usando el formato **ISO 3166-1
alpha2** para los códigos de los países.


</br>

**Opcional**
</hr>
El mensaje nos sirve para personalizar el mensaje de error y tener mas control de que se le va a mostrar al usuario.

</br>
</br>

## Códigos permitidos y estado
|País     | Código     | Estado   |
|---------|------------|----------|
|Ecuador  | ec         | Ok       |
|Chile    | cl         | Beta     |
|Peru     | pe         | Beta     |
|Colombia | co         | Beta     |
Nota: Pronto más paises

</br>
</br>

### Flujo Interno

Para aumentar la velocidad de la respuesta, se usa una sentencia switch, con la cual se reduce el tiempo de ejecución de if/else, además que cada uno de los casos llama las funciones previamente desarrolladas.

Cada función va enfocada en la validación de un país especifico, el cual tiene su estructura propia.

