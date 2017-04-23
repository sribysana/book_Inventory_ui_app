import React, {PropTypes} from 'react';
import TextBoxInput from '../formElements/TextBoxInput'

export default function AuthorForm(props) {
  return (
    <div>
      <div className="form-group row">
        <label htmlFor={'name_' + props.id} className="col-md-3 control-label">Seller Name</label>
        <div className="col-md-9">

          <TextBoxInput
            model={props.model}
            accessToKey="name"
            className="col-md-12"
            name={props.id}
            id={props.id}
            placeholder="Author Name"
          />

        </div>
      </div>
      <div className="form-group row">
        <label htmlFor={'id' + props.id} className="col-md-3 control-label">Seller Id</label>
        <div className="col-md-9">
          <TextBoxInput
            model={props.model}
            accessToKey="id"
            className="col-md-12"
            name={props.id}
            id={props.id}
            placeholder="Author ID"
          />

        </div>
      </div>
    </div>
  )
}

AuthorForm.propTypes = {
  author: PropTypes.object,
  index: PropTypes.number,
}

