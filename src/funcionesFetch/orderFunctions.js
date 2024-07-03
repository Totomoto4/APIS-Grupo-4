import axios from "axios";

export const createOrder = async (requestBody, token) => {

    try {
        const response = await axios.post('http://localhost:8080/order', requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Respuesta del servidor:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error en la solicitud POST:', error);
        alert("Hubo un problema para procesar la orden. Pruebe otro momento")
      }
}

export const verifyTotal = async (requestBody) => {

  try {
    const response = await axios.post('http://localhost:8080/auth/order/verify', requestBody);
    console.log('Respuesta del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw error;
  }

}
