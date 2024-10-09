import { validateDniEcuador } from './../../src/utils/utils';

describe('validateDniEcuador', () => {
  it('should throw an error if dni is not provided', async () => {
    await expect(validateDniEcuador('', 'Error message')).rejects.toThrow('The CI must have 10 digits');
  });

  it('should throw an error if dni is invalid', async () => {
    await expect(validateDniEcuador('1234567890', 'Error message')).rejects.toThrow('The CI is invalid');
  });

  it('should not throw an error if dni is valid', async () => {
    const validDni = '1710034065'; // Un ID de Ecuador válido
    await expect(validateDniEcuador(validDni)).resolves.toBeUndefined();
  });
});




