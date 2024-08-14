// @ts-check
import './DogImage.css'

export const DogImage = ({ imageUrl }) => {
  return <img className="dogImg" src={imageUrl} alt="犬の画像" />
}

export default DogImage
