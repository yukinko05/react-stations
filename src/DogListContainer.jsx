// @ts-check

import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        setBreeds(result.message)
      })
      .catch(error => {
        console.error('データ取得に失敗しました', error)
      })
  })
  return <></>
}

export default DogListContainer
