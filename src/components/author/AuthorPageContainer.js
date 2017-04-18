import { connect } from 'react-redux';
import AuthorPage from './AuthorPage';

function mapStateToProps(state) {
  console.log('mapStateToProps author', state.authorReducer.get('author'));
  return {
    authors: state.authorReducer.get('author'),
    book:state.bookReducer.get('book')
  };
}
function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps author');
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorPage);
