import * as CONSTANTS from '../../constants/actionTypes';


export function updateUser(user) {
  return {
    type: CONSTANTS.UPDATE_USER,
    user: user[0],
    cart: user[0].cart,
  };
}


export function getUser(user) {
  return (dispatch) => {
    const userId = (user) ? user.id : CONSTANTS.USER._id;
    const userDataURI = `http://localhost:2020/users/${userId}`;
    fetch(userDataURI)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success) {
          dispatch(updateUser([res.user]));
        }
      }).catch((error) => {
      console.log('Error in fetching users data', error);
    });
  };
}

export function addToCart(productId) {
//58f26a30ac62a4234f5a5228
  //userID
  //productId

  return (dispatch) => {
    const URI = 'http://localhost:2020/addToCart';
    const userID = '58f26a30ac62a4234f5a5228';
    fetch(URI, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({userID, productId})
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success == true) {
          dispatch(updateUser([resp.user]));
        }
      })
      .catch((error) => {
        console.log('error in fetching post call', error);
      })
  };
}


export function removeFromCart(productId) {
//58f26a30ac62a4234f5a5228
  //userID
  //productId

  return (dispatch) => {
    const URI = 'http://localhost:2020/removeFromCart';
    const userID = '58f26a30ac62a4234f5a5228';
    fetch(URI, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({userID, productId})
    })
      .then((resp) => resp.json())
      .then((resp) => {
      console.log('success in fetch call');
        if (resp.success == true) {
          dispatch(updateUser([resp.user]));
        }
      })
      .catch((error) => {
        console.log('error in fetching post call', error);
      })
  };
}
