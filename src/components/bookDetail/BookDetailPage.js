import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';
import { getBook } from '../book/bookActions';
import { getUser, addToCart,removeFromCart } from '../../common/user/userActions';
import Book from '../book/components/book';

export default class BookDetailPage extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentWillMount() {
    const id = this.props.id;
    console.log('book id ', id);
    this.props.dispatch(getBook(id));
    this.props.dispatch(getUser());
  }

  addToCart(bookId) {
    this.props.dispatch(addToCart(bookId));
  }

  removeFromCart(bookId) {
    this.props.dispatch(removeFromCart(bookId));
  }


  render() {
    console.log('cart >>>', this.props.cart);
    return (
      <div>
        <h1>Book Detail Page </h1>
        <ul className="list-group">
          {
            this.props.book.map((e,i) => {
              const availableInCart = !!this.props.cart.find(c => c.get('id') === e.get('_id'));
              console.log('e', e);
              return (<Book
                key={i}
                book={e}
                id={this.props.id}
                isAddToCartBtn={availableInCart}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart} />);
            })
          }
        </ul>
      </div>
    );
  }
}

BookDetailPage.propTypes = {
  book: PropTypes.instanceOf(List).isRequired,
  cart: PropTypes.instanceOf(List).isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
