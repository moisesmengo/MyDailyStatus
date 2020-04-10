import React from 'react'
import Header from '../components/Header'

const Index = () =>{
    return (
        <div>
            <h1>Home</h1>
            <a href="/api/login"
                className="py-4 px-2 rounded bg-pink-800 font-bold text-white
                            shadow-xl block w-1/4 text-center mx-auto houve:shadow"
            >Comece por aqui</a>
        </div>
    )
}

export default Index