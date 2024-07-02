import { createStore, combineReducers } from 'redux';

// Definir el estado inicial del carrito
const initialCartState = {
  cart: []
};

// Definir las acciones
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

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
        const newCart = { ...state.cart };
        delete newCart[action.payload.id];
        return { ...state, cart: newCart };
      case 'INCREASE_QUANTITY':
        const productIdToIncrease = action.payload.id;
        return {
          ...state,
          cart: {
            ...state.cart,
            [productIdToIncrease]: {
              ...state.cart[productIdToIncrease],
              cantidad: state.cart[productIdToIncrease].cantidad + 1
            }
          }
        };
      case 'DECREASE_QUANTITY':
        const productIdToDecrease = action.payload.id;
        if (state.cart[productIdToDecrease].cantidad > 1) {
          return {
            ...state,
            cart: {
              ...state.cart,
              [productIdToDecrease]: {
                ...state.cart[productIdToDecrease],
                cantidad: state.cart[productIdToDecrease].cantidad - 1
              }
            }
          };
        } else {
          const newCart = { ...state.cart };
          delete newCart[productIdToDecrease];
          return {
            ...state,
            cart: newCart
          };
        }
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



// Combinar los reductores
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

// Crear la store de Redux
const store = createStore(rootReducer);

export default store;