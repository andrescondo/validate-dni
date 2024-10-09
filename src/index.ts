import { validateDniEcuador, validateDniColombia, validateDniChile, validateDniArgentina, validateDniElSalvador, validateDniPeru } from './utils/utils';

/** Validate DNI
 *
 * @param dni String number the identification
 * @param country String Country code
 * @param message String Message in case the error
 * 
 * */
export const validateDNI = async (dni: string, country: string, message?: string): Promise<void> => {
  const err = new Error();

  if (!dni) {
    err.message = "You must add the identification number";
    throw err;
  }

  if (typeof dni !== 'string') {
    err.message = `This value must be of type string: ${dni}`;
    throw err;
  }

  country = country.toLowerCase();

  switch (country) {
    case 'ec':
      await validateDniEcuador(dni, message);
      break;
    case 'co':
      await validateDniColombia(dni, message);
      break;
    case 'cl':
      await validateDniChile(dni, message);
      break;
    case 'pe':
      await validateDniPeru(dni, message); 
      break;
    case 'ar':
      await validateDniArgentina(dni, message);
      break;
    case 'sv':
      await validateDniElSalvador(dni, message);
      break;
    default:
      err.message = "You must add a valid country code";
      throw err;
  }

  return;
};
