import * as CONSTANTS from '../../constants/actionTypes';

export function updateBook(bookData) {
  console.log('book bookData in updateBook ', bookData.books || [bookData]);
  return {
    type: CONSTANTS.UPDATE_BOOK,
    books: bookData.books || [bookData.book],
  };
}

export function editBookDetail(editBook) {
  console.log('editBook', editBook);
  return {
    type: CONSTANTS.EDIT_BOOK,
    editBook,
  }
}

export function toggleBookEditModal(editModalEnabled) {
  return {
    type: CONSTANTS.TOGGLE_BOOK_EDITMODAL,
    editModalEnabled,
  }
}

export function getBook(id, toDispatch) {

  let uri = 'http://localhost:2020/books';

  if (Array.isArray(id)) {
    uri += '?id=' + (id.join('&id='));
  } else if (typeof id == 'string') {
    uri += '/' + id
  }

  return (dispatch) => {
    // uri = (id)? uri+'/'+id : uri;
    fetch(uri)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success) {
          if (!toDispatch) {
            dispatch(updateBook(res.data));
          } else {
            dispatch(editBookDetail(res.data));
          }
        }
      })
      .catch((error) => {
        console.log('error in getBook fetch data', error);
      });
  };
}

export function toggleModal(enabled) {
  return {
    type: 'TOGGLE_MODAL',
    enabled,
  }
}
