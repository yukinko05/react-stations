// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from '../BreedsSelect/BreedsSelect'
import './DogListContainer.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        const breedsArray = Object.keys(data.message)
        setBreeds(breedsArray)
      })
      .catch(error => {
        console.error('データ取得に失敗しました', error)
      })
  }, [])

  const handleSelected = () => {
    //TODO selectedBreedのnullチェックを行う
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => {
        setDogImages(data.message)
      })
  }

  return (
    <div className="listContainer">
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button className="displayBtn" onClick={handleSelected}>
        表示
      </button>
    </div>
  )
}

export default DogListContainer
