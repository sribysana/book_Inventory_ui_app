import React from 'react';
function FileInput(props) {
  const {model: valueModel, ...propsTypes} = props;
  const handleChange = (e) => {
    valueModel.value = e.target.value;
  }
  return (
    <input
      type='file'
      onChange={handleChange}
      value={valueModel.value}
      {...propsTypes}
    />
  )
}

export default FileInput;
