
//poll Module
export const pollRegister = (req,res) => {
    
    console.log(req.body)
    res.send('Registrando')
};

export const getPolls = (req,res) => {
    res.send('visualización encuestas')
}

export const getPoll = (req,res) => {
    const {id} = req.params
}
