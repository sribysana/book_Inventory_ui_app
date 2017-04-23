import React, {PropTypes} from 'react';
import TextBoxInput from '../formElements/TextBoxInput'

export default function GenresForm(props) {

  return (

      <div className="form-group row">
        <label htmlFor={'name_' + props.id} className="col-md-3 control-label">Genres</label>
        <div className="col-md-9">

          <TextBoxInput
            model={props.model}
            className="col-md-12"
            name={props.id}
            id={props.id}
            placeholder="genres Type"
          />


        </div>
      </div>
  )
}

GenresForm.propTypes = {
  index: PropTypes.number,
}

