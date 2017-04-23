import React, {PropTypes} from 'react';

export default function TagForm(props) {
  const tag = props.tag;

  console.log('author props in GenresForm', tag);
  return (

    <div className="form-group row">
      <label htmlFor={'name_' + tag.index} className="col-md-3 control-label">Tag</label>
      <div className="col-md-9">
        <input type="text"
               id={'name_' + tag.index}
               name={'name_' + tag.index}
               value={tag}
               className="col-md-10"
               placeholder="Genres Type"
               onChange={tag.handleInputChange}/>
      </div>
    </div>

  )
}

TagForm.propTypes = {
  tag: PropTypes.string,
  index: PropTypes.number,
  handleInputChange: PropTypes.func.isRequired
}
