const getBalance = require('./middlewares/balance')

const withdraw = (request, response) => {
  const { amount } = request.body
  const { customer } = request

  const balance = getBalance(customer.statement)

  if(balance < amount){
    return response.status(400).json({message: 'Insufficient founds!'})
  }

  const statementOperation = {
    amount,
    create_data: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation)

  return response.status(201).send()
}

module.exports = withdraw