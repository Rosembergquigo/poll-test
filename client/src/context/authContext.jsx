import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from '../api/auth';

export const AuthContext = createContext()
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth no puede ser usado sin un authProvider")
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])
    
    const signup = async(user) => {
        try{
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data);
            setIsAuthenticated(true)
        }catch(err){
            console.log(err);
            setErrors(err.response.data);
        }
    };

    const signin = async(user) => {
        try{
            const res = await loginRequest(user)
            console.log(res)
        }catch(err){
            setErrors(err.response.data)
            console.error(err)
            //setErrors(err.response.data);
        }
    }

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}