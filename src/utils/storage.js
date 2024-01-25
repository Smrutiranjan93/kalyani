// storageService.js

export const storeStringByKey = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
};

export const storeObjByKey = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e);
    }
};

export const getStringByKey = (keyName) => {
    try {
        const value = localStorage.getItem(keyName);
        return value !== null ? value : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const getObjByKey = (keyName) => {
    try {
        const jsonValue = localStorage.getItem(keyName);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const deleteByKeys = (keys) => {
    // keys must be an array
    try {
        keys.forEach((key) => localStorage.removeItem(key));
    } catch (e) {
        console.error(e);
    }
};

export const clearAll = () => {
    try {
        localStorage.clear();
    } catch (e) {
        console.error(e);
    }
};