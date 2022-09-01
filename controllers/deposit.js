const deposit = (request, response) => {
  const { description, amount } = request.body
  const { customer } = request

  const statementOperation = {
    description,
    amount,
    create_date: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation)

  return response.status(201).json({message: 'Deposit completed!'})

}

module.exports = deposit