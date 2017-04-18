import React, { PropTypes } from 'react';
import { Map, List } from 'immutable';
import { Link } from 'react-router';
import BookList from './BookList';

export default function Author(props) {
  const author = props.author;
  const books = props.books;
  console.log('props.author >>>', author);
  console.log('props.books >>>', books);
  let authorBooks;

  if (props.books) {
    authorBooks = books.map((e, i) => {
      console.log('authorBooks e ^^^^^^^^^^', e);
      return (<div key={i}>
        <BookList book={e}/>
      </div>);
    });
  } else {
    authorBooks = <div />;
  }

  return (
    <li className="list-group-item row">
      <div className="col-md-2">
        <img src={author.get('avatar').get('img')} className="img-rounded img-responsive" />
      </div>
      <div className="col-md-10">
        <Link to={'/author/' + author.get('_id')} className="list-group-item-heading">{author.get('name')}</Link>
        <p className="list-group-item-text">{author.get('biography')}</p>
        <div className="row">
          {authorBooks}
        </div>
      </div>
    </li>
  );
}

Author.propTypes = {
  author: PropTypes.instanceOf(Map).isRequired,
  id: PropTypes.string,
  books:PropTypes.instanceOf(List),
};
