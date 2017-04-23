import {connect} from 'react-redux';
import BookPage from './BookPage';
function mapStateToProps(state){
  return{
    books:state.bookPageReducer.get('book'),
    cart:state.userReducer.get('cart'),
    editBook:state.bookPageReducer.get('editBook'),
    authorList:state.authorReducer.get('authorList'),
    isModalEnabled: state.bookPageReducer.get('isModalEnabled'),
    editModalEnabled: state.bookPageReducer.get('editModalEnabled'),
  };
}
function mapDispatchToProps(dispatch){
  return{
    dispatch,
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
