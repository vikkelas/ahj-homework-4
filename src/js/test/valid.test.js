/* eslint-disable linebreak-style */
import {
  luhnAlgorithm,
  checkPaySystem,
} from '../function';

test.each([
  ['6011131243803506', true],
  ['6011854669880288360', true],
  ['3545500636344124', true],
  ['5434584545545', false],
  ['601113124380eweqww', false],
  ['601117454538573847583475', false],
])(('should check the card for value'),
  (card, expected) => {
    const result = luhnAlgorithm(card);
    expect(result).toBe(expected);
  });

test.each([
  ['4485530158115263', 'visa'],
  ['6011131243803506', 'discover'],
  ['5284092138910198', 'mastercard'],
  ['3545500636344124', 'jsb'],
  ['36347053334036', 'diners-club'],
  ['341661005421240', 'american-express'],
  ['2221009550064653', 'mir'],
  ['000032100020300', null],
])(('should check the card for value'),
  (card, expected) => {
    const result = checkPaySystem(card);
    expect(result).toBe(expected);
  });
