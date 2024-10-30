const User = require('../models/User')

const getUserById = async (id) => { 
  if(!id) return null
  const user = await User.findById(id)
  return user
}

 module.exports = getUserById