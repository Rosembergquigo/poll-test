import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function LoginPage() {

  const {
    register, 
    handleSubmit, 
    formState:{errors}
    } = useForm();

   const {signin, isAuthenticated, errors: siginErrors} = useAuth();

   const navigate =  useNavigate();

   console.log(siginErrors)
   
   useEffect(()=>{
       if(isAuthenticated) navigate('/poll')
   },[isAuthenticated])

  const onSubmit= handleSubmit((data) => {
    signin(data);
  })

  return (
    <div className="mx-auto mt-10 w-md rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 md:flex md:max-w-none">
        
        <div className="p-8 sm:p-10 md:flex-auto">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Bienvenido</h1>
        <h3 className="">Ingresa y disfruta</h3>
        <h4>Si aun no tienes una cuenta puedes <a className="text-orange-400" href="/register">Registrarte desde aqui</a></h4>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            {
                siginErrors.map((error, i) => (
                    <div className="bg-zinc-500 p-2 text-white">
                        {error}
                    </div>
                ))
            }
            <form onSubmit={ onSubmit }>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Ingreso</h1>
                <input type="email" {... register("email", { required: true})}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Correo Electrónico'
                />
                {
                    errors.email && (<p className="text-red-400">Correo Requerido</p>)
                }
                
                <input type="password" {... register("password", { required: true })}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Contraseña'
                />
                {
                    errors.password && (<p className="text-red-400">Contraseña requerida</p>)
                }
                
                <button type="submit">Ingresa</button>
            </form>
        </div>
    </div>
  )
}
