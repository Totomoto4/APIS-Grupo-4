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
