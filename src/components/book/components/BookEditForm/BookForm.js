import  React, {PropTypes, Component} from 'react';
import {Map} from 'immutable';
import {} from  'react-redux-form';
import Binder from 'react-binding';
import {Panel} from 'react-bootstrap'
import AuthorFormList from './AuthorFormList';
import GenresFormList from './GenresFormList';
import SellerFormList from './SellerFormList';
import TagFormList from './TagFormList'
// import Select from 'react-select';
import TextBoxInput from '../formElements/TextBoxInput';
import TextAreaInput from '../formElements/TextAreaInput';
import NumberInput from '../formElements/NumberInput'
import DatePicker from '../formElements/DatePicker'
//import DatePicker from  'react-bootstrap-date-picker'
import bookImage from '../../../../images/download.jpeg';

// import createFragment from  'react-addons-createFragment'

export default class BookEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {book: {}};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const description = target.name;
    const book = this.state.book
    book[description] = value;
    this.setState(book);
    //this.props.dispatch()
    this.props.getChanges(this.state.book);
  }

  componentWillMount() {
    const book = this.props.book.toJS();
    book.bookCower = book.bookCower || '';
    this.setState({book});
    // assign(this.state, this.props.book);
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    //this.setState({inputVal: nextProps.publication.document_title})
    this.setState({book: nextProps.book.toJS()});
    //this.state = assign(this.state, nextProps.book.toJS());
    // this.setState(this.getInitialState());
  }

  render() {
    const book = this.state.book;
    if (book.size < 1) {
      return (<div> no book to edit </div>);
    }

    return (
      <div className="row">
        <div name="BookEditForm" className="form-horizontal">

          <div style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Book Title" bsStyle="primary">
              <div>
                <TextBoxInput
                  model={Binder.bindToState(this, "book", "title")}
                  className="col-md-12"
                  placeholder="Book Title"
                />
              </div>
            </Panel>
          </div>

          <div style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Book Description" bsStyle="primary">
              <div >
                <TextAreaInput
                  model={Binder.bindToState(this, "book", "description")}
                  rows="10"
                  className="col-md-12"
                  name="description"
                  placeholder="Book description"
                />
              </div>
            </Panel>
          </div>
          <div style={{}} className="col-md-6">
            <Panel header="Book Cover" bsStyle="primary">
              <div className="row">
                <div className="col-md-6">
                  <img src={bookImage} width={100}/>
                </div>
                <div className="btn-group col-md-6">
                  <button type="button" className="btn btn-default" onClick=""><i
                    className="glyphicon glyphicon-upload"/>
                    Upload
                  </button>
                  <button type="button" className="btn btn-default" onClick=""><i
                    className="glyphicon glyphicon-upload"/>
                    Change
                  </button>
                </div>

                {/*
                 <FileInput
                 id="bookCower"
                 model={Binder.bindToState(this, "book", "bookCower")}
                 name="bookCower"/>
                 */}
              </div>
            </Panel>
          </div>
          <div className="col-md-6">
            <Panel header="Book Price" bsStyle="primary">
              <div style={{clear: 'both'}}>
                <label htmlFor="price" className="col-md-4 control-label">Price</label>
                <div className="col-md-8">
                  <NumberInput
                    model={Binder.bindToState(this, "book", "price")}
                    id="price"
                    name="price"
                    className="col-md-12"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div style={{clear: 'both'}}>
                <label htmlFor="deliveryCharges" className="col-md-4 control-label">DeliveryCharges</label>
                <div className="col-md-8">

                  <NumberInput
                    model={Binder.bindToState(this, "book", "deliveryCharges")}
                    id="deliveryCharges"
                    name="deliveryCharges"
                    className="col-md-12"
                    placeholder="DeliveryCharges"
                  />

                </div>
              </div>
            </Panel>
          </div>

          <div style={{clear: 'both', margin: '0px 15px'}}>
            <Panel header="Book info" bsStyle="primary">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="publicationYear" className="col-md-3 control-label">Publication Year</label>
                  <div className="col-md-9">

                     <DatePicker id="publicationYear" model={Binder.bindToState(this, "book", "publicationYear")}/>

                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="publisher" className="col-md-3 control-label">Publisher</label>
                  <div className="col-md-9">

                    <TextBoxInput
                      model={Binder.bindToState(this, "book", "publisher")}
                      className="col-md-12"
                      id="publisher"
                      placeholder="Publisher Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="pages" className="col-md-3 control-label">Pages</label>
                  <div className="col-md-9">
                    <NumberInput
                      model={Binder.bindToState(this, "book", "pages")}
                      id="pages"
                      name="pages"
                      className="col-md-12"
                      placeholder="No Of Pages"
                    />

                  </div>
                </div>
              </div>
            </Panel>
          </div>

          {book.authors.length > 0 &&
          <div style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Authors" bsStyle="primary">
              <AuthorFormList
                model={Binder.bindArrayToState(this, "book", "authors")}
                id="authors"
              />
            </Panel>

          </div>
          }
          {book.genres.length > 0 &&
          <div style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Genres" bsStyle="primary">
              < GenresFormList
                model={Binder.bindArrayToState(this, "book", "genres")}
                id="genres"/>
            </Panel>
          </div>
          }

          {book.seller.length > 0 &&
          <div className="form-group row" style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Seller" bsStyle="primary">
              {
                <SellerFormList
                  model={Binder.bindArrayToState(this, "book", "seller")}
                  id="genres"/>
              }
            </Panel>
          </div>

          }

          {book.tags.length > 0 &&
          <div className="form-group row" style={{clear: 'both', margin: '0 15px'}}>
            <Panel header="Tags" bsStyle="primary">
              {
                <TagFormList
                  model={Binder.bindArrayToState(this, "book", "tags")}
                  id="genres"/>
              }
            </Panel>
          </div>

          }

        </div>

      </div>
    );
  }

}

BookEditForm.propTypes = {
  book: PropTypes.instanceOf(Map).isRequired,
  getChanges: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
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







 {book.seller.length > 0 &&
 <div>
 <h3>Sellers</h3>
 {
 book.seller.map((e, i) => {
 return < SellerForm key={i}
 genres={e}
 index={i}
 handleInputChange={this.handleInputChange}/>;
 })
 }
 </div>
 }

 */
