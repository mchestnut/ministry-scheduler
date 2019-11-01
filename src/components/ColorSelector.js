import React from 'react'

const ColorSelector = ({ onChange, value }) => {

  return (
    <select
      onChange={ onChange }
      value={ value }
    >
      <option value="8c8989">Gray</option>
      <option value="d94545">Red</option>
      <option value="e1a448">Orange</option>
      <option value="8d8c73">Tan</option>
      <option value="89d177">Mint</option>
      <option value="277441">Green</option>
      <option value="38b3b3">Teal</option>
      <option value="3c7ad6">Blue</option>
      <option value="937dea">Lavendar</option>
      <option value="bc51d7">Fuchsia</option>
      <option value="e37bb9">Rose</option>
    </select>
  )
}

export default ColorSelector