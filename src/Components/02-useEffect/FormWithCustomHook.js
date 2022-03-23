import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {
    const [formValues, handelInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    //desestructuración del useState
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handelInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handelInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    value={password}
                    onChange={handelInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>

        </form>
    )
}
