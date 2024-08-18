// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import ButtonComponent from './ButtonComponent/ButtonComponent'
import './DogListContainer.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('african')
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
          <ButtonComponent
            title={'表示'}
            className={'button displayBtn'}
            handleClick={handleSelected}
          />
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
