const Post = require('../models/Post')
const User = require('../models/User')
const getUserById = require('../helpers/get-user-by-id')
const { ObjectId } = require('mongodb')

class PostController {
  static async showPosts(req, res) {
    try {
      const search = req.query.search || ''
      let postsData
      
      if (search) {
        postsData = await Post.find({ title: { $regex: search, $options: 'i' } }).sort('-updatedAt')
      } else {
        postsData = await Post.find().sort('-updatedAt')
      }
      
      res.status(200).json({ postsData })
    } catch (e) {
      res.status(500).json({ message: 'Erro ao buscar posts', error: e })
    }
  }
  


  static async create(req, res){

    const { title, description } = req.body
    const image = req.file ? req.file.filename : ''

    const user = await getUserById(req.session.userId)

    if(!title){
      res.status(422).json({message: 'O título do post é obrigatório!'})
      return
    }

    if(!description){
      res.status(422).json({message: 'A descrição do post é obrigatória!'})
      return
    }

  

    try{
      const post = new Post({title, description, image, user: {_id: user._id, email: user.email}})
      const newPost = await post.save()
      res.status(201).json({message: 'Post criado com sucesso!', newPost})
    }catch(e){
      res.status(500).json({message: 'Erro ao cadastra post! ', e})
    }
  }

  static async edit(req, res) {
    const id = req.session.userId
    const postId = req.params.id
    let newPost = {}

    if(!ObjectId.isValid(postId)){ 
      res.status(422).json({message: 'ID Invalido'})
      return
    }

    const user = await getUserById(id)
    const post = await Post.findById(postId)

    const { title, description } = req.body
    const image = req.file ? req.file.filename : ''
   if(user._id.toString() !== post?.user._id.toString()){
    res.status(401).json({message: 'Ocorreu um erro! Tente novamente mais tarde'})
    return
   }

   if(!title){
    res.status(422).json({message: 'O título do post é obrigatório!'})
    return
  }
  if(!description){
   res.status(422).json({message: 'A descrição do post é obrigatória!'})
   return
 }

  newPost = {...req.body}
  newPost.image = req.file ? req.file.filename : ''
                                                 
  await Post.findByIdAndUpdate(postId, newPost)
  res.status(200).json({message: 'Post atualizado com sucesso', newPost})

}

static async remove(req, res) {
  const id = req.session.userId
  const postId = req.params.id

  if (!ObjectId.isValid(postId)) {
    res.status(422).json({ message: 'ID Inválido' })
    return
  }

  const user = await getUserById(id)
  const post = await Post.findById(postId)

  if (!post) {
    res.status(404).json({ message: 'Post não encontrado' })
    return
  }

  if (user._id.toString() !== post.user._id.toString()) {
    res.status(401).json({ message: 'Ocorreu um erro! Tente novamente mais tarde' })
    return
  }

  await Post.findByIdAndDelete(postId)
  console.log(post)
  res.status(200).json({ message: 'Post excluído com sucesso!', post })
}


  static async getPostById(req,res){ 
    const  id = req.params.id
    const user = await getUserById(req.session.userId)

    if(!ObjectId.isValid(id)){ 
      res.status(422).json({message: 'ID Invalido'})
      return
    }

   const post = await Post.findById(id) 
     
     
     if(!post){ 
      res.status(422).json({message: 'Post não encontrado!'}) 
      return
     }
    if(user._id.toString() !== post.user._id.toString()){
      res.status(401).json({message: 'Ocorreu um erro! Tente novamente mais tarde'})
      return
     }


     res.status(200).json({post})
 
  }


}

module.exports = PostController