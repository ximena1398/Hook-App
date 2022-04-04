import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //si existe la data entonces extraer la posición 0 de la data
    const { author, quote } = !!data && data[0]; //condición (si !! esto es correcto entonces &&)

    console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'> {quote} </p>
                            <p />
                            <footer className='blockquote-footer'> {author} </footer>
                        </blockquote>
                    )
            }

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}
