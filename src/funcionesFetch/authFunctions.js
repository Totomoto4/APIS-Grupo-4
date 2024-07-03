import axios from 'axios'; 

export const registerUser = async (requestBody) => {

    try {
        const response = await axios.post('http://localhost:8080/auth/register', requestBody);
        console.log('Registro exitoso:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error en el registro:', error);
        alert('Ya existe un usuario con ese correo');
    }

}

export const authUser = async (requestBody) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/login', requestBody);
        console.log('Inicio de sesión exitoso:', response.data);
        return response.data
    } catch (error) {
        alert('Credenciales Incorrectas');
    }
}