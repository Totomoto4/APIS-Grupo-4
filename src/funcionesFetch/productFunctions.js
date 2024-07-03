import axios from "axios";

export const fetchAllProducts = async () => {
  const url = 'http://localhost:8080/auth/products';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propaga el error para manejarlo en el código que llama a fetchAllProducts
  }
};
  
export const fetchProduct = async (productId) => {
  const url = `http://localhost:8080/auth/products/${productId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  const url = `http://localhost:8080/auth/products/category/${category}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export const deleteProduct = async (id, token) => {
  const url = `http://localhost:8080/products/${id}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    const responseText = await response.text();  // Get the response as text

    if (!response.ok) {
      console.error('Error response text:', responseText);  // Log the error response text
      throw new Error('Error deleting product: ' + responseText);
    }

  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const createProduct = async (requestBody, token) => {

  const url = 'http://localhost:8080/products';
  const formData = new FormData();
  formData.append('name', requestBody.name);
  formData.append('category', requestBody.category);
  formData.append('description', requestBody.description);
  formData.append('stock', requestBody.stock);
  formData.append('price', requestBody.price);
  formData.append('image', requestBody.image);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Producto creado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateProduct = async (product, token) => {

  const url = `http://localhost:8080/products/${product.id}`;
  const formData = new FormData();
  formData.append('name', product.name);
  formData.append('category', product.category);
  formData.append('description', product.description);
  formData.append('stock', product.stock);
  formData.append('price', product.price);
  try {
    const response = await axios.put(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Producto actualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};


