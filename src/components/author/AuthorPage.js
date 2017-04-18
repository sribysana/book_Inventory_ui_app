import React, {Component, PropTypes} from 'react';
import {List} from 'immutable';
import {getAuthor} from './authorActions';
import {getUser} from '../../common/user/userActions';
import Author from './components/Author';

export default class AuthorPage extends Component{
  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.props.dispatch(getAuthor());
    this.props.dispatch(getUser());
  }
  render(){
    console.log('Author page Props', this.props.authors);
    return(
       <div>
        <h1>Author Page </h1>
        <ul className="list-group">
          {
            this.props.authors.map((e, i) => {
              console.log('e', e);
              return (<Author
                key={i}
                author={e} />);
            })
          }
        </ul>
      </div>
    );
  }
}

AuthorPage.propTypes={
  authors:PropTypes.instanceOf(List).isRequired,
  dispatch:PropTypes.func.isRequired,
};
