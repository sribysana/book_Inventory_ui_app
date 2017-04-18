import React, { Component, PropTypes } from 'react';
import { List,  } from 'immutable';
import { Link } from 'react-router';
import { getBook } from '../../bookActions';

export default class BookListPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const bookIDs = getbookIds().toJS();
    this.props.dispatch(getBook());
  }
  getbookIds() {
    const bookIDs = this.props.bookIds.map((e) => {
      return this.id;
    });
    return bookIDs;
  }

  render() {
    return
  }
}

BookListPage.propTypes = {
  author: PropTypes.instanceOf(List).isRequired,
  books: PropTypes.instanceOf(List).isRequired,
  dispatch: PropTypes.func.isRequired,
};
