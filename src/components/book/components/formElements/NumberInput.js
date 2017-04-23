import React from 'react';
function NumberInput(props) {
  const{model:valueModel, ...propTypes} =props;
   props.rows || 2;
  const handleChange = (e) => {
    valueModel.value = e.target.value;
  }
  return (
    <input
      type="number"
      onChange={handleChange}
      value={valueModel.value}
      {...propTypes}
    />
  )
}

export default NumberInput;
