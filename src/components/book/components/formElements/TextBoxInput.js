import React from 'react';
function TextBoxInput(props) {
  const {model:valueModel, ...restProps} = props;
  const handleChange = (e) => {
    valueModel.value = e.target.value;
  }
  console.log( restProps._id, valueModel.value);
  return (
    <input
      type='text'
      onChange={handleChange}
      value={valueModel.value}
      {...restProps}
    />
  )
}

export default TextBoxInput;
