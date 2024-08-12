// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img
        src="https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_7560.jpg"
        alt="犬の画像"
      />
    </div>
  )
}
