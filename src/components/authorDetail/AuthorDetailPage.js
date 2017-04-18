import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';
import Author from '../author/components/Author';
import { getAuthor } from '../author/authorActions';

export default class AuthorDetailPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(getAuthor(this.props.id));
  }

  render() {
    console.log('books *********', this.props.author);
    if (this.props.author && this.props.author.size == 0) {
      return <div>No Results found </div>;
    }
    return (
      <div>
        <h1>Author Detail Page </h1>
        <ul className="list-group">
          {
            this.props.author.map((e, i) => {
              return (<Author
                id={this.props.id}
                key={i}
                books={e.get('books')}
                author={e} />);
            })
          }
        </ul>
      </div>
    );
  }
}

AuthorDetailPage.propTypes = {
  author: PropTypes.instanceOf(List).isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
