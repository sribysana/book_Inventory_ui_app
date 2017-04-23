
import React from 'react';
function TextAreaInput(props) {
  const{model:valueModel, ...propTypes} =props
  const handleChange = (e) => {
    valueModel.value = e.target.value;
  }


  return (
    <textarea
      onChange={handleChange}
      value={valueModel.value}
      {...propTypes}

    />
  )
}



export default TextAreaInput;
