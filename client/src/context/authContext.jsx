import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import { getPollQuestions } from "../api/poll";

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
            setUser(res.data);
            setIsAuthenticated(true)
        }catch(err){
            console.error(err)
            /*if (Array.isArray(err.response.data)) {
                return setErrors(err.response.data)
            }
            console.error(err)
            setErrors([err.response.data.message]);*/
        }
    }

    const getPollQuetions = async() => {
        try{
            const res = await getPollQuestions(1)
            console.log(res)
        }catch(err){
            setErrors(err.response.data)
        }
    }

    useEffect(()=>{
        async function checkLogin() {
            const cooikes = Cookies.get()

            if(cooikes.token)
            {
                try{
                    const res = await verifyTokenRequest(cooikes.token)
                    if(!res.data) return setIsAuthenticated(false)

                        setIsAuthenticated(true)
                        setUser(res.data)
                }
                catch(err){
                    setIsAuthenticated(false)
                    setUser(null)
                }
                
            }
        }
        checkLogin();
    }, [])

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            getPollQuetions,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}