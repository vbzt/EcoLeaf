const multer = require('multer')
const path = require('path')

const imageStorage = multer.diskStorage(
  {
    destination:  function(req, file, cb){ 
    let folder = "" 
    if(req.baseUrl.includes("plantas")) folder = 'plantas'
    if(req.baseUrl.includes("blog")) folder = "posts"


    cb(null, `public/images/${folder}`)
  },

   filename: function(req, file, cb){ 
    cb(null, Date.now() + String(Math.floor(Math.random() * 10000)) + path.extname(file.originalname))
   }
}
)

const imageUpload = multer({ storage: imageStorage, fileFilter(req, file, cb){ 
  if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
    return cb(new Error("Por favor, envie apenas PNGs e JPGs"))
  }

  cb(undefined, true)
} })

module.exports = {imageUpload}