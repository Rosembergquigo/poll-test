import { createContext, useContext, useState } from "react";
import { getPollRequest } from "../api/poll";

export const PollContext = createContext()
export const usePoll = () => {
    const context = useContext(PollContext);
    if(!context){
        throw new Error("usePoll no puede ser usado")
    }
    return context;
}

export const PollProvider = ({children}) => {
    const [] = useState(null)
    const [errors, setErrors] = useState([])
    const getPolls = async(poll) => {
        try{
            const res = await getPollRequest()
            console.log(res.data)
        }catch(err){
            setErrors(err.response.data);
        }
    }

    return(
        <PollContext.Provider value={{
            getPolls
        }}>
            {children}
        </PollContext.Provider>
    )
}