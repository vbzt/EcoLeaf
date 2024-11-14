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
    try {
      const search = req.query.search || ''
      let plantsData
      if (search) {
        plantsData = await Plant.find({ title: { $regex: search, $options: 'i' } }).sort('-createdAt')
        console.log(plantsData)
        return
      }else{ 
        plantsData = await Plant.find().sort('-createdAt')
      }
      
      res.status(200).json({ plantsData })
    } catch (e) {
      res.status(500).json({ message: 'Erro ao buscar plantas', error: e })
    }
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
      const { local, climate, humidity, watering, experience, pets,  } = req.body
      if (!local || !climate || !humidity || !watering || !experience || !pets) {
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
        Nunca gere árvores, somente plantas domésticas!
        O output deve ser retornado em forma de JSON, tendo os seguintes valores 
        CASO O USUARIO TER PET, NAO RECOMENDE UMA PLANTA VENENOSA
        Caso a experiencia do usuario com plantas for baixa, recomende algo mais facil de cuidar
        Retorne SOMENTE o RAW json, sem nenhuma escrita adicional
        Use o wikipedia e outras bases de dados para achar a planta, tenha certeza que ela esteja correta tanto em nome, nome cientifico, descricao e link
        - "popular": "Nome da planta"
        - "cientifico": "Nome científico da planta"
        - "descricao": "descrição da planta gerada"
        - "link": "link do artigo na wikipedia desta planta"
        Não use asteriscos (*) nem nenhum caractere especial
        Não gere plantas tóxicas ou venenosas
        Gere:
        A planta deve se adequar a um(a) ${local},
        O usuario tem uma experiência ${experience} com plantas
        E o usuario ${pets} pets
        E o usuário quer ter um gasto de água ${watering} ao cuidar da planta
        A planta deve se adequar a um clima ${climate},
        A planta deve se adequar a um ambiente ${humidity}
      `)
      const id = req.session.userId
      const user = await getUserById(id)

      try { 
      const cleanedResponse = response.replace(/```(?:json)?|```/g, '').trim();
      const parsedResponse = JSON.parse(cleanedResponse);
        parsedResponse.link = await getPlantImage(parsedResponse.cientifico)
       

        const plantExists = await Plant.findOne({ cientific: parsedResponse.cientifico })
        if(!plantExists){ 
          const newPlant = new Plant({
            name: parsedResponse.popular,
            cientific: parsedResponse.cientifico,
            description: parsedResponse.descricao,
            image: parsedResponse.link,
            user: { _id: user._id, email: user.email }
          })

          await newPlant.save()
    
        }
        res.status(201).json({ message: 'Planta gerada e cadastrada com sucesso!', parsedResponse })
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao gerar a planta', error })
      }
    }
    


}





  

module.exports = PlantController