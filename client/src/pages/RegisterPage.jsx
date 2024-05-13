import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate =  useNavigate();
    console.log(registerErrors)
    useEffect(()=>{
        if(isAuthenticated) navigate('/')
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

  return (
    <div className="mx-auto mt-10 max-w-md rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 md:flex md:max-w-none">
        
        <div className="p-8 sm:p-10 md:flex-auto">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Registrate</h1>
        <h3 className="">Te invitamos a crear tu cuenta</h3>
        <h4>Si ya tienes una cuenta puedes <a className="text-orange-400" href="/">Iniciar sesion aqui</a></h4>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            {
                registerErrors.map((error, i) => (
                    <div className="bg-zinc-500 p-2 text-white">
                        {error}
                    </div>
                ))
            }
            <form onSubmit={ onSubmit }>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Registro</h1>
                <input type="email" {... register("email", { required: true})}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Correo Electrónico'
                />
                {
                    errors.email && (<p className="text-red-400">Correo Requerido</p>)
                }
                <input type="text" {... register("name", { required: true})}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Nombre de Usuario'
                />
                {
                    errors.name && (<p className="text-red-400">Nombre Requerido</p>)
                }
                <input type="text" {... register("phone", { required: true})}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Movil o Celular'
                />
                {
                    errors.phone && (<p className="text-red-400">Telefono Requerido</p>)
                }
                <input type="password" {... register("password", { required: true })}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Contraseña'
                />
                {
                    errors.password && (<p className="text-red-400">Contraseña requerida</p>)
                }
                <input type="password"  {...register("cpassword", { required: true})}
                    className="w-full bg-gray-200 px-4 py-2 rounded-md my-2"
                    placeholder='Confirma tu Contraseña'
                />
                {
                    errors.cpassword && (<p className="text-red-400">Confirmación de contraseña requerida</p>)
                }
                <input type="text" {...register("profile", { value: 1 })}
                    className="w-full bg-white text-white"
                    disabled = "true"
                />
                <button type="submit">Registro</button>
            </form>
        </div>
    </div>   
  )
}

export default RegisterPage