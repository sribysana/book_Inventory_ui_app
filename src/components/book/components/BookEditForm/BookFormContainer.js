import {connect} from 'react-redux';
import BookForm from './BookForm';

function mapStateToProps(state){
  return {
    book:state.bookPageReducer.get('editBook');
  }
}

function mapDispatchToProps(dispatch) {
  return{
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookForm);
