const express = require('express')
const SwaggerParser = require('swagger-parser')
const { connector } = require('swagger-routes-express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('api.yml')
const api = require('./api')

const makeApp = async () => {
  const parser = new SwaggerParser()
  const apiDescription = await parser.validate('./api.yml')
  const connect = connector(api, apiDescription)
  const app = express()
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  // do any other app stuff,
  // such as wire in passport, use cors etc.
  // then connect the routes
  connect(app)
  // add any error handlers last
  return app
}
module.exports = makeApp