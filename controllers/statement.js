const statement = (request, response) => {
  const { customer } = request

  return response.json(customer.statement)
}

const statementByDate = (request, response) => {
  const { date } = request.query
  const { customer } = request

  const dateFormat = new Date( date + '00:00' )

  const statement = customer.statement.filter(
    statement => 
      {statement.create_date.toDateString() ===
      new Date(dateFormat).toDateString()
  })
  
  return response.status(201).json(customer.statement)

}

module.exports = {
  statement,
  statementByDate
}