import React, {PropTypes} from 'react';
import TextBoxInput from '../formElements/TextBoxInput'

export default function AuthorForm(props) {

  return (
    <div>
      <div className="form-group row">
        <label htmlFor={'name_' + props.id} className="col-md-3 control-label">Authors Name</label>
        <div className="col-md-9">

          <TextBoxInput
            model={props.model}
            className="col-md-12"
            name={props.id}
            id={props.id}
            placeholder="Author Name"
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


/*
 *
 *
 *
 * <div className="form-group row">

 <label htmlFor="no_authors" className="col-md-3 control-label">No Of Authors</label>
 <div className="col-md-9">
 <input type="number"
 id="no_authors"
 name="no_authors"
 //value={book.authors.length}
 className="col-md-10"
 placeholder="No Of Authors"
 onChange={this.handleInputChange}/>
 </div>
 </div>
 *
 *
 *
 *
 *
 *
 * <div className="col-md-12">
 <label htmlFor="name" className="col-md-3 control-label">Author name</label>
 <div className="col-md-9">
 <input type="file"
 id="name"
 name="name"
 value={author.name}
 className="col-md-12"
 placeholder="bookCower URI"
 onChange={this.handleInputChange}/>
 </div>
 </div>
 <div className="row">
 <label htmlFor="id" className="col-md-3 control-label">Author Id</label>
 <div className="col-md-12">
 <input type="file"
 id="id"
 name="id"
 value={author.id}
 className="col-md-12"
 placeholder="bookCower URI"
 onChange={this.handleInputChange}/>
 </div>
 </div>
 *
 *
 * */
