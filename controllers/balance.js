const getBalance = require('./middlewares/balance')

const balance = (request, response) => {
  const { customer } = request

  const balance = getBalance(customer.statement)

  return response.json(balance)
}

module.exports = balance