import Input from '../../components/form/Input'
import './PlantCatalog.css'
import { useEffect, useState } from 'react'
import Plant from '../../components/plants/Plant'
import usePlant from '../../hooks/usePlant'

const PlantCatalog = () => {
  const { fetchPlants } = usePlant()

  const [search, setSearch] = useState('')
  const [plants, setPlants] = useState([])

  const loadPlants = async () => {
    const data = await fetchPlants(search)
    setPlants(data)
  }

  useEffect(() => {
    loadPlants()
  }, [search])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    loadPlants() 
  }

  return (
    <section className='plantCatalog'>
      <header className="plantCatalogHeader">
        <h1>Catálogo de Plantas</h1>
        <p>Explore uma variedade de plantas recomendadas pela nossa inteligência artificial com base no seu perfil e ambiente.</p>
        <form className='searchForm' onSubmit={handleSearchSubmit}>
          <Input type='text' name='search' label='' handleOnChange={handleSearchChange} placeholder='Procurando alguma planta específica?' />
        </form>
      </header>

      <div className="plantSearch">
        <p><span className='colored'>{plants.length}</span> plantas encontradas. <a className='colored' href="/catalog">Limpar filtro</a></p>
      </div>

      <div className="plants">
        {plants.length > 0 && plants.map((plant) => (
          <Plant key={plant._id} id={plant.user._id} name={plant.name} scientific={plant.cientific} description={plant.description} image={plant.image} updatedAt={plant.updatedAt} />
        ))}
      </div>
    </section>
  )
}

export default PlantCatalog
