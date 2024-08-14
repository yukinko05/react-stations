// @ts-check
export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }
  return (
    <>
      <label htmlFor="breeds">
        Breeds List
        <select
          name="breeds"
          id="breeds"
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
    </>
  )
}

export default BreedsSelect
