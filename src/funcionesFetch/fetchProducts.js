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
