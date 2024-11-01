const Plant = require('../models/Plant')
const getUserById = require('../helpers/get-user-by-id')
const plantValidation = require('../helpers/plant-validation')
const generatePlantImage = require('../helpers/generate-plant-image')
const { checkUser } = require('./UserController.js')
const getPlantImage = require('../helpers/generate-plant-image')
const ObjectId = require('mongoose').Types.ObjectId
let runChat
(async () => {
  const module = await import('../chatbot/runChat.js')
  runChat = module.runChat
})()



class PlantController  {

  static async showAll(req,res){ 
    const plants = await Plant.find().sort('-createdAt')
    res.status(200).json({plants})
  }

   static async create(req, res) {

      if(!checkUser) return
      const { name, cientific } = req.body
      const image = req.file.filename
  
      if(!plantValidation(req,res)) return 
      const id = req.session.userId
      const user = await getUserById(id, res)
      try {
        const planta = new Plant({name, cientific, image, user: {_id: user._id, email: user.email}})
        const newPlant = await planta.save()
        res.status(201).json({ message: 'Planta cadastrada com sucesso!', newPlant})
      } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar a planta', error })
      }
    }
  
    static async update(req, res) {
      const { id } = req.params
      const image = req.file  
      let updatedPlant = {}

      if(!ObjectId.isValid(id)){ 
        res.status(422).json({message: 'ID Invalido'})
        return
      }

      const plant = await Plant.findById(id)
      const userId = req.session.userId

      if(!plant){
        res.status(404).json({message: 'Planta não encontrada'})
      }
      if(plant.user._id.toString() !== userId.toString() || !userId){
        res.status(422).json({message: 'Ocorreu um erro, tente novamente mais tarde'})
        return 
      }
      if(!plantValidation(req, res)) return 

      updatedPlant = { ...req.body }
      updatedPlant.image = image.filename

      await Plant.findByIdAndUpdate(id, updatedPlant)
      res.status(200).json({message: 'Planta atualizada com sucesso!', updatedPlant})
    }
  
    static async delete(req, res) {
      const { id } = req.params

      if(!ObjectId.isValid(id)){ 
        res.status(422).json({message: 'ID Invalido'})
        return
      }
      const plant = await Plant.findById(id)
      const userId = req.session.userId
      if(!plant){
        res.status(404).json({message: 'Planta não encontrada'})
        return
      }
      if(plant.user._id.toString() !== userId.toString() || !userId){
        res.status(422).json({message: 'Ocorreu um erro, tente novamente mais tarde'})
        return 
      }
      await Plant.findByIdAndDelete(id)
      res.status(200).json({message: 'Planta removida com sucesso!'})
        
    }

    

    static async generatePlant(req, res) {
      const { location, climate, humidity, waterNeed } = req.body
    
      if (!location || !climate || !humidity || !waterNeed) {
          res.status(422).json({ message: 'Responda a todos os passos do formulario!' })
          return
      }
    
      const response = await runChat(`
        Olá chat, este prompt é pré-gerado e só muda com as informações que o usuário passa, então gere seguindo as seguintes regras:
        A planta gerada deve ter: 
        Seu nome popular, seu nome científico, e de um link para uma imagem da devida planta
        Caso o usuário morar em casa, uma planta nem muito pequena nem muito grande
        Caso morar em apartamento, uma planta pequena a média 
        E em sítio de pequena a grande 
        O output deve ser retornado em forma de JSON, tendo os seguintes valores 
        Retorne SOMENTE o RAW json, sem nenhuma escrita adicional
        - "popular": "Nome da planta"
        - "cientifico": "Nome científico da planta"
        - "descricao": "descrição da planta gerada"
        - "link": "link do artigo na wikipedia desta planta"
        Não use asteriscos (*) nem nenhum caractere especial
        Não gere plantas tóxicas ou venenosas
        Gere:
        A planta deve se adequar a um(a) ${location},
        A planta deve se adequar a um clima ${climate},
        A planta deve se adequar a um ambiente ${humidity}, 
        E o usuário quer ter um gasto de água ${waterNeed} ao cuidar da planta
      `)
    
      try { 
      const cleanedResponse = response.replace(/```(?:json)?|```/g, '').trim();
      const parsedResponse = JSON.parse(cleanedResponse);
        parsedResponse.link = await getPlantImage(parsedResponse.cientifico)
        res.status(200).json({ message: "Planta gerada com sucesso!", parsedResponse })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao gerar a planta', error })
      }
    }
    


}





  

module.exports = PlantController