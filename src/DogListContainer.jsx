// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

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

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
    </>
  )
}

export default DogListContainer
