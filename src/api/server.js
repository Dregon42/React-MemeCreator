const token = '98b67f94a38d66f168e47e7904a5824ea45b4222ec8b8640';

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://memeornot.onrender.com/api/memes`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create:async (data) => {
        const response = await fetch(`https://memeornot.onrender.com/api/memes`,
        {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            console.log("Failed to create new data server");   
        }

        return await response.json()
    },

    update:async (id, data) => {
        const response = await fetch(`https://memeornot.onrender.com/api/memes/${id}`,
        {
            method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error("Failed to update new data to server");   
        }

        return await response.json()
    },

    delete:async (id) => {
        const response = await fetch(`https://memeornot.onrender.com/api/memes/${id}`,
        {
            method: 'DELETE' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        
        if (!response.ok) {
            throw new Error("Failed to delete data from server");   
        }

        return;
    },
    
}