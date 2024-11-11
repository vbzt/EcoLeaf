const formValidation = (req,res) => {

  const {username, email, password, confirmPassword} = req.body

  if (!username || username.trim() === '') {
    res.status(422).json({ message: "O nome de usuário é obrigatório!" })
    return false
  }
  
  const userRegex = /^[a-zA-Z0-9_]+$/
  
  if (!userRegex.test(username)) {
    res.status(422).json({ message: "O nome de usuário deve conter apenas letras e números!" })
    return false
  }
  
  if (username.length < 3 || username.length > 20) {
    res.status(422).json({ message: "O nome de usuário deve conter de 3 a 20 caracteres!" })
    return false
  }
  
  if (!email || email.trim() === '') {
    res.status(422).json({ message: "O email é obrigatório!" })
    return false
  }

  if(!password || password.trim() === '') {
    res.status(422).json({message: "A senha é obrigatória!"})
    return false
  }
  
  if(password.length < 8){
    res.status(422).json({message: "A senha deve ter no mínimo 8 caracteres"})
    return false
  }
  if(!confirmPassword) {
    res.status(422).json({message: "A confirmação de senha é obrigatória!"})
    return false
  }

  if(password !== confirmPassword){ 
    res.status(422).json({message: "A senha e a confirmação de senha devem ser iguais"})
    return
  }

  return true
}

module.exports = formValidation