import { validateDNI } from './../src/index';

describe('validateDNI', () => {
    it('should throw an error if dni is not provided', async () => {
      await expect(validateDNI('', 'ec', 'Error message')).rejects.toThrow('You must add the identification number');
    });
  
    it('should throw an error if country code is invalid', async () => {
      await expect(validateDNI('1234567890', 'invalid', 'Error message')).rejects.toThrow('You must add a valid country code');
    });
  
    it('should validate Ecuadorian DNI correctly', async () => {
      const validDni = '1710034065'; // Un ID de Ecuador válido
      await expect(validateDNI(validDni, 'ec')).resolves.toBeUndefined();
    });
  

  });