import  React, {PropTypes, Component} from 'react';
import {Map} from 'immutable';
import {} from  'react-redux-form'

export default class BookEditForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.props.dispatch()
  }

  render() {
    const book = this.props.book;
    return (
      <div>
        <form action="" name="BookEditForm" className="form-horizontal">
          <div className="form-group row">
            <label for="title" className="col-md-3 control-label">Book Title</label>
            <div className="col-md-9">
              <input type="text" name="title" id="title" value="" className="col-md-12" placeholder="Book Title"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="description" className="col-md-3 control-label">Book Text Area</label>
            <div className="col-md-9">
              <textarea onChange={this.handleInputChange} type="textArea" id="description" name="description"
                        value={book.description} className="col-md-12"
                        placeholder="Text Area"> </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label for="publicationYear" className="col-md-3 control-label">Publication Year</label>
            <div className="col-md-9">
              <input type="text" id="publicationYear" name="publicationYear" value={book.publicationYear}
                     className="col-md-12"
                     placeholder="Publication Year"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="publisher" className="col-md-3 control-label">Publisher</label>
            <div className="col-md-9">
              <input type="text" id="publisher" name="publisher" value={book.publisher} className="col-md-12"
                     placeholder="Publisher"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="price" className="col-md-3 control-label">Price</label>
            <div className="col-md-9">
              <input type="number" id="price" name="price" value={book.price} className="col-md-12"
                     placeholder="Price"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="deliveryCharges" className="col-md-3 control-label">DeliveryCharges</label>
            <div className="col-md-9">
              <input type="number" id="deliveryCharges" name="deliveryCharges" value={book.deliveryCharges}
                     className="col-md-12"
                     placeholder="Delivery Charges"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="pages" className="col-md-3 control-label">Pages</label>
            <div className="col-md-9">
              <input type="number" id="pages" name="pages" value={book.pages} className="col-md-12"
                     placeholder="Pages"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="no_reviews" className="col-md-3 control-label">No of reviews</label>
            <div className="col-md-9">
              <input type="number" id="no_reviews" name="no_reviews" value={book.reviews.size} className="col-md-12"
                     placeholder="No of reviews"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="no_seller" className="col-md-3 control-label">No Of Seller</label>
            <div className="col-md-9">
              <input type="number" id="no_seller" name="no_seller" value={book.seller.size} className="col-md-12"
                     placeholder="No Of Seller"/>
            </div>
          </div>
          <div className="form-group row">

            <label for="no_authors" className="col-md-3 control-label">No Of Authors</label>
            <div className="col-md-9">
              <input type="number" id="no_authors" name="no_authors" value={book.authors.size} className="col-md-10"
                     placeholder="No Of Authors"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="no_genres" className="col-md-3 control-label">No Of Genres</label>
            <div className="col-md-9">
              <input type="number" id="no_genres" name="no_genres" value={book.genres.size} className="col-md-10"
                     placeholder="No Of Genres"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="no_tags" className="col-md-3 control-label">No Of Tags</label>
            <div className="col-md-9">
              <input type="number" id="no_tags" name="no_tags" value={book.tags.size} className="col-md-12"
                     placeholder="No Of Tags"/>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

BookEditForm.propTypes = {
  book: PropTypes.instanceOf(Map).isRequired,
  dispatch: PropTypes.func.isRequired,
};


