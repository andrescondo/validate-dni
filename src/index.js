const { ecuador, colombia, chile } = require("./utils/utils");

/** Validate DNI
 *
 * @param dni String number the identification
 * @param country String Country code
 * @param message String Message in case the error
 * 
 * */
module.exports.validateDNI = async (dni, country, message) => {
    let err = new Error();
    err.code = 400;

    if(!dni){
      err.message = "You must add the identification number";
      throw err;
    }

    if(typeof(dni) !== 'string'){
        err.message = `This value must be of type string: ${dni}`;
        throw err;
    }

    country = country.toLowerCase();


    switch (country) {
        case 'ec':
            ecuador(dni, message)
            break;
        case 'co':
            colombia(dni, message)
            break;
        case 'cl':
            chile(dni, message)
            break;
        case 'pe':
            chile(dni, message)
            break;

        default:
            err.message = "you must add the country code valid";
            throw err;
    }




    // if(!ObjectId.isValid(id)){
    //   err.message = message ? message : "the ID is wrong";
    //   throw err;
    // }

    return;
}