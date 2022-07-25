import React from 'react';
import Counter from '../Components/Counter/Counter';

const CounterPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <Counter />
            </div>
        </div>
    );
};

export default CounterPage;