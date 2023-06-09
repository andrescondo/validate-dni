

/** Validate DNI the Ecuador
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.ecuador = async (dni, message) => {
    const err = new Error();
    err.code = 400;

    // Eliminar posibles espacios en blanco y guiones
    dni = dni.replace(/\s|-/g, '');

    // Verificar si la cédula tiene 10 dígitos
    if (dni.length !== 10) {
        err.message = 'The CI must have 10 digits';
        throw err;
    }

    // Verificar si la cédula es válida utilizando el algoritmo de validación ecuatoriano
    const checkDigit = Number(dni[9]);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        let digit = Number(dni[i]);
        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    const result = 10 - (sum % 10);

    if ((result === 10 && checkDigit === 0) || result === checkDigit) {
        return;
    } else {
        err.message = message || 'The CI is invalid';
        throw err;
    }
}




/** Validate DNI the Colombia
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.colombia = async (dni, message) => {
    const err = new Error();
    err.code = 400;

    // Eliminar posibles espacios en blanco y guiones
    dni = dni.replace(/\s|-/g, '');

    // Verificar si la cédula tiene 10 dígitos
    if (dni.length !== 10) {
        err.message = 'The DNI must have 10 digits';
        throw err;
    }

    // Verificar si la cédula es válida utilizando el algoritmo de validación colombiano
    const coefficients = [71, 67, 59, 53, 47, 43, 41, 37, 29, 23];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        let digit = Number(dni[i]) * coefficients[i];
        sum += digit;
    }

    const result = sum % 11;
    const checkDigit = Number(dni[9]);

    if ((result === 0 && checkDigit === 0) || (result === 1 && checkDigit === 1) || (result > 1 && checkDigit === 11 - result)) {
        return;
    } else {
        err.message = message || 'The DNI is invalid';
        throw err;
    }
}



/** Validate DNI the Chile
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.chile = async (rut, message) => {
    const err = new Error();
    err.code = 400;

    rut = rut.replace(/\./g, '').replace('-', ''); // Remover puntos y guión

    var body = rut.slice(0, -1); // Obtener el body del RUT (sin el dígito verificador)
    var checkDigit = rut.slice(-1).toUpperCase(); // Obtener el dígito verificador (conviertiéndolo a mayúscula)

    // Validar formato del RUT
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rut)) {
        err.message = 'Invalid RUT format';
        throw err;
    }

    // Validar el dígito verificador
    var sum = 0;
    var multiple = 2;
    for (var i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body.charAt(i)) * multiple;
        multiple = multiple < 7 ? multiple + 1 : 2;
    }

    var resultado = sum % 11 == 1 ? 'k' : 11 - (sum % 11);
    if (resultado.toString().toUpperCase() !== checkDigit) {
        err.message = message || 'The RUT is invalid';
        throw err;
    }

    return;
}

/** Validate DNI the Peru
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.peru = async (dni, message) => {
    const err = new Error();
    err.code = 400;

    dni = dni.replace(/\./g, '').replace('-', ''); // Remover puntos y guión

    // Validar longitud del DNI
    if (dni.length !== 8) {
        err.message = 'The ID must have 8 digits';
        throw err;
    }

    // Validar que el DNI contenga solo dígitos numéricos
    if (!/^[0-9]+$/.test(dni)) {
        err.message = 'The DNI must contain only numeric digits';
        throw err;
    }

    // Validar el dígito verificador
    var sum = 0;
    var multiple = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    for (var i = 0; i < 8; i++) {
        sum += parseInt(dni.charAt(i)) * multiple[i];
    }

    var rest = sum % 11;
    var checkDigit = 11 - rest;
    if (checkDigit === 10) {
        checkDigit = 0;
    } else if (checkDigit === 11) {
        checkDigit = 1;
    }

    if (parseInt(dni.charAt(8)) !== checkDigit) {
        err.message = message || 'The DNI is invalid';
        throw err;
    }

    return;
}


/** Validate DNI the Argentina
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.argentina = async (dni, message) => {
    const err = new Error();
    err.code = 400;

    // Eliminar espacios en blanco y guiones del DNI
    dni = dni.replace(/\s/g, '').replace(/-/g, '');

    // Verificar que el DNI tenga 7 u 8 dígitos numéricos
    if (!/^\d{7,8}$/.test(dni)) {
        err.message = 'The DNI must contain 7 or 8 numerical digits.';
        throw err;
    }

    // Calcular el dígito verificador
    const number = parseInt(dni.substr(0, dni.length - 1), 10);
    const checkDigit = dni.substr(-1);
    const rest = number % 23;
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const verifyingLetter = letters.charAt(rest);

    // Comparar el dígito verificador calculado con el dígito verificador ingresado
    if (checkDigit !== verifyingLetter) {
        err.message = message || 'The DNI is invalid';
        throw err; 
    }

    return;
}



/** Validate DNI the El Salvador
 *
 * @param dni String number the identification
 * @param message String Message in case the error
 * 
 * */
module.exports.elSalvador = async (dui, message) => {
    const err = new Error();
    err.code = 400;

    // Eliminar espacios en blanco y guiones del dui
    dui = dui.replace(/\s/g, '').replace(/-/g, '');

    // Verificar que el dui tenga 7 u 8 dígitos numéricos
    if (!/^\d{8}$/.test(dui)) {
        err.message = 'The DUI must contain 8 numerical digits.';
        throw err;
    }

      // Obtener el número de registro y el dígito verificador
  const number = parseInt(dui.substr(0, 7), 10);
  const checkDigit = parseInt(dui.substr(-1), 10);


    // Calcular el dígito verificador esperado
    const expectedDigit  = 9 - ((7 * (number % 10) + 6 * Math.floor((number / 10) % 10) + 5 * Math.floor((number / 100) % 10) + 4 * Math.floor((number / 1000) % 10) + 3 * Math.floor((number / 10000) % 10) + 2 * Math.floor((number / 100000) % 10)) % 10);

    // Comparar el dígito verificador calculado con el dígito verificador ingresado
    if (checkDigit !== expectedDigit) {
        err.message = message || 'The DNI is invalid';
        throw err; 
    }

    return;
}