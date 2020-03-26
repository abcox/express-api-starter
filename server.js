const express = require('express')
const app = express()
/* const swaggerUi = require('swagger-routes-express');
const swaggerDocument = require('./swagger.yaml');
 */
const SwaggerParser = require('swagger-parser');
const swaggerRoutes = require('swagger-routes-express')
/* 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */
//app.use('/api/v1', router);const makeApp = async () => {

const parser = new SwaggerParser()
const apiDescription = await parser.validate('api.yml')
const connect = swaggerRoutes(api, apiDescription)


app.get('/', (req, res) => {
    res.send('Test');
})

app.post('/', (req, res) =>{
    res.send('Test2')
})

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listing on port ${port}...`))
