import  React, {PropTypes} from 'react';
import {Map} from 'immutable';

export default function AuthorList(props) {
  return (<div>
    <h4>Author List</h4>
  </div>)
}



AuthorList.propTypes={
  author:PropTypes.instanceOf(Map).isRequired,
}
