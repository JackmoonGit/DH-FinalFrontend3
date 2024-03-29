export function appReducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_TO_FAVORITES":
      // Verificar si existe el favorito - dedup
      const isAlreadyFavorite = state.favorites.some((favorite) => favorite.id === action.payload.id);
      if (!isAlreadyFavorite) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      } else {
        return state; // Retorna el estado actual si el item ya es favorito
      }
    case "REMOVE_FROM_FAVORITES":
      return { ...state, favorites: state.favorites.filter((favorite) => favorite.id !== action.payload.id) };
    case "RESET_FAVORITES":
      return { ...state, favorites: [] };
    default:
      return state;
  }
}
