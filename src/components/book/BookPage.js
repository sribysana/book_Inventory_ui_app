import React, {Component, PropTypes} from 'react';
import {List,Map} from 'immutable';
import {Modal} from 'react-bootstrap';
import {getBook, toggleModal, toggleBookEditModal } from './bookActions';
import {getUser, addToCart, removeFromCart} from '../../common/user/userActions';
import Book from './components/Book';
import  BookForm from './components/BookEditForm/BookForm';


export default class BookPage extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.onCloseBookEditModal = this.onCloseBookEditModal.bind(this);
    this.editModalToChange = this.editModalToChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getBook());
    this.props.dispatch(getUser());
  }

  addToCart(bookId) {
    this.props.dispatch(addToCart(bookId));
  }

  removeFromCart(bookId) {
    this.props.dispatch(removeFromCart(bookId));
  }

  editModalToChange(id) {
    console.log('id >>>>',id)
    this.props.dispatch(getBook(id, true));
    this.props.dispatch(toggleBookEditModal(true))
  }
  onCloseBookEditModal(){
    this.props.dispatch(toggleBookEditModal(false))
  }

  render() {

    if (this.props.books.size === 0) {
      return <div>no books found</div>;
    }
    console.log(this.props.editBook);
    return (
      <div>
        <h1>Book Page </h1>
        <strong>Enabled: {this.props.isModalEnabled}</strong>

        <ul className="list-group">
          {
            this.props.books.map((e) => {
              const availableInCart = !!this.props.cart.find(c => c.get('id') === e.get('_id'));
              return (<Book
                key={e.get('_id')}
                book={e}
                isAddToCartBtn={availableInCart}
                addToCart={this.addToCart}
                editModalToChange={this.editModalToChange}
                editModalEnabled={this.props.editModalEnabled}
                removeFromCart={this.removeFromCart}/>);
            })
          }
        </ul>
        <div>
          {
            (this.props.isModalEnabled)
              ? <button onClick={() => this.props.dispatch(toggleModal(false))}>Disable</button>
              : <button onClick={() => this.props.dispatch(toggleModal(true))}>Enable</button>
          }
        </div>
        <div>
          <Modal show={this.props.editModalEnabled} onHide={this.onCloseBookEditModal}>
            <Modal.Header closeButton>
              <Modal.Title>Book Edit Model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <BookForm book={this.props.editBook}/>
            </Modal.Body>
            <Modal.Footer>
              <div>
                <button type="save" className="btn btn-primary" >Save</button>
                <button type="button" className="btn btn-default">Cancel</button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}


BookPage.propTypes = {
  books: PropTypes.instanceOf(List).isRequired,
  cart: PropTypes.instanceOf(List).isRequired,
  dispatch: PropTypes.func.isRequired,
  editBook:PropTypes.instanceOf(Map),
  editModalEnabled: PropTypes.bool.isRequired,
};


// 71ee71d863fd18c963409bd2f6b644126bc99819
