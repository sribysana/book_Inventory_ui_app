import * as CONSTANTS from '../../constants/actionTypes';

export function updateAuthor(data) {
  console.log('$$$$$ updateAuthor', data.authors);
  return {
    type: CONSTANTS.UPDATE_AUTHOR,
    authors: data.authors || [data.author],
  };
}

export function getAuthor(id) {
  return (dispatch) => {
    let uri = 'http://localhost:2020/authors';
    uri = (id) ? uri + '?id=' + id : uri;
    fetch(uri)
      .then((req) => req.json())
      .then((res) => {
        if (res.success) {
          dispatch(updateAuthor(res.data));
        }
      })
      .catch((error) => {
        console.log('Error occurred in getAuthor fetch call', error);
      });
  };
}

