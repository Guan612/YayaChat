const {APP_PORT} = require('./config/default')
const app = require('./app/index')

app.listen(8000, () => {
    console.log('server is running at http://localhost:' + APP_PORT)
})