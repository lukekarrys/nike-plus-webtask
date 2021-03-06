'use latest'

const request = require('request')
const qs = require('qs')
const _ = require('lodash')

const URI_BASE = 'https://api.nike.com/v1'
const PATHS = {
  'ACTIVITIES': '/me/sport/activities'
}

module.exports = (ctx, cb) => {
  const {data} = ctx

  const params = _.assign({access_token: data.TOKEN}, _.omit(data, 'TOKEN'))
  const fetchUrl = `${URI_BASE}${PATHS.ACTIVITIES}?${qs.stringify(params)}`

  request(fetchUrl, (error, response, body) => {
    const jsonBody = JSON.parse(body)
    if (!error && response.statusCode === 200) {
      cb(null, jsonBody)
    } else {
      const error = (jsonBody.errors || [])[0]
      const message = error ? error.message : 'An unknown error occurred'
      cb(new Error(`${response.statusCode}: ${message}`))
    }
  })
}
