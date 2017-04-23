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

export function UpdateBookList(bookList) {
  return {
    type: CONSTANTS.UPDATEBOOKLIST,
    bookList,
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
            dispatch(editBookDetail(res.data.book));
          }
        }
      })
      .catch((error) => {
        console.log('error in getBook fetch data', error);
      });
  };
}

export function getBookList(str) {
  let uri = "http://localhost:2020/booksList/";

  return (dispatch) => {
    fetch(uri + str)
      .then((res) => {
        res.json()
      })
      .then((res) => {
        if (res.success) {
          dispatch(UpdateBookList(res.data.bookList));
        }
      })
  }
}

export function toggleModal(enabled) {

  return {
    type: 'TOGGLE_MODAL',
    enabled,
  }
}

export function addBook(book) {
  const uri = 'http://localhost:2020/book';
  return (dispatch) => {
    fetch(uri)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          dispatch(updateBook(res.data))
        }
      })
  };
}
