import React from 'react';
import AuthorForm from './AuthorForm';
import TextBoxInput from  '../formElements/TextBoxInput';
import Binder from 'react-binding';

export default function AuthorFormList(props) {
  const id = props.id;
  const handleAdd = () => {
    // TODO: Check whether the last item is not empty
    console.log(props.model);
    props.model.add(' ');
  }

  if (props.model.items === undefined) {
    return <span>There are no Authors.</span>;
  }

  var authorForm = props.model.items.map((e, i) => {
    return <AuthorForm model={e} key={i} id={id + '_' + i} />
  })

  return (
    <div>
      <ul className="list-unstyled">
        {
          props.model.items.map((author, idx) => {
            return (
              <li key={`author-${idx}`} className="col-md-4">
                <TextBoxInput
                  model={Binder.bindTo(author, 'name')}
                  placeholder="Book Title"
                />
                <small className="text-muted">({author.value._id})</small>
              </li>
            )
          })
        }

        <li className="col-md-4">
          <button
            className="btn btn-xs btn-default"
            onClick={handleAdd} >

            <i className="glyphicon glyphicon-plus-sign" />
            {' '}
            Add Author

          </button>
        </li>
      </ul>
    </div>
  );

}

