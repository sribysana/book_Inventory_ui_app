import {connect} from 'react-redux';
import AuthorDetailPage from './AuthorDetailPage';
  function mapStateToProps(state){
    const id = state.routing.locationBeforeTransitions.pathname;
    return{
      author:state.authorReducer.get('author'),
      id:id.split('/')[2],
      book: state.bookReducer.get('book'),
    };
  }
  function mapDispatchToProps(dispatch){
    return{
      dispatch
    };
  }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetailPage);
