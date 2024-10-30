const mongoose = require('mongoose')

async function db(){ 
  try{ 
    await mongoose.connect('mongodb://localhost:27017/ecoleaf')
    console.log('>> mongoose ok')
  }
  catch(e){
    console.log('>> mongoose err: ', e)
  }
}

db()

module.exports = mongoose