import { Decimal } from 'decimal.js'
import { get_exponent, get_mantissa, one, make_xfl as util_make_xfl, validateXFL } from './utils'

export { one }

export function make_xfl(_exponent: bigint | number | string, _mantissa: bigint | number | string) {
  if (BigInt(_mantissa) === 0n) return 0n
  const xfl = util_make_xfl(_exponent, _mantissa)
  if (xfl === 0n) throw new Error('Invalid XFL')
  return xfl
}

export function add(a: bigint, b: bigint) {
  validateXFL(a)
  validateXFL(b)
  if (a === 0n) return b
  if (b === 0n) return a
  let man1 = BigInt(get_mantissa(a)) * (is_negative(a) ? -1n : 1n)
  let exp1 = get_exponent(a)
  let man2 = BigInt(get_mantissa(b)) * (is_negative(b) ? -1n : 1n)
  let exp2 = get_exponent(b)

  if (man1 === 0n) return b
  if (man2 === 0n) return a

  while (exp1 < exp2) {
    man1 /= 10n
    exp1++
  }

  while (exp2 < exp1) {
    man2 /= 10n
    exp2++
  }

  const man = man1 + man2
  const exp = exp1

  return util_make_xfl(exp, man)
}

export function sub(a: bigint, b: bigint) {
  return add(a, negate(b))
}

export function multiply(a: bigint, b: bigint) {
  validateXFL(a)
  validateXFL(b)
  if (a === 0n) return 0n
  if (b === 0n) return 0n
  let man1 = BigInt(get_mantissa(a)) * (is_negative(a) ? -1n : 1n)
  let exp1 = get_exponent(a)
  let neg1 = is_negative(a)
  const man2 = BigInt(get_mantissa(b)) * (is_negative(b) ? -1n : 1n)
  const exp2 = get_exponent(b)
  const neg2 = is_negative(b)

  man1 *= man2
  exp1 += exp2
  neg1 = neg1 !== neg2

  return util_make_xfl(exp1, man1)
}

export function div(a: bigint, b: bigint) {
  validateXFL(a)
  validateXFL(b)
  if (a === 0n) return 0n
  if (b === 0n) throw new Error('Division by zero')
  if (a === b) return one
  if (a === negate(b)) return negate(one)
  let man1 = BigInt(get_mantissa(a)) * (is_negative(a) ? -1n : 1n)
  let exp1 = BigInt(get_exponent(a))
  const man2 = BigInt(get_mantissa(b)) * (is_negative(b) ? -1n : 1n)
  const exp2 = BigInt(get_exponent(b))

  man1 *= 100000000000000000n
  man1 /= man2
  man1 += 5n
  exp1 -= exp2
  exp1 -= 17n

  return util_make_xfl(exp1, man1)
}

export function mulratio(xfl: bigint, roundup: bigint, numerator: bigint, denominator: bigint) {
  throw new Error('not implemented')
}

export function negate(xfl: bigint) {
  if (xfl === 0n) return 0n
  validateXFL(xfl)
  return xfl ^ (1n << 62n)
}

export function compare(a: bigint, b: bigint) {
  validateXFL(a)
  validateXFL(b)
  const is_a_negative = is_negative(a)
  const is_b_negative = is_negative(b)
  if (is_a_negative !== is_b_negative) return is_a_negative ? -1 : 1
  const man1 = BigInt(get_mantissa(a)) * (is_a_negative ? -1n : 1n)
  const exp1 = BigInt(get_exponent(a))
  const man2 = BigInt(get_mantissa(b)) * (is_b_negative ? -1n : 1n)
  const exp2 = BigInt(get_exponent(b))

  if (exp1 === exp2) {
    if (man1 === man2) return 0
    return man1 > man2 ? 1 : -1
  }
  if (exp1 > exp2) {
    return is_a_negative ? -1 : 1
  }
  return is_a_negative ? 1 : -1
}

export function invert(xfl: bigint) {
  return div(one, xfl)
}

export function is_zero(xfl: bigint) {
  return xfl === 0n
}

export function is_positive(xfl: bigint) {
  return ((xfl >> 62n) & 1n) === 1n
}

export function is_negative(xfl: bigint) {
  return ((xfl >> 62n) & 1n) === 0n
}

export function root(xfl: bigint, n: number) {
  validateXFL(xfl)
  if (xfl === 0n) return 0n
  if (n < 2) throw new Error('Invalid root')
  const man1 = get_mantissa(xfl) * (is_negative(xfl) ? -1n : 1n)
  const exp1 = get_exponent(xfl)
  if (is_negative(xfl)) throw new Error('Complex not supported')
  const bigint_man_exp = new Decimal(`${man1}e${exp1}`).pow(1 / n).toExponential(0)
  const [man, exp] = bigint_man_exp.split('e').map((n) => Number(n))
  return make_xfl(exp, man)
}

export function log(xfl: bigint) {
  validateXFL(xfl)
  if (xfl === 0n) throw new Error('Invalid XFL')
  const man1 = get_mantissa(xfl)
  const exp1 = get_exponent(xfl)
  if (is_negative(xfl)) throw new Error('Complex not supported')
  const bigint_man_exp = new Decimal(`${man1}`).log(10).plus(exp1).toExponential(15)
  const [man, exp] = bigint_man_exp.split('e').map((n) => Number(n))
  return make_xfl(exp - 15, man * 1000000000000000)
}

export function exponent(xfl: bigint) {
  return get_exponent(xfl)
}

export function mantissa(xfl: bigint) {
  return get_mantissa(xfl)
}
