import { getObjByKey } from "./storage";


export const POSTNETWORK = async (url, payload, token = false) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const loginRes = await getObjByKey('loginResponse');
        headers.Authorization = loginRes.token;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error for the calling code to handle
    }
};

export const GETNETWORK = async (url, token = false) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const loginRes = await getObjByKey('loginResponse');
        headers.Authorization = loginRes.token;
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error for the calling code to handle
    }
};

export const PUTNETWORK = async (url, payload, token = false) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const loginRes = await getObjByKey('loginResponse');
        headers.Authorization = loginRes.token;
    }

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const PATCHNETWORK = async (url, payload, token = false) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const loginRes = await getObjByKey('loginResponse');
        headers.Authorization = loginRes.token;
    }

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const DELETENETWORK = async (url, token = false) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const loginRes = await getObjByKey('loginResponse');
        headers.Authorization = loginRes.token;
    }

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};