import { encode, decode } from '../src/index'

describe('zero-width-text', () => {
  test('#encode&decode', () => {
    const text = 'tntntnt7'
    expect(text).toBe(decode(encode(text)))
  })
})