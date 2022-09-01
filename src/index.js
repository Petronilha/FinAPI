const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())


const indexRouter = require('../routes/index')
const depositRouter = require('../routes/deposit')
const statementRouter = require('../routes/statement')
const withdrawRouter = require('../routes/withdraw')
const balanceRouter = require('../routes/balance')


app.use('/account', indexRouter)
app.use('/deposit', depositRouter)
app.use('/statement', statementRouter)
app.use('/withdraw', withdrawRouter)
app.use('/balance', balanceRouter)



app.listen(port, () => {
  console.log('FinAPI running in port:', port)
})