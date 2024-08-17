// @ts-check
import './DogImage.css'

export const DogImage = ({ imageUrl }) => {
  return <img className="randomDogImg" src={imageUrl} alt="犬の画像" />
}

export default DogImage
