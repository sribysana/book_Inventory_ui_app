import {connect} from 'react-redux';
import BookPage from './BookPage';
function mapStateToProps(state){
  return{
    books:state.bookReducer.get('book'),
    cart:state.userReducer.get('cart'),
    editBook:state.bookReducer.get('editBook'),
    isModalEnabled: state.bookReducer.get('isModalEnabled'),
    editModalEnabled: state.bookReducer.get('editModalEnabled'),
    //id:state
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
