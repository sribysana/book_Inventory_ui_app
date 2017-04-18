import { connect } from 'react-redux';
import HeaderBar from './HeaderBar';

function mapStateToProps(state) {
  return {
    user: state.userReducer.get('user'),
    cart: state.userReducer.get('cart'),
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
)(HeaderBar);
