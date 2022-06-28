import React, { useEffect, useState } from 'react'

function SelectCity(props) {
  const [city, setCity] = useState('');

  function clickOnSubmit() {
    props.onClick(city);
  }
  const handleChange = async (e) => {
    await setCity(e.target.value)
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Type City...' onChange={handleChange} />
      </div>
      <div>
        <button onClick={clickOnSubmit}>Get Weather</button>
      </div>
    </div>
  )
}

export default SelectCity
