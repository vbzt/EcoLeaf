const Post = require('../models/Post')
const User = require('../models/User')
const getUserById = require('../helpers/get-user-by-id')
const { ObjectId } = require('mongodb')

class PostController {
  static async showPosts(req, res) {
    const postsData = await Post.find().sort('-createdAt')
    res.status(200).json({postsData})
  }


  static async create(req, res){

    const { title } = req.body
    const image = req.file ? req.file.filename : ''

    const user = await getUserById(req.session.userId)

    if(!title){
      res.status(422).json({message: 'O título do post é obrigatório!'})
      return
    }

    try{
      const post = new Post({title, image, user: {_id: user._id, email: user.email}})
      const newPost = await post.save()
      res.status(201).json({message: 'Post criado com sucesso!', newPost})
    }catch(e){
      res.status(500).json({message: 'Erro ao cadastra post! ', e})
    }
  }

  static async edit(req, res) {
    const id = req.session.userId
    const postId = req.params.id
    let newPlant = {}

    if(!ObjectId.isValid(postId)){ 
      res.status(422).json({message: 'ID Invalido'})
      return
    }

    const user = await getUserById(id)
    const post = await Post.findById(postId)

    const { title } = req.body
    const image = req.file ? req.file.filename : ''
    
   if(user._id.toString() !== post.user._id.toString()){
    res.status(401).json({message: 'Ocorreu um erro! Tente novamente mais tarde'})
    return
   }

   if(!title){
    res.status(422).json({message: 'O título do post é obrigatório!'})
    return
  }

  newPlant = {...req.body}
  newPlant.image = req.file ? req.file.filename : ''
                                                 
  await Post.findByIdAndUpdate(postId, newPlant)
  res.status(200).json({message: 'Post atualizado com sucesso', newPlant})

}

  static async remove(req, res){
    const id = req.session.userId
    const postId = req.params.id

    if(!ObjectId.isValid(postId)){ 
      res.status(422).json({message: 'ID Invalido'})
      return
    }

    const user = await getUserById(id)
    const post = await Post.findById(postId)
    
    if(user._id.toString() !== post.user._id.toString()){
     res.status(401).json({message: 'Ocorreu um erro! Tente novamente mais tarde'})
     return
    }

    await Post.findByIdAndDelete(postId)
    res.status(200).json({message: 'Post excluido com sucesso'})
  }


}

module.exports = PostController