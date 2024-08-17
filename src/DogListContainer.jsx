// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
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
      .catch(error => {
        console.error('データ取得に失敗しました', error)
      })
  }

  return (
    <>
      <hr className="divider" />
      <div className="dogImagesContainer">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <div>
          <button className="displayBtn" onClick={handleSelected}>
            表示
          </button>
        </div>
      </div>
      <div className="dogImages">
        {dogImages.map(img => (
          <img className="dogImg" key={img} src={img} />
        ))}
      </div>
    </>
  )
}

export default DogListContainer
