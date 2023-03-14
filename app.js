const express = require('express')
const exphbs = require('express-handlebars')
const users = require('./users')

const port = 3000
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('', (req, res) => {
  let check = false
  let showMsg
  let user = users.find(user => user.email === req.body.email)
  if(user != null && user.password === req.body.password){
    check = true
    showMsg = `Welcome back, ${ user.firstName }!`
  }

  if(check){
    res.render('welcome', { showMsg })
  } else {
    let message = 'Wrong email or password, please login again.'
    res.render('index', { message })
  }
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})
