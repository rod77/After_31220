import React  from 'react'


const Spinner = () => {

    const spinnerStyle = {
        color: '#e4c360',
        margin: 375
    }

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' style={spinnerStyle}></div>
            </div>
        }
        </>
    )
}

export default Spinner