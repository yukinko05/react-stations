// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={handleClick}>更新</button>
    </div>
  )
}
