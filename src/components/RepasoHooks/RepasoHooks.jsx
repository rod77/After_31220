import React, { useEffect, useState } from 'react'

export const RepasoHooks = () => {


    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)

    const suma = () => {
        setCount(count + 1)
    }

    const suma2 = () => {
        setCount2(count2 + 1)
    }

    useEffect(() => {
        console.log("Hola Mundo")
    }, [count])

    //  --> Siempre
    // ,[] --> Solo una vez
    // ,[count] --> Solo una vez




    return (
        <>
            <hr />
            <div>RepasoHooks</div>
            <hr />
            <h1>Contador 1</h1>
            <h2>{count}</h2>
            <button onClick={suma}> + </button>
            <hr />
            <h1>Contador 2</h1>
            <h2>{count2}</h2>
            <button onClick={suma2}> + </button>

        </>
    )
}
