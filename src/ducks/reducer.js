const initialState = {
  id: 0,
  username: "",
  profilePic: ""
};

const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        profilePic: action.payload.profilePic
      };

    default:
      return state;
  }
}

export function updateUser(id, username, profilePic) {
  return {
    type: UPDATE_USER,
    payload: { id: id, username: username, profilePic: profilePic }
  };
}
