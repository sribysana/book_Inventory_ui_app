import React, {PropTypes} from 'react';
import TextBoxInput from '../formElements/TextBoxInput';

export default function TagFormList(props) {
  const id = props.id;
  const handleAdd = ()=>{
    props.model.add();
  }
  if (props.model.items === undefined) {
    return <span>There are no Genres.</span>;
  }

  return (
    <ul className="list-unstyled">
      {
        props.model.items.map((tag, idx) => {
          return <li key={`${id}_${idx}`} className="col-md-4">
            <TextBoxInput
              model={tag}
              placeholder="Tag"
              className="col-md-10"
            />
          </li>
        })
      }
      < li className="col-md-4">
        <button
          className="btn btn-xs btn-default"
          onClick={handleAdd} >

          <i className="glyphicon glyphicon-plus-sign" />
          {' '}
          Add Author

        </button>
      </li>
    </ul>
  );

}
TagFormList.propTypes = {
  id: PropTypes.string,
  model: PropTypes.object,
}
