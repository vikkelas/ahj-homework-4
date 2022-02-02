/* eslint-disable linebreak-style */
export function luhnAlgorithm(value) {
  const number = value.replace(/\D/g, '');
  let nCheck = 0;
  let bEven = false;
  for (let n = number.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(number.charAt(n), 10);
    // eslint-disable-next-line no-cond-assign
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}

export function checkPaySystem(value) {
  if (/^2/.test(value)) {
    return 'mir';
  }
  if (/^3[47][0-9]{13}$/.test(value)) {
    return 'american-express';
  }
  if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(value)) {
    return 'mastercard';
  }
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(value)) {
    return 'visa';
  }
  if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(value)) {
    return 'diners-club';
  }
  if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(value)) {
    return 'discover';
  }
  if (/^(?:2131|1800|35\d{3})\d{11}$/.test(value)) {
    return 'jsb';
  }
  return null;
}
