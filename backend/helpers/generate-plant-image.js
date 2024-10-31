let fetch
(async () => {
  const fetchModule = await import('node-fetch');
  fetch = fetchModule.default
})()

const getPlantImage = async (plantName) => {
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(plantName)}&format=json&origin=*`)


    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`)
    }

    const data = await response.json()

    if (data.query.search.length > 0) {
      const plant = data.query.search[0]
      const plantTitle = plant.title
      const imageResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(plantTitle)}&prop=pageimages&pithumbsize=500&format=json&origin=*`)
      const imageData = await imageResponse.json()

      const page = Object.values(imageData.query.pages)[0]
      const imageUrl = page.thumbnail ? page.thumbnail.source : 'Imagem não encontrada'

      return imageUrl
    } else {
      return
    }
  } catch (error) {
    return error
  }
}

module.exports = getPlantImage