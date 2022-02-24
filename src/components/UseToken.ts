import { useState } from 'react';

const UseToken = () => {

    const [token, setToken] = useState<any>();
    
    const getToken: any = () => {
        const tokenString: any | null = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const saveToken: any = (userToken: any) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    }

    return {
        setToken: saveToken,
        token
    }
}
export default UseToken;