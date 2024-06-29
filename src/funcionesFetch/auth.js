export const register = async (formData) => {
    const url = "http://localhost:8080/auth/register";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)
        });

        if(!response.ok) {
            throw new Error('Error registrando el usuario');
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch(error){
        console.error('Error:', error)
    }
}

export const login = async(formData) => {
    const url = "http://localhost:8080/auth/login";

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)
        });

        if(!response.ok) {
            throw new Error('Error loguean el usuario');
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch(error){
        console.error('Error:', error)
    }
}

