import './ButtonComponent.css'

export const ButtonComponent = ({ title, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  )
}

export default ButtonComponent
