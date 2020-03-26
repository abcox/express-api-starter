const makeApp = require('./makeApp')
makeApp()
  .then(app => app.listen(3000))
  .then(() => {
    console.log('Server started')
  })
  .catch(err => {
    console.error('caught error', err)
  })