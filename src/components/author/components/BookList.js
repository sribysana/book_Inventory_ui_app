import React, {PropTypes} from 'react';
import {Map} from 'immutable';
import {Link} from 'react-router';
export default function BookList(props) {
  const book = props.book;
  console.log('book props  in BookList', book);
  return (
    <div className="col-md-3" style={bookStyles.wrap}>
      <img src={props.book.get('bookCower')}/>
      <div>
        <Link to={"/books/" + book.get('_id')} ><h5>{book.get('title')}</h5></Link>
        <div>Published in : {book.get('publicationYear') }</div>
      </div>
    </div>
  );
}

BookList.PropTypes = {
  book: PropTypes.instanceOf(Map).isRequired,
};
const bookStyles = {
  wrap: {
    marginTop: 15,
    border: '1px solid #ccc'
  }
}
