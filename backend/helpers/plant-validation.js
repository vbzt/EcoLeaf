const plantValidation = (req,res) => {
  const { name, cientific } = req.body
  const image = req.file

  if(!name) {
    res.status(422).json({message: 'O nome popular da planta é obrigatório!'})
    return false
  }
  if(!cientific) {
    res.status(422).json({message: 'O nome científico da planta é obrigatório!'})
    return false
  }
  if(!image){
     res.status(422).json({message: 'A foto da planta é obrigatória!'})
     return false
  }

  return true
}

module.exports = plantValidation