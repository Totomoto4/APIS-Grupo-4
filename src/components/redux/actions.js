export const login = (usuario, isAdmin) => ({
  type: 'LOGIN',
  payload: {
    usuario,
    isAdmin
  }
});

export const logout = () => ({
  type: 'LOGOUT'
});