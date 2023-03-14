const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes')

const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(router)

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})
