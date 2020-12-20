const encode = content => [...[...content].map(cell => cell.charCodeAt().toString(2)).join(' ')]
  .map(cell => {
    if (cell === '0') return '\u200b'
    if (cell === '1') return '\u200c'
    return '\u200d'
  })
  .join('')

const decode = content => [...content].map(cell => {
    if (cell === '\u200b') return 0
    if (cell === '\u200c') return 1
    return ' '
  })
  .join('')
  .split(' ')
  .map(cell => String.fromCharCode(parseInt(cell, 2)))
  .join('')

  export default {
    encode,
    decode,
  }
  