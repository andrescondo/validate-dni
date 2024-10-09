import { validateDniEcuador, validateDniColombia, validateDniChile, validateDniArgentina, validateDniElSalvador } from './../../src/utils/utils';

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

describe('validateDniColombia', () => {
  it('should throw an error if dni is not provided', async () => {
    await expect(validateDniColombia('', 'Error message')).rejects.toThrow('The DNI must have 10 digits');
  });

  it('should throw an error if dni is invalid', async () => {
    await expect(validateDniColombia('1234567890', 'Error message')).rejects.toThrow('The DNI is invalid');
  });

  it('should not throw an error if dni is valid', async () => {
    const validDni = '1234567890'; // Un ID de Colombia válido
    await expect(validateDniColombia(validDni)).resolves.toBeUndefined();
  });
});

describe('validateDniChile', () => {
  it('should throw an error if rut is not provided', async () => {
    await expect(validateDniChile('', 'Error message')).rejects.toThrow('Invalid RUT format');
  });

  it('should throw an error if rut is invalid', async () => {
    await expect(validateDniChile('12345678-9', 'Error message')).rejects.toThrow('The RUT is invalid');
  });

  it('should not throw an error if rut is valid', async () => {
    const validRut = '12345678-5'; // Un RUT de Chile válido
    await expect(validateDniChile(validRut)).resolves.toBeUndefined();
  });
});

describe('validateDniArgentina', () => {
  it('should throw an error if dni is not provided', async () => {
    await expect(validateDniArgentina('', 'Error message')).rejects.toThrow('The DNI must contain 7 or 8 numerical digits.');
  });

  it('should throw an error if dni is invalid', async () => {
    await expect(validateDniArgentina('1234567', 'Error message')).rejects.toThrow('The DNI is invalid');
  });

  it('should not throw an error if dni is valid', async () => {
    const validDni = '12345678'; // Un DNI de Argentina válido
    await expect(validateDniArgentina(validDni)).resolves.toBeUndefined();
  });
});

describe('validateDniElSalvador', () => {
  it('should throw an error if dui is not provided', async () => {
    await expect(validateDniElSalvador('', 'Error message')).rejects.toThrow('The DUI must contain 8 numerical digits.');
  });

  it('should throw an error if dui is invalid', async () => {
    await expect(validateDniElSalvador('12345678', 'Error message')).rejects.toThrow('The DNI is invalid');
  });

  it('should not throw an error if dui is valid', async () => {
    const validDui = '123456789'; // Un DUI de El Salvador válido
    await expect(validateDniElSalvador(validDui)).resolves.toBeUndefined();
  });
});


