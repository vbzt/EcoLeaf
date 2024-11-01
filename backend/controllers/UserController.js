const User = require('../models/User')
const bcrypt = require('bcrypt')
const ObjectId = require('mongoose').Types.ObjectId

const formValidation = require('../helpers/form-validation')

 class UserController {

  static async register(req, res) {
    const { username, email, password } = req.body
    
    if (!formValidation(req, res)){
      return 
    }

    const userExists = await User.findOne({ username })
    if (userExists) {
      res.status(422).json({message: 'Por favor, utilize outro nome de usuario'})
      return
    }

    const emailExists = await User.findOne({ email })
    if (emailExists) {
      res.status(422).json({message: 'Por favor, utilize outro email'})
      return
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({ username, email, password: passwordHash })


      await user.save()
      req.session.userId = user._id
      req.session.save()
      res.status(201).json({ message: 'Usuário criado com sucesso', user })
    
  }

  static async login(req, res) {
    const { email, password } = req.body

    if (!email) {
      res.status(422).json({message:'O email é obrigatório'})
      return
    }

    if (!password) {
      res.status(422).json({message:'A senha é obrigatória'})
      return
    }

    const user = await User.findOne({ email })
    if (!user) {
      res.status(422).json({message:'Email ou senha incorretos'})
      return
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      res.status(422).json({message:'Email ou senha incorretos'})
      return
    }
    req.session.userId = user._id
    req.session.save()
    res.status(200).json({ message: 'Login efetuado com sucesso', id: req.session.userId, session: req.session})
  }

  static async checkUser(req, res) {
    let currentUser

    if (req.session && req.session.userId) {
      
      const id =  req.session.userId
      currentUser = await User.findById(id)
      if (currentUser) {
        currentUser.password = undefined
      }
    } else {
      currentUser = null
    }

    res.status(200).send({ currentUser, session: req.session })
  }

  static async getUserById(req, res) {
    const id = req.params.id
    const user = await User.findById(id).select('-password')

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado' })
      return
    }

    res.status(200).json({ user })
  }

  static async logout(req){ 
    req.session.destroy()
    res.status(200).json({ message: 'Logout realizado com sucesso' })
  }

}

module.exports = UserController