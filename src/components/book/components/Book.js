import React, {PropTypes} from 'react';
import {Map} from 'immutable';
import {Link} from 'react-router';
import CartBtn from './CartBtn';
import Reviews from '../../../common/Reviews';

export default function Book(props) {
  const book = props.book;
  let reviewsTemplate;
  if (props.id) {
    reviewsTemplate = <Reviews reviews={book.get('reviews')}/>;
  } else {
    reviewsTemplate = <div/>;
  }

const editModalToChange = () => props.editModalToChange(props.book.get('_id'));

  return (
    /* eslint-disable react-in-jsx-scope */
    <li className="list-group-item row">
      <div className="col-md-2">
        <img src={book.get('bookCower')} className="img-rounded img-responsive"/>
      </div>
      <div className="col-md-8">
        <Link className="list-group-item-heading" to={'/book/' + book.get('_id')}>{book.get('title')}</Link>
        <p className="list-group-item-text">{book.get('description')}</p>
        <div className="row">authors</div>
        <div>
          {reviewsTemplate}
        </div>

        <div className="text-right">
          <button type="button" onClick={editModalToChange}><i className="glyphicon glyphicon-pencil"/></button>
        </div>
      </div>

      <div className="col-md-2">
        <CartBtn
          addToCart={props.addToCart}
          bookId={props.book.get('_id')}
          removeFromCart={props.removeFromCart}
          isAddToCartBtn={props.isAddToCartBtn}/>
      </div>
    </li>
    /* eslint-disable react-in-jsx-scope */
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Map).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isAddToCartBtn: PropTypes.bool.isRequired,
  id: PropTypes.string,
  editModalEnabled: PropTypes.bool.isRequired,
  editModalToChange: PropTypes.func.isRequired,
};


/*

 {
 "title": "RESTful Web API Design with Node.js - Second Edition",
 "id": "95f5b406-f2af-45ba-b2fe-fc3e5b7d9568",
 "description": "Since JavaScript is the language of the web, building APIs using Node.js provides a seamless development experience on both the front end and the back end. Explore the practical side of REST to build data-centric applications with Node About This Video Work through a series of guidelines and best practices to efficiently design RESTful Web APIs with Node Understand the structure of APIs, their authentication protocols, and their implementation tools This practical guide provides the knowledge you need to delve into the endless possibilities enabled by Big Data In Detail RESTful Web APIs allow developers to create unprecedented applications by leveraging the data on the internet.",
 "tags": [],
 "genres": [
 "friction"
 ],
 "publicationYear": 2017,
 "publisher": "Packt Publishing",
 "bookCower": "/images/id",
 "price": 1200,
 "deliveryCharges": 100,
 "pages": 150,
 "authors": [
 {
 "name": "Saleh Hamadeh",
 "id": "string"
 }
 ],
 "seller": [
 {
 "name": "Packt Publishing",
 "id": "string"
 }
 ],
 "reviews": [
 {
 "reviewerName": "Srikanth",
 "reviewerRating": 4.5,
 "reviewerRatingOutof": 5,
 "feedback": "Good books to Learn",
 "date": "3rd April"
 }
 ]
 }


 */
