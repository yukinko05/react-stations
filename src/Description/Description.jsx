// @ts-check

import DogImage from '../DogImage/DogImage'
import { useState } from 'react'
import './Description.css'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_7560.jpg',
  )

  const handleClick = () => {
    // console.log('ボタンが押されました！')
    // setDogUrl('https://images.dog.ceo/breeds/malamute/n02110063_10751.jpg')

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => {
        setDogUrl(result.message)
      })
      .catch(error => {
        console.error('画像取得に失敗しました', error)
      })
  }

  return (
    <>
      <section className="dogContainer">
        <p className="description">犬の画像を表示するサイトです</p>
        <DogImage imageUrl={dogUrl} />
      </section>
      <button className="updateBtn" onClick={handleClick}>
        更新
      </button>
    </>
  )
}

export default Description
