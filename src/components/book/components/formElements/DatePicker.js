import React from 'react';
import DatePickerComp from  'react-bootstrap-date-picker'

function DatePicker(props) {
  const {model: valueModel, ...propsTypes} = props;

  /*const handleChange = (e) => {
    valueModel.value = e.target.value;

  }*/


  const  handleChange=(value, formattedValue) => {
    valueModel.value =
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  }

  return (
    <DatePickerComp
      onChange={handleChange}
      value={props.model.value}
      {...propsTypes}/>);
}

export default DatePicker;
