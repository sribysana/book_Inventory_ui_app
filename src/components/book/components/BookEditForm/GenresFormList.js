import React from 'react';
import TextBoxInput from '../formElements/TextBoxInput'
export default function GenresFormList(props) {
  const id = props.id;

  const handleAdd = () => {
    debugger;
    props.model.add();
  }

  if (props.model.items === undefined)
    return <span>There are no Genres.</span>;

  return <div>
    <ul className="list-unstyled">
      {
        props.model.items.map((genres, idx) => {
          return (
            <li key={`${id}_${idx}`} className="col-md-4">
              <TextBoxInput
                model={genres}
                placeholder="Genres Type"
              />
            </li>
          );
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
  </div>;
}

