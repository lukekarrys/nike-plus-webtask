import test from 'tape'

// Override default require to allow for @x.y.z syntax
// Also, nike needs to use 'require' here instead of ES6
// import because of babel (I think)
require('webtask-require-version')
const nike = require('./nike-plus')

const {TOKEN} = process.env

test('Errors without a token', (t) => {
  nike({data: {}}, (err, json) => {
    t.ok(err, 'has an error')
    t.ok(err instanceof Error, 'is an instance of error')
    t.equal(err.message, '401: Invalid Access Token', 'message is a 401')
    t.notOk(json, 'has no body')
    t.end()
  })
})

if (TOKEN) {
  test('Returns data with a token', (t) => {
    nike({data: {TOKEN}}, (err, json) => {
      t.notOk(err, ' no error')
      t.ok(json, 'has data')
      t.ok(Array.isArray(json.data), 'data is an array')
      t.ok(json.data.length, 5, 'data has 5 items')
      t.end()
    })
  })
}
