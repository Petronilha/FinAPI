const { v4: uuidv4} = require('uuid')

const customers = []

const create = (request, response) => {
  const { name, cpf } = request.body

  const customerAlreadyExist = customers.some(customer => customer.cpf === cpf)

  if(customerAlreadyExist) {
    return response.status(401).json({message: 'Customer already exists'})
  }

  customers.push({
    cpf,
    name,
    id:uuidv4(),
    statement: []
  })

  return response.status(201).json(customers)
}


const account = (request, response) => {
  const { customer } = request

  return response.status(201).json(customer)
}

const update = (request, response) => {
  const { name } = request.body
  const { customer } = request

  customer.name = name

  return response.status(201).send()
}


const remove = (request, response) => {
  const { customer } = request 

  customers.splice(customer, 1)

  return response.status(201).json(customers)
}



module.exports = {
  create,
  customers,
  account,
  update,
  remove
}