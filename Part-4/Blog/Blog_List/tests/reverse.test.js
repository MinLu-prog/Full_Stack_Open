const {test} =  require('node:test')
const assert = require('node:assert')
const { resolve } = require('node:dns')

const reverse = require('../utils/for_testing').reverse

test('reverse of a ', () =>{
    const result = reverse('a')
    assert.strictEqual(result,'a')
})

test('reverse of a react',() =>{
    const result = reverse('react')
    assert.strictEqual(result,'tcaer')
})
test('reverse of saippuakauppias', () => {
  const result = reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})