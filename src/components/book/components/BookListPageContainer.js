import { connect } from 'react-redux';
import BookListPage from './BookListPage';
//import {} from 'immutable';
function mapStateToProps(state) {
  return {
    books:state.bookReducer.get('book'),
    author:state.authorReducer.get('author'),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListPage);
