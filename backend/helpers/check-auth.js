const checkAuth = (req, res, next) => { 
  const userId = req.session.userId

  if (!userId) {
    res.status(401).json({ message: 'Usuário não autenticado. Por favor, faça login.' })
    return
  }

  next()
}

module.exports = checkAuth
