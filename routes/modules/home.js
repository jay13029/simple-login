const express = require('express')
const router = express.Router()
const users = require('../../users')

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  let check = false
  let showMsg
  const user = users.find(user => user.email === req.body.email)
  if (user != null && user.password === req.body.password) {
    check = true
    showMsg = `Welcome back, ${user.firstName}!`
  }

  if (check) {
    res.render('welcome', { showMsg })
  } else {
    const message = 'Wrong email or password, please login again.'
    res.render('index', { message })
  }
})

module.exports = router
