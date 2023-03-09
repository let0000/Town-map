export const initialState = {
  category: "",
  search: "",
  searchList: [],
  focusItem: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CATEGORY":
      return {
        ...state,
        category: action.category,
      };

    case "ADD_TO_SEARCH":
      return {
        ...state,
        search: action.search,
      };

    case "ADD_TO_SEARCHLIST":
      return {
        ...state,
        searchList: action.searchList,
      };

    case "ADD_TO_FOCUSITEM":
      return {
        ...state,
        focusItem: action.focusItem,
      };

    default:
      return state;
  }
};

export default reducer;
