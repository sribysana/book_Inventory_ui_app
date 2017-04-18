import {connect} from 'react-redux';
import BookDetailPage from './BookDetailPage';
function mapStateToProps(state){
  const id = state.routing.locationBeforeTransitions.pathname;
  return{
    book:state.bookReducer.get('book'),
    cart:state.userReducer.get('cart'),
    id:id.split('/')[2],
  };
}
function MapDispatchToProps(dispatch){
  return{
    dispatch,
  };
}
export default connect(
  mapStateToProps,
  MapDispatchToProps,
)(BookDetailPage);
