import { createStore, combineReducers } from 'redux';

// Definir el estado inicial del carrito
const initialCartState = {
  cart: []
};

// Definir las acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Definir el reductor para el carrito
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productIdToAdd = action.payload.id;
      const cantidadAgregar = action.payload.cantidad;

      if (state.cart[productIdToAdd]) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [productIdToAdd]: {
              ...state.cart[productIdToAdd],
              cantidad: state.cart[productIdToAdd].cantidad + cantidadAgregar
            }
          }
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [productIdToAdd]: {
              product: action.payload,
              cantidad: cantidadAgregar
            }
          }
        };
      }
      case 'REMOVE_FROM_CART':
        const updatedCart = { ...state.cart };
        const productIdToRemove = action.payload.id; // Renombrar la variable aquí
        if (updatedCart[productIdToRemove].cantidad > 1) {
          updatedCart[productIdToRemove] = {
            ...updatedCart[productIdToRemove],
            cantidad: updatedCart[productIdToRemove].cantidad - 1
          };
        } else {
          delete updatedCart[productIdToRemove];
        }
        return {
          ...state,
          cart: updatedCart
        };
      case 'CLEAR_CART':
        return {
          ...state,
          cart: {}
        };
      default:
        return state;
    }
};

// Definir el estado inicial del usuario
const initialUserState = {
  user: null
};

// Definir las acciones del usuario
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Definir el reductor para el usuario
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

// Definir el estado inicial para el token
const initialTokenState = {
  token: null
};

const SET_TOKEN = 'SET_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';

// Definir el reductor para el token
const tokenReducer = (state = initialTokenState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};




// Combinar los reductores
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  token: tokenReducer
});

// Crear la store de Redux
const store = createStore(rootReducer);

export default store;