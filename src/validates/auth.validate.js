import {z} from 'zod'

export const registerValidate = z.object({
    email: z.string({
        required_error:"email Requerido"
    }).email({
        message: "Correo Invalido"
    }),
    name: z.string({
        required_error: "nombre Requerido"
    }),
    phone: z.string(),
    password: z.string({
        required_error: "Se requiere Indicar contrasena"
    }).min(6,{
        message: "La contraseña debe tener mínimo 6 caracteres"
    })
})

export const loginValidate = z.object({
    email: z.string({
        required_error:"email Requerido"
    }).email({
        message: "Correo Invalido"
    }),
    password: z.string({
        required_error: "Se requiere Indicar contrasena"
    }).min(6,{
        message: "La contraseña debe tener mínimo 6 caracteres"
    })
})