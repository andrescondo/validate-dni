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
  
    it('should validate Colombian DNI correctly', async () => {
      const validDni = '1234567890'; // Un ID de Colombia válido
      await expect(validateDNI(validDni, 'co')).resolves.toBeUndefined();
    });
  
    it('should validate Chilean RUT correctly', async () => {
      const validRut = '12345678-5'; // Un RUT de Chile válido
      await expect(validateDNI(validRut, 'cl')).resolves.toBeUndefined();
    });
  
    it('should validate Argentine DNI correctly', async () => {
      const validDni = '12345678'; // Un DNI de Argentina válido
      await expect(validateDNI(validDni, 'ar')).resolves.toBeUndefined();
    });
  
    it('should validate Salvadoran DUI correctly', async () => {
      const validDui = '12345678'; // Un DUI de El Salvador válido
      await expect(validateDNI(validDui, 'sv')).resolves.toBeUndefined();
    });
  });