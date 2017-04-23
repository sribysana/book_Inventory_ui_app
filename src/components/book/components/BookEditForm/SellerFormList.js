import React from 'react';
import TextBoxInput from '../formElements/TextBoxInput';
import Binder from 'react-binding'

export default function SellerFormList(props) {
  const id = props.id;
  const handleAdd = () => {
    props.model.add();
  }
  if (props.model.items === undefined)
    return <span>There are no items.</span>;

  return <div>
    <ul className="list-unstyled">
      {
        props.model.items.map((seller, idx) => {
          return (
            <li className="col-md-4" key={id + '_' + idx}>
              <TextBoxInput
                model={Binder.bindTo(seller, 'name')}
                placeholder="Seller Name"
              />
            </li>
          )
        })
      }
      < li className="col-md-4">
        <button
          className="btn btn-xs btn-default"
          onClick={handleAdd}>

          <i className="glyphicon glyphicon-plus-sign"/>
          {' '}
          Add Author

        </button>
      </li>
    </ul>
  </div>;

}

