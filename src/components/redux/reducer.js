const initialState = {
  usuario: null,
  // Otros estados de la aplicación
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT_USER':
      return {
        ...state,
        usuario: null, // Actualiza el estado del usuario a null para indicar que el usuario ha cerrado sesión
      };
    // Otros casos de acción
    default:
      return state;
  }
};

export default reducer;