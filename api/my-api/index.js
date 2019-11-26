const Express = require('express')
const App = Express()
const PORT = 80

App.get('/clients', async function (req, res) {
    res.json({ user: 'test' })
})

App.listen(PORT, function () {
    console.log('Listening ' + PORT)
})