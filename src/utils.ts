const minMantissa = 1000000000000000n
const maxMantissa = 9999999999999999n
const minExponent = -96
const maxExponent = 80
export const one = make_xfl(-15, 1000000000000000n)

export function make_xfl(_exponent: bigint | number | string, _mantissa: bigint | number | string) {
  // convert types as needed
  let exponent = BigInt(_exponent)
  let mantissa = BigInt(_mantissa)

  // canonical zero
  if (mantissa === 0n) return 0n

  // normalize
  const is_negative = mantissa < 0
  if (is_negative) mantissa *= -1n

  while (mantissa > maxMantissa) {
    mantissa /= 10n
    exponent++
  }
  while (mantissa < minMantissa) {
    mantissa *= 10n
    exponent--
  }

  // canonical zero on mantissa underflow
  if (mantissa === 0n) return 0n

  if (exponent < minExponent) {
    mantissa = 0n
    exponent = 0n
    return 0n
  }

  // under and overflows
  if (exponent > maxExponent || exponent < minExponent) throw new Error('XFL overflow')

  exponent += 97n

  let xfl = !is_negative ? 1n : 0n
  xfl <<= 8n
  xfl |= BigInt(exponent)
  xfl <<= 54n
  xfl |= BigInt(mantissa)

  return xfl
}

export function validateXFL(xfl: bigint) {
  if (xfl < 0n) throw new Error('Invalid XFL')

  if (xfl === 0n) return

  const mantissa = get_mantissa(xfl)
  const exponent = get_exponent(xfl)

  if (mantissa < minMantissa || mantissa > maxMantissa || exponent > maxExponent || exponent < minExponent)
    throw new Error('Invalid XFL')
}

export function get_exponent(xfl: bigint) {
  if (xfl < 0n) throw new Error('Invalid XFL')
  if (xfl === 0n) return 0
  return Number(((xfl >> 54n) & 0xffn) - 97n)
}

export function get_mantissa(xfl: bigint) {
  if (xfl < 0n) throw new Error('Invalid XFL')
  if (xfl === 0n) return 0n
  return xfl - ((xfl >> 54n) << 54n)
}

export function is_negative(xfl: bigint) {
  if (xfl < 0n) throw new Error('Invalid XFL')
  if (xfl === 0n) return false
  return ((xfl >> 62n) & 1n) === 0n
}
