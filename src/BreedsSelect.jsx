// @ts-check
import './BreedsSelect.css'

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }
  return (
    <label className="breedsLabel">
      Breeds List
      <select
        className="select"
        name="breeds"
        value={selectedBreed}
        onChange={handleSelectChange}
      >
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  )
}

export default BreedsSelect
